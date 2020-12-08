// @auther: Mei Sun <msun252@wisc.edu>
// @version: 10/05/2020

function setup() {

  var canvas = document.getElementById("myCanvas");

  var slider1 = document.getElementById('slider1');
  slider1.value = 0;
  var slider2 = document.getElementById('slider2');
  slider2.value = 0;
  var slider3 = document.getElementById('slider3');
  slider3.value = -30;
  var slider4 = document.getElementById('slider4');
  slider4.value = 0;
  
  function draw(){
	var context = canvas.getContext('2d');
	canvas.width = canvas.width;
	
	var theta1 = slider3.value*0.005*Math.PI;
	var theta2 = slider4.value*0.005*Math.PI;
	
	function setCanvasTransform(Tx) {
		context.setTransform(Tx[0],Tx[1],Tx[3],Tx[4],Tx[6],Tx[7]);
	}
	
	function shelf(){
		context.lineCap = "round";
		context.lineWidth = 4;
		context.strokeStyle = "grey";
		context.fillStyle = "darkgray";
		context.beginPath();
		context.moveTo(0,0);
		context.lineTo(0,400);
		context.lineTo(-30,400);
		context.lineTo(-30,410);
		context.lineTo(40,410);
		context.lineTo(40,400);
		context.lineTo(10,400);
		context.lineTo(10,0);
		context.quadraticCurveTo(5,-10,0,0);
		context.stroke();
		context.fill();
		
		context.beginPath();
		context.moveTo(300,0);
		context.lineTo(300,400);
		context.lineTo(270,400);
		context.lineTo(270,410);
		context.lineTo(340,410);
		context.lineTo(340,400);
		context.lineTo(310,400);
		context.lineTo(310,0);
		context.quadraticCurveTo(305,-10,300,0);
		context.stroke();
		context.fill();
		
		context.beginPath();
		context.moveTo(12,130);
		context.lineTo(298,130);
		context.lineTo(298,140);
		context.lineTo(12,140);
		context.closePath();
		
		context.stroke();
		context.fill();
		
		context.beginPath();
		context.moveTo(12,320);
		context.lineTo(298,320);
		context.lineTo(298,330);
		context.lineTo(12,330);
		context.closePath();
		
		context.stroke();
		context.fill();
		
	}
	
	function flowerpot(color1, color2){
		
		context.lineCap = "round";
		context.lineWidth = 4;
		context.strokeStyle = color1;
		context.fillStyle = color2;
		context.beginPath();
		context.moveTo(0,0);
		context.lineTo(40,0);
		context.lineTo(50,-50);
		context.lineTo(-10,-50);
		context.closePath();
		context.stroke();
		context.fill();
		
		context.beginPath();
		context.moveTo(-10,-50);
		context.lineTo(-13,-50);
		context.lineTo(-13,-60);
		context.lineTo(53,-60);
		context.lineTo(53,-50);
		context.closePath();
		context.stroke();
		context.fill();
		
		
	}
	
	function flower(color){
		
		context.lineCap = "round";
		context.lineWidth = 4;
		context.strokeStyle = "darkgreen";
		context.beginPath();
		context.moveTo(0,0);
		context.quadraticCurveTo(-10,-20,-5,-40);
	    context.stroke();
		
		context.fillStyle = color;
		context.beginPath();
		context.arc(-12,-40,8,0,2*Math.PI);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.arc(3,-40,8,0,2*Math.PI);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.arc(-15,-52,8,0,2*Math.PI);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.arc(8,-52,8,0,2*Math.PI);
		context.closePath();
		context.fill();
		
		context.beginPath();
		context.arc(-4,-60,8,0,2*Math.PI);
		context.closePath();
		context.fill();
		
		context.fillStyle = "lightyellow";
		
		context.beginPath();
		context.arc(-4,-48,6,0,2*Math.PI);
		context.closePath();
		context.fill();
		
		//leaves
		context.fillStyle = "green";
		context.lineWidth = 4;
		context.beginPath();
		context.moveTo(-8,-20);
		context.quadraticCurveTo(-10,-23,-16,-25);
		context.quadraticCurveTo(-6,-15,-8,-20);
		context.stroke();
		
		context.fillStyle = "green";
		context.lineWidth = 4;
		context.beginPath();
		context.moveTo(-3,-15);
		context.quadraticCurveTo(-4,-18,6,-20);
		context.quadraticCurveTo(-2,-12,-3,-15);
		context.stroke();
		
	}
	
	
	var shelf_to_canvas = mat3.create();
	mat3.fromTranslation(shelf_to_canvas,[60,60]);
	mat3.translate(shelf_to_canvas,shelf_to_canvas,[slider1.value,0])
	setCanvasTransform(shelf_to_canvas);
	shelf();
	
	var flowerpot1_to_shelf = mat3.create();
	mat3.fromTranslation(flowerpot1_to_shelf,[40,127]);
	mat3.translate(flowerpot1_to_shelf,flowerpot1_to_shelf,[slider2.value,0])
	var flowerpot1_to_canvas = mat3.create();
	mat3.multiply(flowerpot1_to_canvas,shelf_to_canvas,flowerpot1_to_shelf);
	setCanvasTransform(flowerpot1_to_canvas);
	flowerpot("saddlebrown","burlywood");
	
	var flower1_to_flowerpot1 = mat3.create();
	mat3.fromTranslation(flower1_to_flowerpot1,[20,-63]);
	mat3.rotate(flower1_to_flowerpot1,flower1_to_flowerpot1,theta1)
	var flower1_to_canvas = mat3.create();
	mat3.multiply(flower1_to_canvas,flowerpot1_to_canvas,flower1_to_flowerpot1);
	setCanvasTransform(flower1_to_canvas);
	flower("crimson");
	
	var flower2_to_flowerpot1 = mat3.create();
	mat3.fromTranslation(flower2_to_flowerpot1,[20,-63]);
	mat3.rotate(flower2_to_flowerpot1,flower2_to_flowerpot1,theta1*-1.5)
	mat3.scale(flower2_to_flowerpot1,flower2_to_flowerpot1,[0.8,0.8])
	var flower2_to_canvas = mat3.create();
	mat3.multiply(flower2_to_canvas,flowerpot1_to_canvas,flower2_to_flowerpot1);
	setCanvasTransform(flower2_to_canvas);
	flower("crimson");
	
	var flowerpot2_to_shelf = mat3.create();
	mat3.fromTranslation(flowerpot2_to_shelf,[40,317]);
	mat3.translate(flowerpot2_to_shelf,flowerpot2_to_shelf,[slider4.value,0])
	var flowerpot2_to_canvas = mat3.create();
	mat3.multiply(flowerpot2_to_canvas,shelf_to_canvas,flowerpot2_to_shelf);
	setCanvasTransform(flowerpot2_to_canvas);
	flowerpot("#522c21","saddlebrown");
	
	var flower3_to_flowerpot2 = mat3.create();
	mat3.fromTranslation(flower3_to_flowerpot2,[20,-63]);
	mat3.rotate(flower3_to_flowerpot2,flower3_to_flowerpot2,theta2*0.2-0.2)
	mat3.scale(flower3_to_flowerpot2,flower3_to_flowerpot2,[1.2,1.2])
	var flower3_to_canvas = mat3.create();
	mat3.multiply(flower3_to_canvas,flowerpot2_to_canvas,flower3_to_flowerpot2);
	setCanvasTransform(flower3_to_canvas);
	flower("orange");
	
	var flower4_to_flower3 = mat3.create();
	mat3.fromTranslation(flower4_to_flower3,[-2,-4]);
	mat3.rotate(flower4_to_flower3,flower4_to_flower3,theta2*-0.7+0.8)
	mat3.scale(flower4_to_flower3,flower4_to_flower3,[0.6,0.6])
	var flower4_to_canvas = mat3.create();
	mat3.multiply(flower4_to_canvas,flower3_to_canvas,flower4_to_flower3);
	setCanvasTransform(flower4_to_canvas);
	flower("#fcde1e");
	
	var flower5_to_flower3 = mat3.create();
	mat3.fromTranslation(flower5_to_flower3,[-2,-3]);
	mat3.rotate(flower5_to_flower3,flower5_to_flower3,theta2*0.6-0.8)
	mat3.scale(flower5_to_flower3,flower5_to_flower3,[0.6,0.6])
	var flower5_to_canvas = mat3.create();
	mat3.multiply(flower5_to_canvas,flower3_to_canvas,flower5_to_flower3);
	setCanvasTransform(flower5_to_canvas);
	flower("#fc6c1e");
	
	
  }

slider1.addEventListener("input",draw);
slider2.addEventListener("input",draw);
slider3.addEventListener("input",draw);
slider4.addEventListener("input",draw);
draw();


}

window.onload = setup;