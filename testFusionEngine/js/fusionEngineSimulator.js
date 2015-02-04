//max kunz

define([],

	function fusionEngineSimulator () {
	
		var currentViewName = "main";
		var startTime;
		var endTime; 
		
		var runTime = 0;
		return {
			//dialogEngine will be overwritten by this Simulator, startEngine is the dialogEngine initialization method 
			startEngine: function () {
				
			},

			sleep: function (miliseconds) {
				var now = $.now();
				var target = now + miliseconds;
				while (now < target) now = $.now();
			},
			
			countRunTime: function (duration) {
				runTime = runTime + duration;
			},
			
			runTime: function() {
				return runTime;
			},

			currentTime: function(){
				return ($.now() - startTime);
			},

			getCurrentViewName: function() {
				return currentViewName;
			},

			getContext: function() {
				return {
					"currentViewName": currentViewName,
					"SmartHome": {},
					"User":{}
				};
			},
			
			//dialogEngine rais function
			raise: function(eventName, data) {
				if (eventName == "show_change_light") currentViewName = "change_light";
				else if (eventName == "return_from_change_light") currentViewName = "main";

				//this.sleep(1000);
				var outputEvent = new event();
				outputEvent.name = eventName;
				outputEvent.data = data;
				outputEvent.delay = ($.now() - startTime);

				if(typeof outputEvent.data == "object" ) {
					outputEvent.data = JSON.stringify(outputEvent.data);
				}
				
				addOutputEvent(outputEvent);
			},

			perform: function(controlName, actionName, data) {

				//simulate respone
				if(actionName == "checkLightTargeted"){
					if(data.orientation > 0 && data.orientation < 90) return 1;
					else return false;
				} else if (actionName == "checkLightSelection") {
					var lightArray=[];
					data.targetedLights.forEach(function(light) {   lightArray.push(light.targetedLight);   });
					//return mostFrequent object or false
					return lightArray.mostFrequent(5);
				} else if (actionName == "checkLightTouched") {
					if( Array.isArray(data.lightPosition) ) return [0,1];
					if ( data.lightPosition.x <60 &&  data.lightPosition.x > 40 && data.lightPosition.y < 60 && data.lightPosition.y > 40) {
						return 0;
					} else if ( data.lightPosition.x <160 &&  data.lightPosition.x > 140 && data.lightPosition.y < 160 && data.lightPosition.y > 140) {
						return 1;
					} else if ( data.lightPosition.x <260 &&  data.lightPosition.x > 240 && data.lightPosition.y < 260 && data.lightPosition.y > 240) {
						return 2;
					}

					return false;
				} else if (actionName == "getLightColor") {

					if (data.light == 0) return "FF5522";
					else if (data.light == 1) return "223344";
					else return false;
				} 

				//set Output event
				//this.sleep(1000);
				var outputEvent = new event();
				if (controlName == "<") {
					outputEvent.name = 	actionName  + " <";
				} else {
					outputEvent.name = actionName + " >";
				}
				outputEvent.data = data;
				outputEvent.delay = ($.now() - startTime);

				if(typeof outputEvent.data == "object" ) {
					outputEvent.data = JSON.stringify(outputEvent.data);
				}
				
				addOutputEvent(outputEvent);
			},
			
			raiseInput: function (event) {
				if (startTime == undefined) startTime = $.now();
				if (typeof event.data == "string") {
					 event.data = $.parseJSON(event.data);
				}

				var data = event.data;

				setTimeout(function () {
						data["timestamp"] = $.now();
						if (data.start && data.start < 0) data.start = $.now() + data.start;
						if (data.end && data.end < 0) data.end = $.now() + data.end;

						var startProcess = $.now();
						mmir.InputEngine.raise(event.name, data);
						var stopProcess = $.now();
						mmir.DialogManager.countRunTime( stopProcess - startProcess );
						mmir.DialogManager.endTime = stopProcess;
					}, event.delay);
			},
			
			//run starts the simulations
			run: function (InputEvents) {
				
			},
			
			getInstance: function () {
				return this;
			},

			reset: function () {
				startTime = undefined;
				endTime = undefined;
				runTime = 0;
				currentViewName = "main";
			}
		}

	}
);