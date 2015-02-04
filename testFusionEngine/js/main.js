//declare global variables


	require(['event', function(){console.log("event ready")}]);


	var commonUtils;
	var pm;

	var viewFactory;//
	var motionDetector; //

	var dialogManager;
	var inputManager;
	var controllerManager;
	var semanticInterpreter;
	var modelManager;

	var initialized = false; //
	var audioInput; //

	var applicationLanguage;
	var langManager;

	var appConfiguration; //

	var fileSys = ''; //
	var content = ''; //

	var forBrowser = true;
	var IS_DEBUG_ENABLED = true;

	var syncInputTimer = null;
	var inputObjects = [];
	var inputPositionMap = [];
	var outputPositionMap = [];

	var availableEventNames = [
		  "show_info",
	      "voice_interpretation",
	      "show_kv_details_vollversicherung",
	      "show_kv_details_zusatzversicherung",
	      "back"
	      ];

	var availableEventData = [
	      "{ \"ShowInfo\":\"0\" }",
	      "{ \"ShowMotorradversicherung\":\"0\" }",
	      "{ \"ShowAutoversicherung\":\"0\" }",
	      "{ \"ShowKrankenversicherung\":\"0\" }",
	      "{ \"ShowKVVollversicherung\":\"0\" }",
	      "{ \"ShowKVZusatzversicherung\":\"0\" }",
	      "{ \"ShowKontakt\":\"0\" }",
	      "{ \"back\":\"0\" }",
	      "null"
	      ];





function main() {
	
	jQuery(function ($) {

		initialize ();
		
	    $("#event0").draggable({ containment: "parent", axis: "x", drag: eventDrag });
	    $("#event0").find("input[name='eventName']").autocomplete({ source: availableEventNames });
	    $("#event0").find("textarea[name='eventData']").autocomplete({ source: availableEventData });

		$("#addListItem").click(function (e) {

			//show_phrase("Item Added");
	    	e.preventDefault();
	    	//var lastChild = $("#inputEvents").children().last().prev();
	    	//var newChild = lastChild.clone();
	    	//newChild.draggable({ containment: "parent", axis: "x", drag: eventDrag });
	    	//newChild.children().first().removeClass("notDisplayed");
	    	
	    	//newChild.insertBefore($("#inputEvents").children().last());
			var newEvent = new event();
			newEvent.name = "new Event";
			newEvent.delay = 0;
			addInputEvent(newEvent);
	      });

		$("#selectEngine").change(function() {
	    	if ( typeof $(this).val() != undefined && $(this).val() == "max") {
	    		mmir.InputEngine = mmir._InputEngineAlt;
	    	} else {
	    		mmir.InputEngine = mmir._InputEngine;
	    	}
	    });

	    $("#inputEvents").change(function() {
	    	inputEventsChanged();
	    });

		$("#outEvent0").dblclick(function(){
			$(this).toggleClass("min");
		});
	      
	    $("#play").click(function(e) {
	    	clearOutputEvents();
	    	mmir.DialogManager.reset();
			if (mmir.InputEngine.reset) mmir.InputEngine.reset();

	    	var maxDelay = 0;

	    	$('#inputEvents li:not(:first)').each(function () {
	    		if (this.children.length >= 6) {
	    			var eventData = {};
		    		var inputEvent = new event();
			    	inputEvent.parseDomObject(this);
			    	if (maxDelay < inputEvent.delay) maxDelay=inputEvent.delay;

					if(eventData.start) {
						inputEvent.delay = inputEvent.delay;
					}

			    	mmir.DialogManager.raiseInput(inputEvent);
			    	//addOutputEvent(inputEvent);
	    		}
	    	});

	    	setTimeout(function() {show_phrase("runTime: " + mmir.DialogManager.runTime() + " ms")}, maxDelay+1000);

	    });

	    $('#files').change(function(e){
	    	e.preventDefault();
			var files = [].slice.call(this.files);
    		
    		files.forEach(function(file) {
				(function() {
					if (file.name == '.DS_Store') return;
					var reader = new FileReader();
	    			
	    			reader.onloadend = function () {
	    				var newJSONObject = JSON.parse(reader.result);
						setJsonInputEvent(newJSONObject);
					}
			    	reader.onerror =  function(theFileEvent) {
						$(this).siblings('.text').text('File not Available: ' + theFileEvent);
						console.log('File not Available: ' + theFileEvent);
		    		};

					reader.readAsBinaryString(file);

				}());

    		});
	    });

	    loadPredefinedProperties();
		
	});
}

function initialize () {

	localStorage.setItem('ac_source', '{"voice_interpretation":"53","back":"max"}');
	$("#messageBoxContainer").fadeOut(0);
    //commonUtils = mmir.CommonUtils.getInstance().initialize(initializeApplication);    
}

function loadPredefinedProperties() {
	inputObjects.length = 0;
	var loadedObjects = JSON.parse(localStorage.getItem('inputObjects'));	

	if(loadedObjects != null && typeof loadedObjects != "undefined" && loadedObjects.length > 0) {
		inputObjects.length = 0;
		loadedObjects.forEach(function(json) { setJsonInputEvent(json); });
	}

}


/*
** events assigned in html file
*/

function eventDrag (event) {
	var xPos = this.offsetLeft - this.parentNode.offsetLeft;
	var eventData = {};

	try {
		eventData = JSON.parse($(event.target).find("textarea[name='eventData']").val());
	} catch (e) { 
		console.error(e);
	}

	if (eventData && eventData.start && eventData.end  ) {
		xPos = xPos + Math.abs(eventData.start / 10);
	}	

	$(event.target).children().last().val(xPos/100);
	inputEventsChanged();
}

function xClicked (event) {
	event.parentElement.remove();
	inputEventsChanged();
}

function delayDoubleClicked () {

	clearTimeout(syncInputTimer);
	clearInputEvents(); 
	sortObjectsBy(inputObjects,"Delay");

	inputObjects.forEach(function(jsonObject){
		setJsonInputEvent(jsonObject);
	});
}

function clearInputEvents(event) {
	$('#inputEvents li:not(:first):not(:last)').remove();
	//remove labels
	inputPositionMap.length = 0;
	inputPositionMap = [];
	$('#left p.inputLabel').remove();

	var firstChild = $("#inputEvents").children().first();

	$(firstChild).find("input[name='eventName']").val("");
	$(firstChild).find("textarea[name='eventData']").val("");
	$(firstChild).find("input[name='eventDelay']").val("");

	/*var offset = $(firstChild).offset();
	offset.left = $(firstChild).parent().offset().left;
	$(firstChild).offset(offset);
	*/
	inputObjects.length = 0;
	localStorage.removeItem('inputObjects');
	show_phrase("All Input Events removed");

	$('#files').replaceWith( $('#files').val('').clone( true ) );
	inputEventsChanged();

	clearOutputEvents();
}

function outputEventClicked(event) {
	var eventName = $(event).find("input[name='eventName']").val();
	var color = $(event).css("background-color");
	if (color.indexOf("rgba(22, 22, 22") >= 0) {
		//paint it colorful
		if(eventName == "show_change_light") 
			color = "rgba(162, 22, 22, 0.75)";
		else if(eventName == "displaySelectedColorRotated@Application") 
			color = "rgba(22, 162, 162, 0.75)";
		else if(eventName == "r_lightTargeted@Application") 
			color = "rgba(22, 162, 22, 0.75)";
		else if(eventName.substr(0,6) == "input_")
			color = "rgba(162, 162, 162, 0.75)";
		else color = "rgba(162, 22, 162, 0.75)";

	} else {
		//set back to grey
		color = "rgba(22, 22, 22, 0.75)";
	}

	$('#outputEvents').children('li').each(function () {
		var name = $(this).find("input[name='eventName']").val();
		if (name == eventName) {
    		$(this).css("background-color", color);
	    }
	});
}
// events end


function addOutputEvent(event) {

	var newChild;
	var lastChild = $("#outputEvents").children().last();
	
	//clone last if not the first event. first event will be set into unvisible template box
	if ( $(lastChild).hasClass("notDisplayed") ) {
		newChild = lastChild;
		$(newChild).removeClass("notDisplayed");
		
	} else {
		newChild = lastChild.clone();
		$("#outputEvents").append(newChild);
	}

	//set vertical position for any type of eventname. Also add an label on same level
	if (!outputPositionMap[event.name]) {
		outputPositionMap[event.name] = 360 + (Object.keys(outputPositionMap).length * 30);

		//setlabel
		var newLabel = $("<p class='inputLabel'>" + event.name.replace("_interpretation", "") + "</p>").appendTo("#right");
		var offset = $(newLabel).offset();
		offset.top = outputPositionMap[event.name] -9; //subtract 9 px to place labelline in center of listElements
		$(newLabel).offset(offset);

		$("#outputEvents").height($("#outputEvents").height() + 30);
	}

	//set position	
	var offset = $(newChild).offset();
	offset.top = outputPositionMap[event.name];
	offset.left = $(newChild).parent().offset().left + (event.delay * 0.1);
	$(newChild).offset(offset);

	//set values
	$(newChild).find("input[name='eventName']").val(event.name);
	$(newChild).find("textarea[name='eventData']").val(event.data);
	$(newChild).find("input[name='eventDelay']").val(event.delay/1000);
}

function setJsonInputEvent(json) {
	//json type of dump contains multiple events
	if (json && json.type && json.type == 'dump' && json.events) {
		if (!json.firstTimestamp) {
			json.firstTimestamp = json.events[0].Delay;
			for (var i = 1; i < json.events.length; i++) {
				if (json.firstTimestamp > json.events[i].Delay) {
					json.firstTimestamp = json.events[i].Delay;
				}	
			}
		}
		var jsonObject;

		while (jsonObject = json.events.pop() ) {
			jsonObject.Delay = jsonObject.Delay - json.firstTimestamp;
			if(jsonObject.Name == 'voice_interpretation' || jsonObject.Name == 'gesture_interpretation' || jsonObject.Name == 'touch_interpretation') setJsonInputEvent(jsonObject);
		}
	}
	//else singe json input
	else if (json) {
		var newEvent = new event();

		newEvent.name = json.Name;
		newEvent.data = JSON.stringify(json.Data);
		newEvent.delay = json.Delay;

		//set vertical position for any type of eventname. Also add an label on same level
		if (!inputPositionMap[newEvent.name] && newEvent.name) {
			inputPositionMap[newEvent.name] = 200 + (Object.keys(inputPositionMap).length * 30);
			
			//setlabel
			var newLabel = $("<p class='inputLabel'>" + newEvent.name.replace("_interpretation", "") + "</p>").appendTo("#left");
			var offset = $(newLabel).offset();
			offset.top = inputPositionMap[newEvent.name] -9; //sub 10 px to place labelline in center of listElements
			$(newLabel).offset(offset);
			
			//$("#inputEvents").height($("#inputEvents").height() + 30);
		}
		addInputEvent(newEvent);
	}
}

function addInputEvent(event) {
	var eventData;
	try {
		eventData = JSON.parse(event.data);
	} catch (e) {
		
	}
	var newChild;
	//last child except the add button
	
	//clone if not the first event. first event will be set into unvisible template box
	/*	var lastChild = $("#inputEvents").children().last().prev();

	if ( $(lastChild).find("input[name='eventName']").val() == "" ) {
		newChild = lastChild;
		$(newChild).removeClass("notDisplayed");
		
	} else {
		newChild = lastChild.clone();*/
		newChild = $("#inputEvents").children().first().clone();		
		var id = parseInt( newChild.attr('id').substr(5) )  +  1 ;
		newChild.attr('id', 'event' + id);
    	newChild.children().first().removeClass("notDisplayed");
		if (event.name == "new Event") { 
			newChild.removeClass("min");
			newChild.css("width", "")
		}

    	newChild.insertBefore($("#inputEvents").children().last());

    	newChild.draggable({ containment: "parent", axis: "x", drag: eventDrag });
	/*}*/

	//set position
	
	var offset = $(newChild).offset();
	offset.left = $(newChild).parent().offset().left + (event.delay * 0.1);
	offset.top = inputPositionMap[event.name];

	//set width when event has a duration
	if ($(newChild).hasClass("min") && eventData && eventData.start && eventData.end  ) {
		$(newChild).css("width", Math.abs(eventData.start-eventData.end) / 10);
		offset.left = $(newChild).parent().offset().left  + (eventData.start / 10 )  + (event.delay * 0.1);
		//event.delay = event.delay + eventData.start;
	}	
	$(newChild).offset(offset).css("position: absolute");

	//set values
	$(newChild).find("input[name='eventName']").val(event.name);
	$(newChild).find("textarea[name='eventData']").val(event.data);
	$(newChild).find("input[name='eventDelay']").val(event.delay /1000);
	$(newChild).dblclick(function(){
		$(this).toggleClass("min");		
		
		//set width when event has a duration
		if ($(this).hasClass("min") && eventData && eventData.start && eventData.end ) {
			$(this).css("width", Math.abs(eventData.start-eventData.end) / 10);

		} else {
			$(this).css("width", "");
		}
		$(this).css("position: absolute");
	});
	
	$(newChild).removeClass("notDisplayed");
	//sync
	inputEventsChanged();
}

function inputEventsChanged() {
	clearTimeout(syncInputTimer);
	syncInputTimer = setTimeout(syncInputEvents, 1000);
}

function syncInputEvents () {

	if (inputObjects == null) inputObjects = [];
	inputObjects.length = 0;

	//copy dom list to array list
	$('#inputEvents li:not(:first)').each(function () {
		if (this.children.length >= 6) {
    		var inputEvent = new event();
	    	inputEvent.parseDomObject(this);

			inputObjects.push({
				"Name": inputEvent.name,
				"Data": inputEvent.data,
				"Delay": inputEvent.delay
			});
	    }
	});
	//store array list in local storage
	localStorage.setItem('inputObjects', JSON.stringify(inputObjects));
}

function clearOutputEvents() {
	//reset output events if at least one event is displayed
	var firstChild = $("#outputEvents").children().first();
	$("#outputEvents").css("height", "");
	
	if ( ! $(firstChild).hasClass("notDisplayed") ) {
		$('#outputEvents li:not(:first)').remove();
		
		//remove labels
		outputPositionMap.length = 0;
		outputPositionMap = [];
		$('#right p.inputLabel').remove();

		//reset values
		$(firstChild).find("input[name='eventName']").val("");
		$(firstChild).find("textarea[name='eventData']").val("");
		$(firstChild).find("input[name='eventDelay']").val("");
		$(firstChild).addClass("notDisplayed");
	}
}

function show_phrase(message) {
	
	if(	$("#messageBox").prop("disabled") != true) {
		$("#messageBox").prop("disabled", true);
		
		if( typeof message == "object" ) $("#messageBox").text(JSON.stringify(message));
		else $("#messageBox").text(message);
		
		$("#messageBoxContainer").fadeIn( 800 ).delay( 3000 ).fadeOut( 400, function() { $("#messageBox").prop("disabled", false); });
	} else {
		setTimeout(function () {show_phrase(message);}, 5000);
	}
}

function sortObjectsBy(arrayOfObjects, propertie) {
	try {
		arrayOfObjects.sort(function (a, b) {
			if (a[propertie] < b[propertie]) return -1;
			if (a[propertie] > b[propertie]) return 1;
			return 0;
		});
	} catch (error) {
		show_phrase("sort failed");
		console.log(error);
	}
}