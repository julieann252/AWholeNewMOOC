function draw() {
	var canvas = document.getElementById('piechart');
	var ctx = canvas.getContext('2d');
	var arcPlace = 0;
	var sections = [
		{arc: 0.2, text: "10% forum upvotes"},
		{arc: 0.4, text: "20% quiz grades"},
		{arc: 0.3, text: "15% forum posts"},
		{arc: 0.3, text: "15% indv. assignments"},
		{arc: 0.3, text: "15% group assignments"},
		{arc: 0.5, text: "25% watching lectures"},
		];
	var radius = 100;
	var opacity = 1;
	var centerx = 550/2;
	var centery = 275/2;
	
	function drawSection(color, linex, liney, textx, texty, startRadians, endRadians, text) {
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.moveTo(centerx, centery);
		ctx.lineTo(linex, liney);
		ctx.arc(centerx,centery,radius, (startRadians*Math.PI), (endRadians*Math.PI), false);
		ctx.fill();
		ctx.beginPath();
		ctx.textBaseline = "top";
		if (textx > centerx) {
			ctx.textAlign = "left";
			textx +=10;
			if (texty < centery) {
				textx += ((centery-texty) * 0.1);
				texty -= ((centery-texty) * 0.2);
			}
			else {
				texty += ((texty-centery) * 0.1);
			}
		}
		else {
			ctx.textAlign = "right";
			textx -=10;
			if (texty < centery) {
				textx -= ((centery-texty) * 0.1);
				texty -= ((centery-texty) * 0.2);
			}
			else {
				texty += ((texty-centery) * 0.1);
			}
		}
		ctx.font = "16px sans-serif";
  		ctx.fillStyle = "rgba(0,0,0,1)";
  		ctx.fillText(text, textx, texty);
	}		

	for(i=0; i<sections.length; i++) {
		var color = "rgba(59,44,96," + opacity.toString() + ")";
		var linex = centerx + Math.cos(arcPlace*Math.PI) *  radius;
		var liney = centery + Math.sin(arcPlace*Math.PI) *  radius;
		var average = arcPlace+(sections[i].arc/2)
		var textx = centerx + Math.cos(average*Math.PI) *  radius;
		var texty = centery + Math.sin(average*Math.PI) *  radius;
		var start = arcPlace
		var end = arcPlace+= sections[i].arc;
		drawSection(color, linex, liney, textx, texty, start, end, sections[i].text);
		opacity -= 0.199;
	}

	ctx.beginPath();
	ctx.fillStyle = "rgba(0,0,0,1)";
	ctx.lineWidth = 2;
	ctx.arc(centerx,centery, radius, 0, 2*Math.PI, true);
	ctx.stroke();	
}
$(document).ready(function() {
	draw();
});