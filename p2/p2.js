// @auther: Mei Sun <msun252@wisc.edu>
// @version: 9/28/2020

function setup() {

  var canvas = document.getElementById("myCanvas");

  var slider1 = document.getElementById('slider1');
  slider1.value = 0;
  var slider2 = document.getElementById('slider2');
  slider2.value = 0;
  var slider3 = document.getElementById('slider3');
  slider3.value = 0;
  var slider4 = document.getElementById('slider4');
  slider4.value = 0;
  
  
  function draw(){
	var context = canvas.getContext('2d');
	canvas.width = canvas.width;
	var theta1 = slider1.value*0.005*Math.PI;
	
    function table(){
		
		context.beginPath();
		context.strokeStyle = "black";
		context.fillStyle = "#70421f";
		context.lineWidth = 2;
		context.moveTo(20,0);
		context.lineTo(300,0);
		context.quadraticCurveTo(320,0,320,20);
        context.lineTo(320,170);
        context.quadraticCurveTo(320,190,300,190);
        context.lineTo(20,190);
        context.quadraticCurveTo(0,190,0,170);
        context.lineTo(0,20);
        context.quadraticCurveTo(0,0,20,0);
        context.stroke();
        context.fill();
        context.closePath();
		
		//drawers
        context.beginPath();
        context.fillStyle = "#d49157";
        context.moveTo(20,20);
        context.lineTo(300,20);
        context.lineTo(300,90);
        context.lineTo(20,90);
        context.closePath();
        context.fill();
        context.stroke();

        context.beginPath();
        context.moveTo(20,100);
        context.lineTo(300,100);
        context.lineTo(300,170);
        context.lineTo(20,170);
        context.closePath();
        context.fill();
        context.stroke();

        //handles of the drawers
        context.beginPath();
        context.fillStyle = "saddlebrown";
        context.moveTo(120,50);
		context.lineTo(200,50);
		context.quadraticCurveTo(210,55,200,60);
		context.lineTo(120,60);
		context.quadraticCurveTo(110,55,120,50);
		context.fill();
		context.stroke();
		
		context.beginPath();
        context.moveTo(120,130);
		context.lineTo(200,130);
		context.quadraticCurveTo(210,135,200,140);
		context.lineTo(120,140);
		context.quadraticCurveTo(110,135,120,130);
		context.fill();
		context.stroke();
		
		//legs of the table
		context.beginPath();
        context.fillStyle = "#70421f";
        context.strokeStyle = "black";
        context.lineWidth = 2;
		context.moveTo(90,190);
		context.lineTo(120,190);
		context.lineTo(90,250);
		context.lineTo(70,250);
		context.closePath();
		context.stroke();
		context.fill();
	
		context.beginPath();
		context.moveTo(200,190);
		context.lineTo(230,190);
		context.lineTo(250,250);
		context.lineTo(230,250);
		context.closePath();
		context.stroke();
		context.fill();

}

    function bottle(){
	
	//bottom
	context.beginPath();
	context.strokeStyle = "black";
	context.lineWidth = 1;
	context.fillStyle = "gray";
	context.moveTo(0,0);
	context.lineTo(0,-15);
	context.lineTo(70,-15);
	context.lineTo(70,0);
	context.closePath();
	context.fill();
	context.stroke();
	
	//body
	context.beginPath();
	context.fillStyle = "lightblue";
	context.strokeStyle = "black";
	context.moveTo(5,-15);
	context.lineTo(-15,-120);
	context.lineTo(85,-120);
	context.lineTo(65,-15);
	context.closePath();
	context.fill();
	context.stroke();
	
	//handle
	context.strokeStyle = "black";
	context.moveTo(85,-120);
	context.quadraticCurveTo(150,-110,65,-15);
	context.lineTo(68,-35);
	context.quadraticCurveTo(128,-103,84,-108);
	context.closePath();
	context.fill();
	context.stroke();
	
	//spout
	context.beginPath();
	context.strokeStyle = "black";
	context.moveTo(-15,-120);
	context.lineTo(-35,-120);
	context.lineTo(-25,-100);
	context.lineTo(-10,-90);
	context.fill();
	context.stroke();
	
	//highlight
	context.beginPath();
	context.strokeStyle = "white";
	context.fillStyle = "white";
	context.moveTo(15,-35);
	context.lineTo(0,-100);
	context.quadraticCurveTo(0,-110,5,-105);
	context.lineTo(21,-40);
	context.quadraticCurveTo(21,-30,15,-35);
	context.fill();
	context.stroke();
	
	
	//scale
	context.beginPath();
	context.strokeStyle = "royalblue";
	context.lineWidth = 1.5;
	context.moveTo(40,-100);
	context.lineTo(60,-100);
	context.moveTo(44,-90);
	context.lineTo(56,-90);
	context.moveTo(44,-80);
	context.lineTo(56,-80);
	context.moveTo(40,-70);
	context.lineTo(60,-70);
	context.moveTo(44,-60);
	context.lineTo(56,-60);
	context.moveTo(44,-50);
	context.lineTo(56,-50);
	context.moveTo(40,-40);
	context.lineTo(60,-40);
	context.moveTo(50,-100);
	context.lineTo(50,-40);
	context.stroke();
}

    function lid(){
	
	context.beginPath();
	context.fillStyle = "grey";
	context.strokeStyle = "black";
	context.moveTo(0,0);
	context.quadraticCurveTo(5,-5,0,-10);
	context.lineTo(-100,-10);
	context.quadraticCurveTo(-105,-5,-100,0);
	context.closePath();
	context.stroke();
	context.fill();
	
}

    function clock(){
	
    //get the time right now
    var timeNow = new Date();
    var seconds = timeNow.getSeconds();
    var minutes = timeNow.getMinutes();
    var hours = timeNow.getHours();
    if(hours >= 12){
	  hours = hours - 12;
    }
 
    context.save();
    context.clearRect(0,0,100,100);
  
    //daw the clock
    context.beginPath();
    context.lineWidth = 18;
    context.strokeStyle ="white";
    context.arc(0,0,150,0,2*Math.PI);
    context.fillStyle = "pink";
    context.fill();
    context.stroke();
    context.closePath();
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle ="saddlebrown";
    context.arc(0,0,158,0,2*Math.PI);
    context.stroke();
    context.closePath();

    //draw hour marks
    context.save();
    context.fillStyle = "hotpink";
    for(var i=0;i<12;i++){
	   context.beginPath();
       context.rotate(Math.PI/6);
	   context.arc(110,0,11,0,2*Math.PI);
	   context.fill();
    }
    context.restore();
 

    context.rotate(-Math.PI/2);
    context.strokeStyle = "black";
	
    //Hours
    context.save();
    context.rotate((Math.PI/6)*hours + (Math.PI/(360))*minutes + (Math.PI/21600)*seconds);
	context.beginPath();
	context.lineWidth = 14;
    context.moveTo(-20,0);
    context.lineTo(80,0);
    context.stroke();
    context.restore();

    //Minutes
    context.save();
    context.rotate((Math.PI/30)*minutes + (Math.PI/1800)*seconds);
    context.beginPath();
	context.lineWidth = 8;
    context.moveTo(-20,0);
    context.lineTo(110,0);
    context.stroke();
    context.restore();
 
 
    //Seconds
    context.save();
    context.rotate((Math.PI/30)*seconds);
    context.strokeStyle = "firebrick";
	context.beginPath();
    context.lineWidth = 4;
    context.moveTo(-20,0);
    context.lineTo(119,0);
    context.stroke();
    context.fill();
    context.restore();
	
	
    context.restore();
    window.requestAnimationFrame(clock);
}

    context.save();
    context.translate(slider3.value,223);
    context.save();
    table();
    context.translate(slider2.value,0);
    context.save();
    bottle();
    context.translate(85,-120);
    context.save();
    context.rotate(theta1);
    lid();

    context.restore();
    context.restore();
    context.restore();
    context.restore();
    context.translate(slider4.value,100);
    context.scale(0.38,0.38);
    window.requestAnimationFrame(clock);
}

slider1.addEventListener("input",draw);
slider2.addEventListener("input",draw);
slider3.addEventListener("input",draw);
slider4.addEventListener("input",draw);

draw();
}

window.onload = setup;