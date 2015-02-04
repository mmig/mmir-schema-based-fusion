/* Max light */

require(['color', function(){console.log("color ready")}]);


function Light (position) {
	this.position = position;
	this.color = new Color();

	this.selected = false;

	this.setColor = function(r,g,b) {
		this.color.setColor(r,g,b);
	};
}