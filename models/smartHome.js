/*
 *  Copyright (C) 2012-2013 DFKI GmbH
 *  Deutsches Forschungszentrum fuer Kuenstliche Intelligenz
 *  German Research Center for Artificial Intelligence
 *  http://www.dfki.de
 * 
 *  Permission is hereby granted, free of charge, to any person obtaining a 
 *  copy of this software and associated documentation files (the 
 *  "Software"), to deal in the Software without restriction, including 
 *  without limitation the rights to use, copy, modify, merge, publish, 
 *  distribute, sublicense, and/or sell copies of the Software, and to 
 *  permit persons to whom the Software is furnished to do so, subject to 
 *  the following conditions:
 * 
 *  The above copyright notice and this permission notice shall be included 
 *  in all copies or substantial portions of the Software.
 * 
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS 
 *  OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
 *  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 *  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
 *  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
 *  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 *  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


var mmir = window.mmir ||
{};

mmir.SmartHome = (function(){
    var instance = null;
    
    function constructor(){
        var lights = new Array();
        var _selectedLight = null;


        return {
            selectedLight: _selectedLight,
            addLightAt: function(position){
                var light = new Light(position);
                lights.push(light);
            },

            getLights: function() {
                return lights;
            },
            emptyLights: function () {
                lights.length = 0;
            }
        };
    }
    
    return {
        getInstance: function(){
            if (instance === null) {
                instance = constructor();
            }
            return instance;
        }
    };
    
})();


/* Max 
var mmir = window.mir || {};

mmir.SmartHome = (new SmartHome())();

function SmartHome () {
	this.lights = new Array();
	
	this.addLightAt = function (position) {
		this.lights.push(new light(position));
	}
}
*/