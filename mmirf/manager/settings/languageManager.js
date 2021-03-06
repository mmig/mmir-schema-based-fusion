﻿/*
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


define(['constants', 'configurationManager', 'commonUtils', 'semanticInterpreter'],
		
	/**
	 * A class for managing the language of the application. <br>
	 * It's purpose is to load the controllers and their views / partials and provide functions to find controllers or
	 * perform actions or helper-actions.
	 * 
	 * This "class" is structured as a singleton - so that only one instance is in use.<br>
	 * 
	 * @name LanguageManager
	 * @exports LanguageManager as mmir.LanguageManager
	 * @class
	 * 
	 * @category core
	 * 
	 * 
	 * @depends mmir.Constants
	 * @depends mmir.CommonUtils
	 * @depends mmir.SemanticInterpreter
	 */
	function( 
			constants, configurationManager, commonUtils, semanticInterpreter
){
			//next 2 comments are needed by JSDoc so that all functions etc. can
			// be mapped to the correct class description
			/** @scope mmir.LanguageManager.prototype */
			/**
			 * #@+
			 * @memberOf mmir.LanguageManager.prototype 
			 */
			
		    /**
		     * Object containing the instance of the class
		     * {@link LanguageManager}
		     * 
		     * @property instance
		     * @type Object
		     * @private
		     */
		    var instance = null;

		    /**
		     * JSON object containing the contents of a dictionary file - which are
		     * found in 'config/languages/&lt;language&gt;/dictionary.json'.
		     * 
		     * @property dictionary
		     * @type JSON
		     * @private
		     */
		    var dictionary = null;

		    /**
		     * A String holding the currently loaded language, e.g. "en".
		     * 
		     * @property currentLanguage
		     * @type String
		     * @private
		     */
		    var currentLanguage = null;

		    /**
		     * A JSON-Object holding the speech-configuration for the currently loaded language.
		     * 
		     * @property currentSpeechConfig
		     * @type JSON-Object
		     * @private
		     */
		    var currentSpeechConfig = null;

		    /**
		     * An array of all available languages.
		     * 
		     * @property languages
		     * @type Array
		     * @private
		     */
		    var languages = null;

		    /**
		     * A keyword which can be used in views (ehtml) to display the current
		     * language.<br>
		     * If this keyword is used inside a view or partial, it is replaced by the
		     * current language string.
		     * 
		     * @property keyword_current_language
		     * @type String
		     * @private
		     * @example @localize('current_language')
		     * 
		     */
		    var keyword_current_language = 'current_language';

		    /**
		     * Function to set a new language, but only, if the new language is
		     * different from the current language.
		     * 
		     * @function setLanguage
		     * @param {String}
		     *            lang The language of the dictionary which should be loaded.
		     * @returns {String} The (new) current language
		     * @private
		     */
		    function setLanguage(lang) {
		        if ((lang) && (currentLanguage != lang)) {
		            loadDictionary(lang);
		            loadSpeechConfig(lang);
		            requestGrammar(lang);
		        }
		        return currentLanguage;
		    }

		    function doCheckExistsGrammar(lang) {
		        var langFiles = null;
		        var retValue = false;

		        if (lang != null) {
		            langFiles = commonUtils.getDirectoryContents(constants.getLanguagePath() + lang);
		            if (langFiles != null) {
		                if (langFiles.indexOf(constants.getGrammarFileName()) > -1) {
		                    retValue = true;
		                }
		            }
		        }
		        return retValue;
		    }

		    /**
		     * Request grammar for the provided language.
		     * 
		     * If there is no grammar available for the requested language, no new
		     * grammar is set.
		     * 
		     * A grammar is available, if at least one of the following is true for the
		     * requested language
		     * <ul>
		     * <li>there exists a JSON grammar file (with correct name and at the
		     * 		correct location)</li>
		     * <li>there exists a compiled JavaScript grammar file (with correct name
		     * 		and at the correct location)</li>
		     * </ul>
		     * 
		     * TODO document location for JSON and JavaScript grammar files
		     * 
		     * @function requestGrammar
		     * @param {String}
		     *            lang The language of the grammar which should be loaded.
		     * @returns {String} The current grammar language
		     * @async
		     * @private
		     */
		    function requestGrammar(lang, doSetNextBestAlternative) {

		        if (semanticInterpreter.hasGrammar(lang) || doCheckExistsGrammar(lang)) {
		            semanticInterpreter.setCurrentGrammar(lang);
		            return lang;
		        }
				else if (doSetNextBestAlternative) {
		            // try to find a language, for which a grammar is available
		            var grammarLang = null;
		            if (languages.length > 0) {
		                // first: try to find a language with COMPILED grammar
		                for ( var i = 0, size = languages.length; i < size; ++i) {
		                    grammarLang = languages[i];
		                    if (semanticInterpreter.hasGrammar(grammarLang)) {
		                        break;
		                    }
							else {
		                        grammarLang = null;
		                    }
		                }

		                // ... otherwise: try to find a language with JSON grammar:
		                if (!grammarLang) {
		                    for ( var i = 0, size = languages.length; i < size; ++i) {
		                        grammarLang = languages[i];
		                        if (doCheckExistsGrammar(grammarLang)) {
		                            break;
		                        }
								else {
		                            grammarLang = null;
		                        }
		                    }
		                }
		            }

		            if (grammarLang) {
		                console.warn('Could not find grammar for selected language ' + lang + ', using grammar for language ' + grammarLang + ' instead.');
		                semanticInterpreter.setCurrentGrammar(grammarLang);
		            }
					else {
		                console.warn('Could not find any grammar for one of [' + languages.join(', ') + '], disabling SemanticInterpret.');
		                semanticInterpreter.setEnabled(false);
		            }
		        }

		        return semanticInterpreter.getCurrentGrammar();
		    }
		    /**
		     * Loads the speech-configuration for the provided language and updates the current
		     * language.
		     * 
		     * @function loadSpeechConfig
		     * @param {String} lang
		     *            The language of the speech-configuration which should be loaded.
		     * @returns {String} The (new) current language
		     * @async
		     * @private
		     */
		    function loadSpeechConfig(lang) {

		        if (lang && currentLanguage != lang) {
		            currentLanguage = lang;
		        }
		        var path = constants.getLanguagePath() + lang + "/" + constants.getSpeechConfigFileName();
		        $.ajax({
		            async : false,
		            dataType : "json",
		            url : path,
		            success : function(data) {
		                // console.log("[LanguageManager] Success. " + data);
		                currentSpeechConfig = data;// jQuery.parseJSON(data);
		                // console.log("[LanguageManager] " + JSON.stringify(dictionary));
		            },
		            error : function(xhr, statusStr, error) {
		                console.error("[LanguageManager] Error loading speech configuration from \""+path+"\": " + error? error.stack? error.stack : error : ''); // error
		            }
		        });
		        return currentLanguage;
		    }

		    /**
		     * Loads the dictionary for the provided language and updates the current
		     * language.
		     * 
		     * @function loadDictionary
		     * @param {String}
		     *            lang The language of the dictionary which should be loaded.
		     * @returns {String} The (new) current language
		     * @async
		     * @private
		     */
		    function loadDictionary(lang) {

		        if (lang && currentLanguage != lang) {
		            currentLanguage = lang;
		        }
		        var path = constants.getLanguagePath() + lang + "/" + constants.getDictionaryFileName();
		        $.ajax({
		            async : false,
		            dataType : "json",
		            url : path,
		            success : function(data) {
		                dictionary = data;
		            },
		            error : function(xhr, statusStr, error) {
		                console.error("[LanguageManager] Error loading language dictionary from \""+path+"\": " + error? error.stack? error.stack : error : ''); // error
		            }
		        });
		        return currentLanguage;
		    }
		    /**
		     * Translates a keyword using the current dictionary and returns the
		     * translation.
		     * 
		     * @function internalGetText
		     * @param {String}
		     *            textVarName The keyword which should be looked up
		     * @returns {String} the translation of the keyword
		     * @private
		     */
		    function internalGetText(textVarName) {
		        var translated = "";
		        if (dictionary[textVarName] && dictionary[textVarName].length > 0) {
		            translated = dictionary[textVarName];
		        }
				else if (textVarName === keyword_current_language){
		            translated = currentLanguage;
		        }
				else {
		            translated = "undefined";
		            console.warn("[Dictionary] '" + textVarName + "' not found in " + JSON.stringify(dictionary));
		        }
		        return translated;
		    }

		    /**
		     * Constructor-Method of Singleton mmir.LanguageManager.<br>
		     * 
		     * @constructs LanguageManager
		     * @memberOf LanguageManager.prototype
		     * @private
		     * 
		     */
		    function constructor() {
		    			    	
		        var _isInitialized = false;
		        
		        /** @lends LanguageManager.prototype */
		        return {
		        	
		        	/**
		        	 * @param {String} [lang] OPTIONAL
		        	 * 				a language code for setting the current language and
		        	 * 				selecting the corresponding language resources
		        	 */
		        	init: function(lang){
		        		
		        		if (!lang && !currentLanguage) {

		        			//try to retrieve language from configuration:
				            var appLang = configurationManager.get("language");
				            if (appLang) {
				            	
				                lang = appLang;
				                console.info("[LanguageManager] No language argument specified: using language from configuration '" + appLang + "'.");
				                
				            }
				            else {
				            	
					            appLang = constants.getLanguage();
					            
				            	if (appLang) {
				            
					                lang = appLang;
					                console.info("[LanguageManager] No language argument specified: using language from mmir.constants '" + appLang + "'.");
					            }
				            	else {
					            	
					                if (languages.length > 0) {
					                	
					                	appLang = this.determineLanguage(lang);
					                	if(appLang){
					                		
					                		lang = appLang;
					                		
					                		console.info("[LanguageManager] No language argument specified: used determinLanguage() for selecting language '" + appLang + "'.");
					                	}
					                }
					                
					            }//END: else(consts::lang)
				            	
				            }//END: else(config::lang)
				        
			        		if(!lang){
			        			console.warn("[LanguageManager.init] No language specified. And no language could be read from directory '" + constants.getLanguagePath() + "'.");
			        		}
			        		
				        }//END: if(!lang && !currentLanguage)
		        		

				        // get all the languages/dictionaries by name
				        languages = commonUtils.getDirectoryContents(constants.getLanguagePath());

				        if (IS_DEBUG_ENABLED) console.debug("[LanguageManager] Found dictionaries for: " + JSON.stringify(languages));// debug

				        loadDictionary(lang);   
				        loadSpeechConfig(lang);
				        requestGrammar(lang, true);//2nd argument TRUE: if no grammar is available for lang, try to find/set any available grammar
				        
				        _isInitialized = true;
				        
				        return this;
		        	},
		        	/**
		        	 * Initializes the LanguageManager instance if necessary, and sets the Language to lang.
		        	 * 
				     * If no language is supplied as parameter, then the property *language*
				     * from {@link mmir.Configuration} is used or the first language found
				     * in the language directory.
				     * 
				     * @deprecated instead use LanguageManager directly (NOTE: before starting to use LanguageManager, init() has to be invoked once)
				     * 
				     * @param {String} [lang] OPTIONAL
				     *            The language which should be used throughout the
				     *            application.
		        	 */
		        	getInstance: function(lang){
		        		
		        		if(_isInitialized === false){
		        			_isInitialized = true;
		        			this.init(lang);
		        		}
		        		else if(lang) {
		        			setLanguage(lang);
		        		}
		        		
		        		return this;
		        	},
		        	
		            /**
		             * Returns the dictionary of the currently used language.
		             * 
		             * @function getDictionary
		             * @returns {Object} The JSON object for the dictionary of the
		             *          currently used language
		             * @public
		             */
		            getDictionary : function() {
		                return dictionary;
		            },

		            /**
		             * If a dictionary exists for the given language, 'true' is
		             * returned. Else the method returns 'false'.
		             * 
		             * @function existsDictionary
		             * @returns {Boolean} True if a dictionary exists for given
		             *          language.
		             * @param {String}
		             *            Language String, i.e.: en, de
		             * @public
		             */
		            existsDictionary : function(lang) {
		                var langFiles = null;
		                var retValue = false;

		                if (lang != null) {
		                    langFiles = commonUtils.getDirectoryContents(constants.getLanguagePath() + lang);
		                    if (langFiles != null) {
		                        if (langFiles.indexOf(constants.getDictionaryFileName()) > -1) {
		                            retValue = true;
		                        }
		                    }
		                }
		                return retValue;
		            },

		            /**
		             * If a speech-configuration (file) exists for the given language.
		             * 
		             * @function existsDictionary
		             * @returns {Boolean}
		             * 				<code>true</code>if a speech-configuration exists for given language.
		             * 				Otherwise <code>false</code>.
		             * 
		             * @param {String} lang
		             *            the language for which existence of the configuration should be checked, e.g. en, de
		             *            
		             * @public
		             */
		            existsSpeechConfig : function(lang) {
		                var langFiles = null;
		                var retValue = false;

		                if (lang != null) {
		                    langFiles = commonUtils.getDirectoryContents(constants.getLanguagePath() + lang);
		                    if (langFiles != null) {
		                        if (langFiles.indexOf(constants.getSpeechConfigFileName()) > -1) {
		                            retValue = true;
		                        }
		                    }
		                }
		                return retValue;
		            },

		            /**
		             * If a JSON grammar file exists for the given language, 'true' is
		             * returned. Else the method returns 'false'.
		             * 
		             * @function existsGrammar
		             * @returns {Boolean} True if a grammar exists for given language.
		             * @param {String}
		             *            Language String, i.e.: en, de
		             * @public
		             */
		            existsGrammar : doCheckExistsGrammar,

		            /**
		             * Chooses a language for the application.
		             * 
		             * <p>
		             * The language selection is done as follows:
		             * <ol>
		             * <li>check if a default language exists<br>
		             * if it does and if both (!) grammar and dictionary exist for this
		             * language, return this language </li>
		             * <li>walk through all languages alphabetically
		             * <ol>
		             * <li>if for a language both (!) grammar and dictionary exist,
		             * return this language memorize the first language with a grammar
		             * (do not care, if a dictionary exists) </li>
		             * </ol>
		             * <li>test if a grammar exists for the default language - do not
		             * care about dictionaries - if it does, return the default language
		             * </li>
		             * <li>If a language was found (in Step 2.1) return this language
		             * </li>
		             * <li>If still no language is returned take the default language
		             * if it has a dictionary </li>
		             * <li>If a language exists, take it (the first one) </li>
		             * <li>Take the default language - no matter what </li>
		             * </ol>
		             * 
		             * @function determineLanguage
		             * @returns {String} The determined language
		             * @public
		             */
		            determineLanguage : function(lang) {
		                var tempLanguage = lang;
		                var firstLanguageWithGrammar = null;

		                // first check, if language - given in parameter - exists
		                if (tempLanguage != null) {
		                    // check if both grammar and dictionary exist for given
		                    // language
		                    if (instance.existsGrammar(tempLanguage) && instance.existsDictionary(tempLanguage)) {
		                        return tempLanguage;
		                    }
		                }

		                tempLanguage = constants.getLanguage();
		                // then check, if default language exists
		                if (tempLanguage != null) {
		                    // check if both grammar and dictionary exist for default
		                    // language
		                    if (instance.existsGrammar(tempLanguage) && instance.existsDictionary(tempLanguage)) {
		                        return tempLanguage;
		                    }
		                }
		                // walk through the languages alphabetically
		                for ( var i = 0; i < languages.length; i++) {
		                    tempLanguage = languages[i];
		                    // check if a grammar and dictionary exists for every
		                    // language
		                    if (instance.existsGrammar(tempLanguage)) {

		                        // memorize the first language with a grammar (for
		                        // later)
		                        if (firstLanguageWithGrammar == null) {
		                            firstLanguageWithGrammar = tempLanguage;
		                        }

		                        if (instance.existsDictionary(tempLanguage)) {
		                            return tempLanguage;
		                        }
		                    }
		                }

		                // still no language found - take the default language and test
		                // if a grammar exists
		                tempLanguage = constants.getLanguage();
		                if (tempLanguage != null) {
		                    // check if both grammar and dictionary exist for default
		                    // language
		                    if (instance.existsGrammar(tempLanguage)) {
		                        return tempLanguage;
		                    } else if (firstLanguageWithGrammar != null) {
		                        return firstLanguageWithGrammar;
		                    } else if (instance.existsDictionary(tempLanguage)) {
		                        return tempLanguage;
		                    }
		                }

		                // still no language - take the first one
		                tempLanguage = languages[0];
		                if (tempLanguage != null) {
		                    return tempLanguage;
		                }

		                return constants.getLanguage();
		            },

		            /**
		             * Sets a new language, but only, if the new language is different
		             * from the current language.
		             * 
		             * @function setLanguage
		             * @returns {String} The (new) current language
		             * @public
		             */
		            setLanguage : function(lang) {
		                return setLanguage(lang);
		            },

		            /**
		             * Gets the language currently used for the translation.
		             * 
		             * @function getLanguage
		             * @returns {String} The current language
		             * @public
		             */
		            getLanguage : function() {
		                return currentLanguage;
		            },

		            /**
		             * Gets the default language.
		             * 
		             * @function getDefaultLanguage
		             * @returns {String} The default language
		             * @public
		             */
		            getDefaultLanguage : function() {
		                return constants.getLanguage();
		            },

		            /**
		             * Gets an array of all for the translation available languages.<br>
		             * 
		             * @function getLanguages
		             * @returns {String} An array of all for the translation available
		             *          languages
		             * @public
		             */
		            getLanguages : function() {
		                return languages;
		            },

		            /**
		             * Cycles through the available languages.
		             * 
		             * @function setNextLanguage
		             * @returns {String} The (new) current language
		             * @public
		             * @deprecated unused
		             */
		            setNextLanguage : function() {
		                var indexCurrentLanguage = languages.indexOf(currentLanguage);

		                if (IS_DEBUG_ENABLED)
		                    console.debug("[LanguageManager] Current language is " + currentLanguage);// debug

		                if (indexCurrentLanguage > -1) {
		                    indexCurrentLanguage = indexCurrentLanguage + 1;
		                    if (indexCurrentLanguage > languages.length - 1) {
		                        indexCurrentLanguage = 0;
		                    }
		                    currentLanguage = languages[indexCurrentLanguage];

		                    if (IS_DEBUG_ENABLED)
		                        console.debug("[LanguageManager] Next language is " + currentLanguage);// debug
		                    loadSpeechConfig(currentLanguage);
		                    return loadDictionary(currentLanguage);
		                }
		                return currentLanguage;
		            },

		            /**
		             * Looks up a keyword in the current dictionary and returns the
		             * translation.
		             * 
		             * @function getText
		             * @param {String}
		             *            textVarName The keyword which is to be translated
		             * @returns {String} The translation of the keyword
		             * @public
		             */
		            getText : function(textVarName) {
		                return internalGetText(textVarName);
		            },
		            
		            getLanguageConfig : function(pluginId, feature, separator) {
		                
		                //if nothing is specfied:
		            	//	return default language-setting
		                if(typeof pluginId === 'undefined'){
		                	return currentSpeechConfig.language; /////////// EARLY EXIT ///////////////
		                }
		                
		                //ASSERT pluginId is defined
		                
		                //default feature is language
		                if(typeof feature === 'undefined'){
		                	feature = 'language';
		                }

		                var value;
		                if(currentSpeechConfig.plugins && currentSpeechConfig.plugins[pluginId] && typeof currentSpeechConfig.plugins[pluginId][feature] !== 'undefined'){
		                	//if there is a plugin-specific setting for this feature
		                	value = currentSpeechConfig.plugins[pluginId][feature];
		                }
		                else if(feature !== 'plugins' && typeof currentSpeechConfig[feature] !== 'undefined'){
		                	//otherwise take the default setting (NOTE: the name "plugins" is not allowed for features!)
		                	value = currentSpeechConfig[feature];
		                }
		                
		                //if there is a separator specified: replace default separator '-' with this one
		                if(value && typeof separator !== 'undefined'){
		                	value.replace(/-/, separator);
		                }
		                
		                return value;
		            }
		            
		            /**
		             * Set to "backwards compatibility mode" (for pre version 2.0).
		             * 
		             * This function re-adds deprecated and removed functions and
		             * properties to the CommonUtils instance.
		             * 
		             * NOTE that once set to compatibility mode, it cannot be reset to
		             * non-compatibility mode.
		             * 
		             * @async
				     * @depends jQuery.Deferred
				     * @depends mmir.LanguageManager.setToCompatibilityModeExtension
				     * 
				     * @param {Function} [success]
				     * 				a callback function that is invoked, after compatibility mode
				     * 				was set (alternatively the returned promise can be used).
				     * @returns {Promise}
				     * 				a Deffered.promise that is resolved, after compatibility mode
				     * 				was set
				     * 
				     * @see mmir.LanguageManager.setToCompatibilityModeExtension
		             */
		            , setToCompatibilityMode : function(success) {
		            	
		            	var defer = $.Deferred();
				    	if(success){
				    		defer.always(success);
				    	}
				    	
				    	require(['languageManagerCompatibility'],function(setCompatibility){
				    		
				    		setCompatibility(instance);
				    		
				    		defer.resolve();
				    	});
				    	
				    	return defer.promise();
		                
		            }//END: setToCompatibilityMode()
		            
		        };//END: return{}
		        
		        
		    }//END: construcor = function(){...

		    		    
		    //FIXME as of now, the LanguageManager needs to be initialized,
		    //		either by calling getInstance() or init()
		    //		-> should this be done explicitly (async-loading for dictionary and grammar? with returned Deferred.promise?)
		    instance = new constructor();
		    		    
		    return instance;
		    
		    /** #@- */
			
});
