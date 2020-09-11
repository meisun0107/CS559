var canvas = document.getElementById('myCanvas');
  
  function DrawFace() {
	  
	var context = canvas.getContext('2d');
	
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
	
	context.beginPath();
	 context.fillStyle = "black";
	context.arc(448,182,13,1.1*Math.PI,0.3*Math.PI);
	context.closePath();
	context.fill();
	
	context.beginPath();
	 context.fillStyle = "black";
	context.arc(352,182,13,0.7*Math.PI,1.9*Math.PI);
	context.closePath();
	context.fill();
	
	
  
    //Draw the eyes
    context.beginPath();
    context.fillStyle = "black";
    context.arc(385,245,7,0,2*Math.PI);
    context.fill();      
	context.closePath(); 
	
	context.beginPath();
	context.fillStyle = "black";
	context.arc(415,245,7,0,2*Math.PI);
	context.fill();
	context.closePath(); 
	
	//Draw the circle around mouth
	context.beginPath();
	context.arc(400,280,28,0,2*Math.PI);
	context.fillStyle="blanchedalmond";
	context.fill();
	context.closePath();
	
	//Draw the mouth
	    context.beginPath();
	    context.fillStyle = "black";
	    context.moveTo(392,255);
	    context.lineTo(408,255);
		context.lineTo(410,257);
		context.lineTo(400,270);
		context.lineTo(390,257);
		context.closePath();
	    context.fill();  
		
		context.beginPath();
		context.strokeStyle = "black";
		context.lineWidth = 3;
		context.moveTo(400,260);
		context.lineTo(400,280);
		context.lineTo(392,295);
		
		context.moveTo(400,280);
		context.lineTo(408,290);
		
		context.stroke(); 
	 
	
  }
  


