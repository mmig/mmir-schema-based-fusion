/*
 * 	Copyright (C) 2012-2013 DFKI GmbH
 * 	Deutsches Forschungszentrum fuer Kuenstliche Intelligenz
 * 	German Research Center for Artificial Intelligence
 * 	http://www.dfki.de
 * 
 * 	Permission is hereby granted, free of charge, to any person obtaining a 
 * 	copy of this software and associated documentation files (the 
 * 	"Software"), to deal in the Software without restriction, including 
 * 	without limitation the rights to use, copy, modify, merge, publish, 
 * 	distribute, sublicense, and/or sell copies of the Software, and to 
 * 	permit persons to whom the Software is furnished to do so, subject to 
 * 	the following conditions:
 * 
 * 	The above copyright notice and this permission notice shall be included 
 * 	in all copies or substantial portions of the Software.
 * 
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS 
 * 	OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
 * 	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 * 	IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
 * 	CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
 * 	TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 * 	SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

  require(['position', function(){console.log("position ready")}]);
  require(['light', function(){console.log("light ready")}]);
  require(['jqueryRotate', function(jqueryRotate){console.log("jquery rotate: " + jqueryRotate)}] );

  
  var mmir = window.mmir ||
  {};

  var current_asr_result;

  var centerColor = null;
  var venueMarginTop = 210;
  var Application = function(){
      this.name = "Application";
  };

  var tapResetTimer = null;
  var userTouched = false;
  var yNormDegree = false;


  function reloadLights(){
    var smartHome = mmir.ModelManager.getModel('SmartHome').getInstance();
    //display lights
    var listOfLights = smartHome.getLights();

    $('.light').remove();
    listOfLights.forEach(function(light, index, list){
      console.log("Print light");
      $('#venue').append('<div class="light" ></div>');
      $('#venue').children().last().offset({ top: light.position.y+venueMarginTop, left: light.position.x });
      $('#venue').children().last().css({ background: light.color.getHexColor() });

    });
  }

  Application.prototype.on_page_load = function (){
    $("#rec_button").on("click", function(click) {
      mmir.InputEngine.startStopInputRecording();
      $( "#rec_button" ).toggleClass( "active" );
    });
    if (mmir.InputEngine.recordInputEvents) $( "#rec_button" ).addClass( "active" );
    if (mmir.MediaManager.isRecording()) $("#mic_button").addClass("active");
  };
  
  Application.prototype.on_page_load_welcome = function (){

    //get user and home model
    var smartHome = mmir.ModelManager.getModel('SmartHome').getInstance();
    var user = mmir.ModelManager.getModel('User').getInstance();

    mmir.MediaManager.stopCompass();

    reloadLights();

    //display user
    $('#venue').append('<div id="user" class="user" ></div>');
    $('#venue').children().last().offset({ top: user.position.y+venueMarginTop, left: user.position.x });


    $('#user').click (function(click) {
      userTouched = true;
      tapResetTimer = setTimeout(function(){ userTouched = false}, 2000);
    });
    //regist

    //register event for setting user position by click
    $("#venue").on("click", function(click) {

      mmir.InputEngine.raise("touch_interpretation", new Position(click.clientX, click.clientY-venueMarginTop));
      if(userTouched) {
        user.setPosition(new Position(click.clientX, click.clientY-venueMarginTop));
        $("#venue").find(".user").offset({ top: user.position.y+venueMarginTop, left: user.position.x });

        //normalize orientation
        mmir.MediaManager.beginCompass(function (orientation){
          mmir.MediaManager.setCompassOffset(orientation);
          mmir.MediaManager.stopCompass();
        });
      }
    });
  };

  Application.prototype.on_page_load_change_light = function (){

    //siwcht selection between radar and color range depends on wheater the screen ist touched or not
    $("#selectedColorBorder" ).fadeTo(0, 0.2);

    $(document).on('touchstart', '#contentWrapper', function(event) {
        mmir.DialogManager.setContextPropertie("screenTouched", true);
        $("#selectedColorBorder" ).fadeTo(0, 0.8);
        $(".radarGreenLine").fadeTo(0, 0.1);
        $("#radarlines").fadeTo(0, 0.1);
    });

    $(document).on('touchend', '#contentWrapper', function(event) {
        mmir.DialogManager.setContextPropertie("screenTouched", false);

        $("#selectedColorBorder" ).fadeTo(0, 0.2);
        $("#radarlines").fadeTo(0, 1.0);

        yNormDegree = false;
        //this will confirm current selected color
        Application.prototype.setColor();
    });

    $("#done").on("click", function(click) {
      //todo

    //display lights
    var smartHome = mmir.ModelManager.getModel('SmartHome').getInstance();
    var listOfLights = smartHome.getLights();
    //reset previous selection
    if (smartHome.selectedLight) {
      smartHome.selectedLight.selected = false;
      smartHome.selectedLight=null;
    }
    
    listOfLights.forEach(function(light, index, list){
      console.log("Print light GreenLine");
      $('#contentWrapper').append('<image id="radarGreenLine' + index + '" class="radarGreenLine" src="content/images/radarGreenLine.png" />');
    });

    mmir.DialogManager.setContextPropertie("screenTouched", false);
    mmir.MediaManager.beginCompass();
};

  Application.prototype.moveLights = function (eventData) {
      var smartHome = mmir.ModelManager.getModel('SmartHome').getInstance();
      var listOfLights = smartHome.getLights();

      listOfLights[eventData.sourceLight].position.x = eventData.targetPosition.x;
      listOfLights[eventData.sourceLight].position.y = eventData.targetPosition.y;

      reloadLights();
  };

  Application.prototype.addLights = function (eventData) {
      var smartHome = mmir.ModelManager.getModel('SmartHome').getInstance();

      if (Array.isArray(eventData.lightPosition) ) {
        for (var i = 0; i < eventData.lightPosition.length; i++) {          
          smartHome.addLightAt(new Position(eventData.lightPosition[i].x,eventData.lightPosition[i].y));
        }
      } else if (typeof eventData.lightPosition == "object") {
        smartHome.addLightAt(new Position(eventData.lightPosition.x,eventData.lightPosition.y));
      }
      reloadLights();
  };

  Application.prototype.deleteLights = function (eventData) {
    console.debug("To Delete: "+ JSON.stringify(eventData.selectedLights));

    var smartHome = mmir.ModelManager.getModel('SmartHome').getInstance();
    var listOfLights = smartHome.getLights();
    if ( Array.isArray(eventData.selectedLights) ) {
      eventData.selectedLights.sort();
      for (var i = eventData.selectedLights.length-1; i >=0; i--) {
        listOfLights.splice(eventData.selectedLights[i],1);
      }
    } else {
      listOfLights.splice(eventData.selectedLights,1);
    }
    reloadLights();
  }

  Application.prototype.setLightColor = function (eventData) {
    //check if light is an index or the particula light object
    //set light color
    //required:light object or index, color as rgb, hex or one of specified color word
    console.log("setLightColor" + JSON.stringify(eventData));
    var smartHome = mmir.ModelManager.getModel('SmartHome').getInstance();
    var listOfLights = smartHome.getLights();
    listOfLights[eventData.light].color.setColor(eventData.color);
    Application.prototype.displayColor(smartHome.selectedLight.color);

  };

  Application.prototype.getLightColor = function (eventData) {
    console.log("getLightColor" + JSON.stringify(eventData));
    var smartHome = mmir.ModelManager.getModel('SmartHome').getInstance();
    var listOfLights = smartHome.getLights();
    var color = listOfLights[eventData.light].color.getHexColor();

    if (color && color != '000000') {
      return color;
    } else {
      return false;
    }
  };

  Application.prototype.checkLightTouched = function(eventData) {
      var result = false;
      var smartHome = mmir.ModelManager.getModel('SmartHome').getInstance();
      var listOfLights = smartHome.getLights();

      if (Array.isArray(eventData.lightPosition) ) {
        result = [];
        for (var i = 0; i < eventData.lightPosition.length; i++) {          
          for (var j = 0; j < listOfLights.length; j++) {
            if (listOfLights[j].position.distanceBetween( eventData.lightPosition[i] ) < 40) {
              result.push(j);
            }
          }
        }

      } else if (typeof eventData.lightPosition == "object") {

          for (var j = 0; j < listOfLights.length; j++) {
            if (listOfLights[j].position.distanceBetween( eventData.lightPosition ) < 40) {
              result = j;
            }
          }
      }
      return result;
  };

  Application.prototype.checkLightSelection = function (eventData) {
    //check if array contains the same light
    //required: data.scope.lights array 
    var lightArray=[];
    eventData.targetedLights.forEach(function(light) {   lightArray.push(light.targetedLight);   });
    //return most frequent light
    console.log("checkLightSelection");
    return lightArray.mostFrequent();
  };

  Application.prototype.checkLightTargeted = function (eventData){
    //check model if any light allready selected by another function try to detect a selection
    //required: device orientation, user position, list of light position, 
    //result: input engine event, containts the index of closest light in range of the selection area
    var listOfLights = mmir.ModelManager.getModel('SmartHome').getInstance().getLights();
    for (var i = 0; i < listOfLights.length; i++) {
      if (listOfLights[i].selected) {
        return i;
      }
    }
    return false;
  };

  Application.prototype.rotateGreenLine = function (orientation){

    if (typeof orientation == "object") orientation = orientation.magneticHeading;

    var smartHome = mmir.ModelManager.getModel('SmartHome').getInstance();
    var listOfLights = smartHome.getLights();
    var user = mmir.ModelManager.getModel('User').getInstance();
    var closestOrientation = 15.5; //range of white selection lines
    smartHome.selectedLight = null;


    listOfLights.forEach(function(light, index, list){

      var positionAngle = user.position.angleTo(listOfLights[index].position);
      var destOrientation = (orientation + positionAngle) % 360;
      //console.log("Orientation: " + orientation + "-" + positionAngle + "=" + destOrientation);

      //set orientation of targetlines
      $("#radarGreenLine" + index).rotate(destOrientation*-1);

      var opacitiy = 1.0;
      if (destOrientation <=  90) opacitiy = opacitiy - destOrientation/100;
      else if (destOrientation >= 270) opacitiy = opacitiy - (360-destOrientation) / 100;
      else opacitiy = 0.1;
      $("#radarGreenLine" + index).fadeTo(0,opacitiy);

      var distanceToZero = Math.min(360-destOrientation, destOrientation);
      //set light selection
      if( distanceToZero < closestOrientation ) {
        
        smartHome.selectedLight = light;
        closestOrientation = distanceToZero;
      }

    });

    //if light not allready selected, change selection and display light color
      if (smartHome.selectedLight != null && smartHome.selectedLight.selected != true) {
        listOfLights.forEach(function(light){  light.selected = false;  }); //unselect all
        smartHome.selectedLight.selected = true;

        Application.prototype.displayColor(smartHome.selectedLight.color);

      } else if (smartHome.selectedLight == null ) { //no light selected
        listOfLights.forEach(function(light){  light.selected = false;  }); //unselect all
        Application.prototype.displayColorNone();
      }

  };

  Application.prototype.displayColor = function(color) {
    Application.prototype.displayColorRotated(color, 0, 400);
  };

  Application.prototype.displayColorNone = function(color) {
    $("#contentWrapper").css( "background", "none", 400 );
  };

  Application.prototype.displaySelectedColorRotated = function(degree) {
    var smartHome = mmir.ModelManager.getModel('SmartHome').getInstance();

    if(!yNormDegree) yNormDegree = degree;

    degree=degree-yNormDegree;

    console.log("Colore by degree: " + degree);
    if(smartHome.selectedLight != null ){
      Application.prototype.displayColorRotated(smartHome.selectedLight.color, degree);
    }
  };

  Application.prototype.displayColorRotated = function(color, degree, duration) {
    //set background to transparent instead of black
    if (color.l > 10) {
      var bottomColor = color.getRgbHexRotatedByHue(degree-45);
      centerColor = color.getRgbHexRotatedByHue(degree);
      var topColor = color.getRgbHexRotatedByHue(degree+45);
      if( !duration) {
        $("#contentWrapper").css( "background", "linear-gradient(" + bottomColor + ", " + centerColor + ", " + centerColor + ", " + topColor + ")" );
      } else {
        $('#contentWrapper').fadeTo(duration, 0.3, function()
        {
          $("#contentWrapper").css( "background", "linear-gradient(" + bottomColor + ", " + centerColor + ", " + centerColor + ", " + topColor + ")" );
        }).fadeTo(duration, 1);
      }
    } else {
      Application.prototype.displayColorNone();
    }
  };

  Application.prototype.setColor = function (rgb) {
    var smartHome = mmir.ModelManager.getModel('SmartHome').getInstance();
    var listOfLights = smartHome.getLights();

    if ( typeof rgb === "undefined" || rgb == null || !Object.getOwnPropertyNames(rgb).length) {
      rgb = centerColor;
    }

    listOfLights.forEach(function(light, index, list){
      if (light.selected) {
        light.color.setColor(rgb);
      }
    });
  };

  Application.prototype.changeTargetHue = function(rgb, degree) {
   
  };

	//DISABLED: now a @-statement within the template-definition is used
//  Application.prototype.on_page_load_welcome = function (){
//	  if(typeof mmir.User.getInstance() !== 'undefined'){
//		  var userName = mmir.User.getInstance().getName();
//		  if(userName){
//			  $('#user-name').text(', '+userName);
//		  }
//	  }
//  };

  Application.prototype.slide_down_language_menu = function() {
	  var langMenu = $('#language-menu-panel');
	  langMenu.slideDown();
  };

  Application.prototype.slide_up_language_menu = function() {
	  $('#language-menu-panel').slideUp();
  };

  /**
   * 
   * This function changes the application language and, if requested, renders the current view again, so that 
   * the change of the language is applied to the currently displayed view. 
   * 
   * @function changeLanguage
   * @param {String} newLang The new language which is to be used henceforth
   * @param {Boolean} doReRenderView Should the currently displayed view be rendered again in the new language?
   * @returns {Boolean} <code>true</code> if the language has change, <code>false</code> otherwise
   * @public
   */
  Application.prototype.changeLanguage = function(newLang, doReRenderView) {

	  if(IS_DEBUG_ENABLED) console.debug("[Language] selected " + newLang);//debug

	  var currLang = mmir.LanguageManager.getInstance().getLanguage();
	  var newLang = mmir.LanguageManager.getInstance().setLanguage(newLang);

	  if (doReRenderView == true){
		  mmir.PresentationManager.getInstance().reRenderView();
	  }
	  
	  //also set the new language for jqm plugin datebox:
	  jQuery.mobile.datebox.prototype.options.useLang = newLang;
	  
	  return currLang != newLang;
  };