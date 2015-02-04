/* Max Color */


function Color () {
	this.r = 0;
	this.g = 0;
	this.b = 0;

	this.h = 0;
	this.s = 0;
	this.l = 0;

	this.setColor = function(color) {

		if (arguments.length==3) {

			this.setColorByRGB(arguments[0], arguments[1], arguments[2]);

		} else if (arguments.length==1 && isHexaColor(arguments[0]) ) {

			this.setColorByHex(arguments[0]);
		
		} else { //try to parse colorname
		
			this.setColorByName(arguments[0]);
		}
	}

	this.setColorByRGB = function(r,g,b) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.generateHSLvalues();
	}

	this.setColorByName = function(colorName) {
		colorName = colorName.toLowerCase();

		var colorNameValue = {
			"black": "000000",
			"schwarz": "000000", 

			"white": "ffffff",
			"wei§": "ffffff",

			"red":   "f55149",
			"rot": "f55149",

			"orange":"f5b649",

			"yellow":"f5ef49",
			"gelb":"f5ef49",

			"green": "49f54d",			
			"grŸn": "49f54d",

			"blue":  "494df5",
			"blau":  "494df5",

			"pink":  "f549e7",

			"purple":"c249f5",
			"lila":"c249f5"

		}

		if (colorNameValue.hasOwnProperty(colorName)) {

			this.setColorByHex(colorNameValue[colorName]);
			this.generateHSLvalues();
		}
	}

	this.setColorByHex = function(rgbHex) {
		// strip the leading # if it's there
	    rgbHex = rgbHex.replace(/^\s*#|\s*$/g, '');

	    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
	    if(rgbHex.length == 3){
	        rgbHex = rgbHex.replace(/(.)/g, '$1$1');
	    }

	    this.r = parseInt(rgbHex.substr(0, 2), 16); // 255;
	    this.g = parseInt(rgbHex.substr(2, 2), 16); // 255;
	    this.b = parseInt(rgbHex.substr(4, 2), 16); // 255;
	    this.generateHSLvalues();
	}

	function isHexaColor(hexColor){
		hexColor = hexColor.replace(/^\s*#|\s*$/g, '');
	  return (typeof hexColor === "string") && hexColor.length === 6 && ! isNaN( parseInt(hexColor, 16) );
	}


	this.getHexColor = function() {
		return rgbToHex(this.r, this.g, this.b);
	}

	// Changes the RGB/HEX temporarily to a HSL-Value, modifies that value 
	// and changes it back to RGB/HEX.

	this.getRgbHexRotatedByHue = function(degree) {
	    var h = this.h;
	    h += degree;
	    if (h > 360) {
	        h -= 360;
	    }
	    else if (h < 0) {
	        h += 360;
	    }
	    return hslToRGB(h, this.s, this.l);
	}

	// exepcts a string and returns an object
	this.generateHSLvalues = function() {

	    var cMax = Math.max(this.r, this.g, this.b),
	        cMin = Math.min(this.r, this.g, this.b),
	        delta = cMax - cMin;
	        this.l = (cMax + cMin) / 2;
	        this.h = 0;
	        this.s = 0;

	    if (delta == 0) {
	        this.h = 0;
	    }
	    else if (cMax == this.r) {
	        this.h = 60 * (((this.g - this.b) / delta) % 6);
	    }
	    else if (cMax == this.g) {
	        this.h = 60 * (((this.b - this.r) / delta) + 2);
	    }
	    else {
	        this.h = 60 * (((this.r - this.g) / delta) + 4);
	    }

	    if (delta == 0) {
	        this.s = 0;
	    }
	    else {
	        this.s = (delta/(1-Math.abs(2*this.l - 1)))
	    }
	}

	// expects an object and returns a string
	var hslToRGB = function(h, s, l) {

	    var c = (1 - Math.abs(2*l - 1)) * s,
	        x = c * ( 1 - Math.abs((h / 60 ) % 2 - 1 )),
	        m = l - c/ 2,
	        r, g, b;

	    if (h < 60) {
	        r = c;
	        g = x;
	        b = 0;
	    }
	    else if (h < 120) {
	        r = x;
	        g = c;
	        b = 0;
	    }
	    else if (h < 180) {
	        r = 0;
	        g = c;
	        b = x;
	    }
	    else if (h < 240) {
	        r = 0;
	        g = x;
	        b = c;
	    }
	    else if (h < 300) {
	        r = x;
	        g = 0;
	        b = c;
	    }
	    else {
	        r = c;
	        g = 0;
	        b = x;
	    }

	    r = normalize_rgb_value(r, m);
	    g = normalize_rgb_value(g, m);
	    b = normalize_rgb_value(b, m);

	    return rgbToHex(r,g,b);
	}

	var normalize_rgb_value = function(colorChannel, m) {
	    colorChannel = Math.floor((colorChannel + m) ); // * 255);
	    if (colorChannel < 0) {
	        colorChannel = 0;
	    }
	    return colorChannel;
	}

	var rgbToHex = function(r, g, b) {
		var result = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	    return result;
	}
}
