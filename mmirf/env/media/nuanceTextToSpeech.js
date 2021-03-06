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


newMediaPlugin = {
		initialize: function(callBack){
			
			var _pluginName = 'nuanceTextToSpeech';
			
			//separator char for language- / country-code
			var _langSeparator = '_';
			
			var languageManager = require('languageManager');
			var commonUtils = require('commonUtils');  
			
			callBack({
				    textToSpeech: function (parameter, successCallBack, failureCallBack, startCallBack){
				    	try{
				    		
				    		var text;
				    		if((typeof parameter !== 'undefined')&& commonUtils.isArray(parameter) ){
				    			//TODO implement pausing similar to maryTextToSpeech.js (i.e. in JS code); use XML?
				    			
				    			text = parameter.join('\n');//FIXME may need 2 newlines here: in some cases the Nuance TTS does not make pause, when there is only 1 newline (why?!?...)
				    			
				    		}
				    		else {
				    			//FIXME implement evaluation / handling the parameter similar to treatment in maryTextToSpeech.js
				    			text = parameter;
				    		}
				    		
					    	window.plugins.nuancePlugin.speak(
					    			text, 
					    			successCallBack, 
					    			failureCallBack,
					    			languageManager.getLanguageConfig(_pluginName, 'language', _langSeparator)
					    			//TODO get & set voice (API in plugin is missing for that ... currently...)
					    			//, languageManager.getLanguageConfig(_pluginName, 'voice')
					    	);
					    	
					    	//TODO implement real start-callback (needs to be done within java-/javascript-plugin)
					    	if(startCallBack){
					    		startCallBack();
					    	}
				    	} catch(e){
				    		if(failureCallBack){
				    			failureCallBack(e);
				    		}
				    	}
				    	
				    },
	    			cancelSpeech: function(successCallBack,failureCallBack){
	    				//FIXME currently, NuancePlugin returns failure on successful cancel-performance, so we call the function with switched failure, success arguments...
	    				//			-> switch back, when NuancePlugin returns PluginResults correctly... 
	    				window.plugins.nuancePlugin.cancel(failureCallBack, successCallBack);
	    			},
					setTextToSpeechVolume: function(newValue){
	    				//FIXME implement this? how? Nuance library gives no access to audio volume (we could set the Android volume level ...)
					}
			});	
		}
};