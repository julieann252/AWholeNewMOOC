draw = function(element, radius, sections, rgb) {
	var canvas = document.getElementById(element);
	var opacity = 1;
	var style = window.getComputedStyle(canvas, null);
	var centerx = style.getPropertyValue('width').replace("px", "")/2;
	var centery = style.getPropertyValue('height').replace("px", "")/2;
	var arcPlace = 0;
	var ctx = canvas.getContext('2d');

	function drawSection(color, linex, liney, textx, texty, startRadians, endRadians, text) {
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.moveTo(centerx, centery);
		ctx.lineTo(linex, liney);
		ctx.arc(centerx,centery,radius, (startRadians*Math.PI), (endRadians*Math.PI), false);
		ctx.fill();
		ctx.beginPath();
		ctx.textBaseline = "top";
		var initialOffset = 10
		var modifier = 1;
		var alignment = "left";
		if (textx < centerx) {
			modifier = -1;
			alignment = "right";
		}

		function alignText() {
			ctx.textAlign = alignment;
			textx += (initialOffset * modifier);
			if (texty < centery) {
				textx += ((centery-texty) * 0.1 * modifier);
				texty -= ((centery-texty) * 0.2);
			}
			else {
				texty += ((texty-centery) * 0.1);
			}
		}

		alignText();
		ctx.font = "16px sans-serif";
  		ctx.fillStyle = "rgba(0,0,0,1)";
  		ctx.fillText(text, textx, texty);
	}		

	function drawOutline() {
		ctx.beginPath();
		ctx.fillStyle = "rgba(0,0,0,1)";
		ctx.lineWidth = 2;
		ctx.arc(centerx, centery, radius, 0, 2*Math.PI, true);
		ctx.stroke();	
	}

	sections.forEach(function(object) {
		var color = "rgba(" + rgb + "," + opacity.toString() + ")";
		var linex = centerx + Math.cos(arcPlace*Math.PI) *  radius;
		var liney = centery + Math.sin(arcPlace*Math.PI) *  radius;
		var average = arcPlace+(object.arc/2)
		var textx = centerx + Math.cos(average*Math.PI) *  radius;
		var texty = centery + Math.sin(average*Math.PI) *  radius;
		var start = arcPlace
		var end = arcPlace += object.arc;
		var text = (object.arc * 50) + "% " + object.text;
		drawSection(color, linex, liney, textx, texty, start, end, text);
		opacity -= 0.199;
	});

	drawOutline();

}