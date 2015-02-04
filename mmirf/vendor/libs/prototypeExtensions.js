
define(['math'], function(math) {

    var instance = {
        
        getScope: function(interactionInput, scopeDefinition) {
            //build scope
            var scope = {};

            $.each(scopeDefinition, function (key, value) {
                try {
                    scope[key] = eval("interactionInput." + value);
                } catch(e) {
                    scope[key] = undefined;
                }
            });

            return scope;
        },
        getData: function (interactionInput, dataDefinition) {

            var result = null;

            //prepare data object
            if ( typeof dataDefinition == "object") {

                //build scope
                if (typeof dataDefinition.scope == "object") {
                    result = this.getScope(interactionInput, dataDefinition.scope);
                }
                //operation math is defined
                if (dataDefinition.operation == "math.eval" && typeof dataDefinition.expression == "string") {
                    result = math.eval(dataDefinition.expression, result);
                }

            } else if (Array.isArray(output.data) ) {
                result = JSON.parase(JSON.stringify(output.data));
            } else {
                result = output.data;
            }

            return result;
        },
        gestureSpeechMatch: function(data) {
            if (data.gesture && data.gesture.timestamp && data.speech && data.speech.start && data.speech.end) {

                var slotNum = 1;
                if (Array.isArray(data.gesture) ) slotNum = data.gesture.length;
                var speechLength = data.speech.end - data.speech.start;
                var radius = speechLength / slotNum;

                if (slotNum > 1) {
                    for (var i = 0; i < slotNum; i++) {
                        var expectedTimestamp = data.speech.start + ( (i+1) * (speechLength / (slotNum+1) ) );
                        var distance = Math.abs(expectedTimestamp - data.gesture[i].timestamp);

                        if ( distance > radius ) {
                            return false;
                        }
                    } 

                } else {
                    var expectedTimestamp = data.speech.start + (speechLength / 2);
                    var distance = Math.abs(expectedTimestamp - data.gesture.timestamp);

                    if ( distance > radius ) {
                        return false;
                    }
                }
            } else {
                return false;
            }
        },

        tv4KeywordConstraints:  function (interactionInput, constraints, schema) {
            
            //perform constraints as long as results valid as well
            for (var constraintName in constraints) {
                var constraint = constraints[constraintName];

                //if target is Application
                if ( constraint.target && constraint.target == "Application" && constraint.function) {
                    //build scope
                    var constraintData = instance.getData(interactionInput, constraint.data);

                    interactionInput[constraintName] = mmir.DialogManager.perform(constraint.target, constraint.function, constraintData);
                }
                // if target gesture speech match
                else if (constraint.data && constraint.operation && constraint.operation == "gestureSpeechMatch" && constraint.data.scope) {
                    //build scope
                    var data = instance.getData(interactionInput, constraint.data);                    
                    interactionInput[constraintName] = instance.gestureSpeechMatch(data);
                }

                if (interactionInput[constraintName] === false) 
                        return "Failure in " + constraintName;
            }

            return null;
           
        },

        compareProperties: function(object1, object2, propertiesDefinition) {
            result = true;
            if (typeof definition != 'object') {
                propertieDefinition = object1;
            }
            for (var propertie in propertieDefinition) {
                if (propertie == "timestamp" || propertie == "start" || propertie == "end") {
                    continue;
                } else if(JSON.stringify(object1[propertie]) != JSON.stringify(object2[propertie]) ) {
                    result = false;
                    break;
                }
            }
            return result;
        },

        compareProperties2: function(input, definition, eventName, eventData) {
            result = true;
            for (var propertie in definition.properties[eventName].properties) {
                if (propertie == "timestamp" || propertie == "start" || propertie == "end") {
                    continue;
                } else if(JSON.stringify(input[eventName][propertie]) != JSON.stringify(eventData[propertie]) ) {
                    result = false;
                    break;
                }
            }
            return result;
        },

        addInputArray: function(input, definition, eventName, eventData) {
            //if array exists, append to the end, else create new one
            var added = false;
            if (typeof input[eventName] != "undefined") {

                // attraction type is elongate and data are equal, transform single time event into duration event from start to timestamp 
                if (definition.properties[eventName].items && definition.properties[eventName].items.attraction &&  
                    definition.properties[eventName].items.attraction == "elongate" &&
                    this.compareProperties(input[eventName][input[eventName].length - 1], eventData, definition.properties[eventName].items.properties) ) {
                    
                    if ( !input[eventName].start ) { 
                        input[eventName].start = input[eventName].timestamp;
                    }
                    input[eventName].timestamp = $.now();
                    added = true;
                    if (IS_DEBUG_ENABLED)
                        console.warn("[" + mmir.DialogManager.currentTime() + "] elongate " + definition.title + ": " + JSON.stringify(eventData));
						
                
                }
                //check/add if free space available
                else if(!definition.properties[eventName].maxItems || input[eventName].length < definition.properties[eventName].maxItems) {
                    //ADD
                    input[eventName].push(eventData);
                    added = true;
                    if(IS_DEBUG_ENABLED)
                        console.warn("[" + mmir.DialogManager.currentTime() + "] add " + definition.title + " : "  + JSON.stringify(eventData));

                } 
                // if not, but array items defined as weak, then delete first, add as last
                else if (definition.properties[eventName].items && definition.properties[eventName].items.attraction &&	
                    definition.properties[eventName].items.attraction == "weak" ||
                    (definition.properties[eventName].attraction && definition.properties[eventName].attraction == "weak" ) ) {
                    //ADD
                    input[eventName].shift();
                    input[eventName].push(eventData);
                    added = true;
                    if(IS_DEBUG_ENABLED)
                        console.warn("[" + mmir.DialogManager.currentTime() + "] weak " + definition.title + ": " + JSON.stringify(eventData));
                }

            } else {   
                input[eventName] = [eventData];
                added = true;
            }

            return added;
        },

        addInputObject: function(input, definition, eventName, eventData) {
            //add if free slot available or defined as weak
            var added = false;
            if(  !input[eventName] || (definition.properties[eventName].attraction && definition.properties[eventName].attraction == "weak") ) {
                input[eventName] = eventData;
                added = true;
            }
            // attraction type is elongate and data are equal, transform single time event into duration event from start to timestamp 
            else if (definition.properties[eventName].attraction && definition.properties[eventName].attraction == "elongate" && this.compareProperties(input[eventName], eventData, definition.properties[eventName].properties) )  {
                
                if ( !input[eventName].start ) { 
                    input[eventName].start = input[eventName].timestamp;
                }
                input[eventName].timestamp = $.now();
                added = true;
            }

            return added;
        },

        addInputPrimitive: function(input, definition, eventName, eventData) {
            //add primitive types
            var added = false;
            if (eventData && (!input[eventName] || (definition.properties[eventName].attraction && definition.properties[eventName].attraction == "weak" ) )  ){
                input[eventName] = eventData;
                added = true;
            }
            return added;
        }
    };

    return instance;

} );



Array.prototype.count = function(obj){
    var count = 0;
    if(typeof obj != "undefined"){
        for(i = 0; i < this.length; i++){
            if(this[i] == obj){
                count++;
            }
        }
    }
    return count;
}


Array.prototype.mostFrequent = function (minFrequency) {
    if (this.length > 0) {
        var counts = {}, max = 0, res;
        for (var v in this) {
          counts[this[v]] = (counts[this[v]] || 0) + 1;
          if (counts[this[v]] > max) { 
            max = counts[this[v]];
            res = this[v];
          }
        }
        if (minFrequency && max >= minFrequency) {
            return res;    
        } else if(!minFrequency) {
            return res;
        } else{
            return false;   
        }
    } else {
        return false;
    }
}