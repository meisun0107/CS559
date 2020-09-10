function setup() { "use strict";
  var canvas = document.getElementById('myCanvas');
  var slider1 = document.getElementById('slider1');
  slider1.value =0;
                  
                  
                  
                  
  function draw() {
    var context = canvas.getContext('2d');
    canvas.width = canvas.width;
    // use the sliders to get various parameters
    var dx = slider1.value;
	
	
	function DrawFace() {
		
		//Draw the face
	  context.beginPath();
	  context.fillStyle = "saddlebrown";
	  context.arc(400,250,80,0,2*Math.PI);
		context.arc(350,182,20,0,2*Math.PI);
		context.fill();
		context.closePath();
		
		context.beginPath();
		context.arc(450,182,20,0,2*Math.PI);
	  context.fill();
		context.closePath();
		 
		
	}

    
    function DrawEar() {
      context.beginPath();
       context.fillStyle = "black";
      context.arc(148,182,13,1.1*Math.PI,0.3*Math.PI);
      context.closePath();
      context.fill();
      
      context.beginPath();
       context.fillStyle = "black";
      context.arc(52,182,13,0.7*Math.PI,1.9*Math.PI);
      context.closePath();
      context.fill();  
    }
	
	
	function DrawEye() {
	context.beginPath();
	context.fillStyle = "black";
	context.arc(85,245,7,0,2*Math.PI);
	context.fill();      
    context.closePath(); 
			
	context.beginPath();
	context.fillStyle = "black";
	context.arc(115,245,7,0,2*Math.PI);
	context.fill();		
	context.closePath(); 
	}
	
	function DrawMouth() {
	    context.beginPath();
	    context.arc(100,280,28,0,2*Math.PI);
	    context.fillStyle="blanchedalmond";
	    context.fill();
	    context.closePath();
	
	
	//Draw the mouth
	    context.beginPath();
	    context.fillStyle = "black";
	    context.moveTo(92,255);
	    context.lineTo(108,255);
		context.lineTo(110,257);
		context.lineTo(100,270);
		context.lineTo(90,257);
		context.closePath();
	    context.fill();  
		
		context.beginPath();
		context.strokeStyle = "black";
		context.lineWidth = 3;
		context.moveTo(100,260);
		context.lineTo(100,280);
		context.lineTo(92,295);
		
		context.moveTo(100,280);
		context.lineTo(108,290);
		
		context.stroke(); 
	}
	
    
	
	
	
	
	
	
    DrawFace();
    context.save();
    context.translate(dx,0);
    DrawEar();
	DrawEye();
	DrawMouth();
    context.restore();
  }
  
  slider1.addEventListener("input",draw);
  draw();
}
setup();
//window.onload = setup;