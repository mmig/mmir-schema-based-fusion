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
			
			var _pluginName = 'nuanceAudioInput';

			window.plugins.nuancePlugin.init();
			
			var languageManager = require('languageManager');

			var isRecording = false;
			var id = 0;
			var start = 0;
			var currentSuccessCallback;
			var currentFailureCallback;
			//var language = languageManager.getLanguageConfig(_pluginName);
			var language = "deu-DEU";

			var callbackWrapper = function callbackWrapper (cb){
				return (function (res){
					console.info(res);
					var asr_result = res;
					if (res == 'repeat') {
						window.plugins.nuancePlugin.recognizeNoEOS(
								languageManager.getLanguageConfig(_pluginName),
								callbackWrapper(currentSuccessCallback), 
								currentFailureCallback, 
								true
						);
					} else if(res && res.event && res.event == 'RecoStarted') {
						start = $.now();
					} else if(res && res.event && res.event == 'RecoComplete'){
						asr_result = res['result'];
						res.end = $.now();
						res.start = start;
						isRecording = false;
						cb(res);
					}
				});
			};
			
			callBack ({
				startRecord: function(successCallback, failureCallback){
					currentFailureCallback = failureCallback;
					currentSuccessCallback = successCallback;
					isRecording = true;
					window.plugins.nuancePlugin.recognizeNoEOS(
							language,
							callbackWrapper(successCallback), 
							function(res) { isRecording = false; failureCallback(res);}, 
							true
					);
				},
				stopRecord: function(successCallback,failureCallback){
					window.plugins.nuancePlugin.stopRecord(
							successCallback,
							function(res) { isRecording = false; failureCallback(res);}
					);
				},
				recognize: function(successCallback,failureCallback){
					isRecording = true;
					window.plugins.nuancePlugin.recognize(
							language,
							callbackWrapper(successCallback),
							function(res) { isRecording = false; failureCallback(res);}
					);
				},
    			cancelRecognition: function(successCallBack,failureCallBack){
    				//FIXME currently, NuancePlugin returns failure on successful cancel-performance, so we call the function with switched failure, success arguments...
    				//			-> switch back, when NuancePlugin returns PluginResults correctly... 
    				isRecording = false;
    				window.plugins.nuancePlugin.cancel(failureCallBack, successCallBack);
    			},
    			isRecording: function() {
    				return isRecording;
    			}
			});
		    		
		    		
		}
		
};