function event (name, data, delay) {
	this.name = name;
	this.data = data;
	this.delay = delay;
	
	this.parseDomObject = function (domObject) {
		if (typeof domObject != "undefined" && domObject.children.length >= 6 ) {
			this.name = $(domObject).find("input[name='eventName']")[0].value;
			try {
				this.data = JSON.parse($(domObject).find("textarea[name='eventData']")[0].value);
			} catch(warn) {
				this.data = $(domObject).find("textarea[name='eventData']")[0].value;
			}
			this.delay = $(domObject).find("input[name='eventDelay']")[0].value * 1000;
		}
	}
}