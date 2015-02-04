/* Max */

define(['prototypeExtensions', 'core', 'scionEngine', 'jquery', 'commonUtils', 'module', 'tv4' ],
	/**
	 * The InputManager handles input events.
	 * 
	 * <p>
	 * On initialization, the InputManager also creates the {@link mmir.InputEngine},
	 * and returns it as the second argument of the {@link #init}() function's callback
	 * (or the Promise's triggered callbacks).
	 * 
	 * In addition, the InputEngine is exported as module <code>"inputEngine"</code> via
	 * RequireJS' <code>define()</code> function.
	 * 
	 * @example
	 * //initialization of inputManager
	 * require('inputManager').init().then( function(inputManagerInstance, inputEngineInstance){
	 * 		//do something
	 * });
	 * 
	 * 
	 * @name mmir.InputManager
	 * @static
	 * @class
	 * 
	 */
	function(
		ext, core, scionEngine, $, commonUtils, module, tv4 
){

	//math expression described here : http://mathjs.org/docs/expressions.html


	//next 2 comments are needed by JSDoc so that all functions etc. can
	// be mapped to the correct class description
	/** @scope mmir.InputManager.prototype */
	/**
	 * #@+
	 * @memberOf mmir.InputManager.prototype 
	 */
	var logInteraction = "move color";

	var _instance = {

		worker: null,
		interactionPool: [],

		recordInputEvents: false,
		inputDump: { type: "dump", events: []},
		speechDump: { type: "speechdump", speechResults: []},
		/** 
		 * @deprecated instead: use mmir.InputManager object directly.
		 */
		getInstance : function() {
			return this;
		},
		
		
		reset: function() {
			this.interactionPool.forEach(function(interaction) {
				interaction.input = {};
			});
			inputDump = { type: "dump", events: []};
		},

        recordInput: function (eventName, eventData) {
        	if (this.recordInputEvents) {
        		if (eventName == 'speechResults') {
        			if( Array.isArray(eventData) ){
        				this.speechDump.speechResults = this.speechDump.speechResults.concat(eventData);
        			} else {
	        			this.speechDump.speechResults.push(eventData);
	        		}
	        	} else {
	        		this.inputDump.events.push({
	    				"Name": eventName,
	    				"Data": eventData,
	    				"Delay": eventData.timestamp
	        		});
	        	}
        	}
        },

        startStopInputRecording: function () {
        	if (this.recordInputEvents) {
        		this.recordInputEvents = false;
        		console.warn(JSON.stringify(this.inputDump));
        		console.warn(JSON.stringify(this.speechDump));
        		this.inputDump = { type: "dump", events: []};	
        	}
        	else this.recordInputEvents = true;
        },

        raiseOutput: function(outputEvent, outputTarget, outputData) {
            if ( outputTarget && outputTarget == "InputEngine") {
                mmir.InputEngine.raise(outputEvent, outputData);
                setTimeout(function () { mmir.DialogManager.perform( "<", outputEvent, outputData); }, 0);
            }
            else if ( outputTarget ) {
                setTimeout(function () { mmir.DialogManager.perform(outputTarget, outputEvent, outputData); }, 0);
            } else {
                setTimeout(function () { mmir.DialogManager.raise(outputEvent, outputData); }, 0);
            }
        },

        performOutput: function(interaction, eventName, eventData) {
        	//delete maintain timer if expired
			if (interaction.input.maintain && interaction.input.maintain < $.now() ) {
				delete interaction.input.maintain;	
			} 

        	var valid = false;
			//validate input data 
			valid = tv4.validate(interaction.input, interaction.definition);

			//console.log("data result: " + JSON.stringify(valid));
			//perform output
			if(IS_DEBUG_ENABLED && tv4.error && tv4.error.message && interaction.definition.title == logInteraction && (interaction.input.voice_interpretation || interaction.input.gesture_interpretation) ) {
				console.log("[" + mmir.DialogManager.currentTime() + "] Validation error: " + tv4.error.message);
				if (interaction.input.gesture_interpretation) console.log("Target Light: " + interaction.input.gesture_interpretation.selectedLight);
			}
			if (valid && interaction.definition.output && typeof interaction.definition.output.event == "string" ) {
				
				var outputEvent = interaction.definition.output.event;
				var outputTarget = interaction.definition.output.target;

				//generate output data
				var outputData = {};
				if (interaction.definition.output.data)
					outputData = ext.getData(interaction.input, interaction.definition.output.data);
					
				//destroy input object before raise
				interaction.input = {};
				//fire output event, one of: inputEngine.input, dialogEngine.perform or dialogEngine.raise
				if(IS_DEBUG_ENABLED && eventName == 'voice_interpretation' && eventName == 'gesture_interpretation' && interaction.definition.title == logInteraction) {
					console.log("[" + mmir.DialogManager.currentTime() + "] Match (["+ interaction.definition.title + "] :" + outputEvent );
				}
				this.raiseOutput(outputEvent, outputTarget, outputData);

			} else {
				if (IS_DEBUG_ENABLED && (eventName == 'voice_interpretation'  || eventName == 'gesture_interpretation') && interaction.definition.title == logInteraction) {
					console.log( "[" + mmir.DialogManager.currentTime() + "] NoMatch ( ["+ interaction.definition.title + "] " + eventName + "): " + tv4.error.message + " - data: " + JSON.stringify(eventData) );
					//console.log( "[" + mmir.DialogManager.currentTime() + "] constraint: " + JSON.stringify(interaction.input.selectedColor));
				}
			}
			tv4.reset();
        },

		/**
		* This function raises an event. 
		* 
		* @function raise
		* @param {String} eventName
		* 				The name of the event which is to be raised
		* @param {Object} [eventData] OPTIONAL
		* 				Data belonging to the event
		* @throws {Error} if this function is invoked while the internal
		* 				   event/state engine (i.e. {@link mmir.InputEngine}
		* 				   is not initialized yet
		* @public
		*/

        raise: function(args) {

        	if (arguments.length = 2) {
        		this.raisePlain (arguments[0], arguments[1]);
        	} else {
        		this.raiseEmma (arguments[0]);
        	}
        },

        raiseEmma: function(input) {
        	//translate emma based json to plain parameter (name, data)
        	if (input && input.element) {

        		if (input.element == 'sequence' && input.data && Array.isArray(input.data)) {
        			for (var i = 0; i < input.data; i++){
        				this.raiseEmma(input.data[i]);
        			}
        		}
        		else if (input.element == 'interpretation' && input.mode && input.data) {
        			this.raisePlain(input.mode+"_"+input.element, input.data);
        			if (input.id) input.data.id = input.id;
        		}
        	} 
        },

		raisePlain: function(eventName, eventData) {

			//console.log("EventName: " + eventName + "  Data: " + eventData);
			//build input object
			if (!eventData) eventData = {};
			if (!eventData.timestamp) eventData["timestamp"] = $.now();

			this.recordInput(eventName, eventData);

			var i = 0;
			while (i < this.interactionPool.length) {
				var interaction = this.interactionPool[i++];
				
				var inputAdded = false;
				//check if input input is required by interaction
				if (interaction.definition.required && $.inArray(eventName, interaction.definition.required) >= 0 ) {
					
					//delete input if  lifetime expired
					if(interaction.input.expired && interaction.input.expired < $.now() ) {
						if(IS_DEBUG_ENABLED && interaction.definition.title == logInteraction)
							console.error("[" + mmir.DialogManager.currentTime() + "] input expired: " + interaction.definition.title + " - " + JSON.stringify(interaction.input) );
						delete interaction.input;
						interaction.input = {};
					}

					//ARRAY: if slot is an array, then append input object to list
					if(interaction.definition.properties && interaction.definition.properties[eventName] && 
						interaction.definition.properties[eventName].type == "array" )
					{
						if (tv4.validate(eventData, interaction.definition.properties[eventName].items) ) {
							inputAdded = ext.addInputArray(interaction.input, interaction.definition, eventName, eventData);
							if (inputAdded && interaction.definition.properties[eventName].maintain ) {
								interaction.input.maintain = $.now() + interaction.definition.properties[eventName].maintain;
							}
						}
					}
					//OBJECT: else single object 
					else if (interaction.definition.properties[eventName].type == "object") { 
						inputAdded = ext.addInputObject(interaction.input, interaction.definition, eventName, eventData);
					} else {
						inputAdded = ext.addInputPrimitive(interaction.input, interaction.definition, eventName, eventData);
					}
					
					//CONTEXT: add context if required
					if( inputAdded && $.inArray("context_interpretation", interaction.definition.required) >= 0 && (!interaction.input.hasOwnProperty("context_interpretation") || interaction.definition.properties["context_interpretation"].attraction == "weak") ) {
						interaction.input["context_interpretation"] = mmir.DialogManager.getContext();
					}
					
					//print error on from partial validation
					if(IS_DEBUG_ENABLED && tv4.error && tv4.error.message) {
						console.error("[" + mmir.DialogManager.currentTime() + "] Validation error in " + interaction.definition.title + ": " + tv4.error.message);
						if (interaction.input.gesture_interpretation) console.log("Target Light: " + interaction.input.gesture_interpretation.selectedLight);						
					}

					//if input was added increase expired timestamp
					if (inputAdded && typeof interaction.definition.expired == 'number') {
						var increase = $.now() + interaction.definition.expired;
						interaction.input.expired = increase;
						if(IS_DEBUG_ENABLED && interaction.definition.title == logInteraction)
							console.warn("[" + mmir.DialogManager.currentTime() + "] expire increase: " + increase);
					}
				} 
				tv4.reset();
				
				if (inputAdded && interaction.input.maintain) {
					//perfrom output when maintain timestamp is reached. Interaction will finished by the last input event which is set the maintain parameter
					//Events which do not define the maintain parameter will not trigger output method
					(function() {
						var index = (i-1);
						if (interaction.definition.properties[eventName].maintain) {

							clearTimeout(interaction.input.outputTimer);
							//console.debug("set interaction index: " + index + "[ " + interaction.definition.title + " ]");
							interaction.input.outputTimer = setTimeout(function () {
								//console.debug("raise interaction index: " + index + "[ " + this.mmir.InputEngine.interactionPool[index].definition.title + " ]");
								this.mmir.InputEngine.performOutput(this.mmir.InputEngine.interactionPool[index], eventName, eventData);
							}, interaction.definition.properties[eventName].maintain);
						}
					})();
				} else if (inputAdded) {
					this.performOutput(interaction, eventName, eventData);
				}
			}
		},

	};

	return $.extend(true, _instance, {

		init : function() {
			delete this.init;

			tv4.defineKeyword("constraints", ext.tv4KeywordConstraints);

			var inputDefinitionPath = module.config().inputDefinitionPath;
			var inputDefinitionFiles = module.config().inputDefinitionFiles;


			inputDefinitionFiles.forEach(function(file) {

				$.getJSON( inputDefinitionPath+file+".json", function( interactionDefinition ) {
			    	var newInteraction = {
			    		"definition": interactionDefinition,
			    		"input": {} 
			    	}
    				_instance.interactionPool.push(newInteraction);
    				console.log("IE Load: " + file.name);
				}).fail(function(err) {
				    console.error( "definition (" + file + ") " + err.statusText + ":" + err.responseText);
				});	
    		});
			
			var webWorkerPath = module.config().webWorker;
			webWorkerPath = null;
			// build wrapper functions for raise when web worker is available
			if (window.Worker && webWorkerPath) {
				//create worker
				this.worker = new Worker(webWorkerPath); 

				//override raise function 
				_instance._raise = _instance.raise;
				_instance.raise = function(eventName, eventData) {
					//send message to worker, which will execute the raise function in another thread
					this.worker.postMessage({
						"cmd": "raise",
						"eventName":eventName, 
						"eventData": eventData
					});
				}

				//output
				//original raiseOutput will be called by the main thread from the eventHandler defined in inputEngine.init
				_instance._raiseOutput = _instance.raiseOutput;
				_instance.raiseOutput = function(outputEvent, outputTarget, outputData) {
					this.worker.postMessage({
						"cmd": "raiseOutput",
						"outputEvent": outputEvent,
						"outputTarget": outputTarget,
						"outputData": outputData
					});
				};

				//callback, will called by the overwritten raiseOutput function (take a lock in inputEngineWorker.js)
				this.worker.addEventListener('message', function(e) {
				  _instance._raiseOutput(e.data.outputEvent, e.data.outputTarget, e.data.outputData);
				}, false);
			}

			return $.Deferred(function(theDeferredObj) {
				
				theDeferredObj.resolve(_instance);	
				
			}).promise();
		}
	});
	
	/** #@- */

});
