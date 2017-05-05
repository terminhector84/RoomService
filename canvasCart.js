function inme(){
	var ctx = document.getElementById("canvas").getContext("2d");

	ctx.strokeStyle = "#fff";
	ctx.lineWidth= 6;
	ctx.lineCap ='round';
	
	ctx.beginPath();
		ctx.moveTo(0,2);
		ctx.lineTo(12,2);
		ctx.moveTo(12,0);
		ctx.lineTo(20,19);
		ctx.moveTo(20,19);
		ctx.lineTo(45,19);
		ctx.moveTo(45,19);
		ctx.lineTo(55,3);
		//cart tires
		ctx.moveTo(22,27);
		ctx.lineTo(22,28);
		ctx.moveTo(42,27);
		ctx.lineTo(42,28);
		ctx.stroke();
	ctx.closePath();
	
}

inme();