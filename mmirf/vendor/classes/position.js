/* Max */
function Position (x,y) {
	this.x = x;
	this.y = y;

	this.distanceBetween = function(position) {
		var a = this.x - position.x;
		var b = this.y - position.y;

		var c = Math.sqrt( (a*a) + (b*b) );
		return c;
	}

	this.angleTo = function (position) {
		var a = this.x - position.x;
		var c = this.distanceBetween(position);
		var alpha = this.convertToDegree(Math.asin(a/c));
		//normalize to 0-360 degree
		if (this.x > position.x && this.y < position.y) 
			alpha = 180 - alpha;
		if (this.x < position.x && this.y < position.y)
			alpha = 180 + (alpha*-1);
		if (this.x < position.x && this.y > position.y)
			alpha = 360 + alpha;

		return alpha;
	}

	this.convertToDegree = function (num) {
  		return num * (180 / Math.PI);
	}
}