var canvas = document.getElementById('myCanvas');
  
  function DrawFace() {
	  var context = canvas.getContext('2d');
	  
	  //Draw the rabbit face
	  context.beginPath();
	  context.fillStyle = "white";
	  context.arc(700,250,80,0,2*Math.PI);
	  context.fill();
	  context.closePath();
	  
	  //rabbit ear
	  context.beginPath();
	  context.fillStyle = "white";
	  context.moveTo(660,200);
	  context.lineTo(660,120);
	  context.lineTo(661,115);
	  context.lineTo(663,110);
	  context.lineTo(666,105);
	  context.lineTo(668,102);
	  context.lineTo(671,100);
	  context.lineTo(674,100);
	  context.lineTo(677,102);
	  context.lineTo(679,105);
	  context.lineTo(682,110);
	  context.lineTo(684,115);
	  context.lineTo(685,120);
	  context.lineTo(695,200);
	  context.closePath();
	  context.fill();
	  //context.stroke();  
	  
	  context.beginPath();
	  context.fillStyle = "white";
	  context.moveTo(700,200);
	  context.lineTo(710,120);
	  context.lineTo(711,115);
	  context.lineTo(713,110);
	  context.lineTo(716,105);
	  context.lineTo(718,102);
	  context.lineTo(721,100);
	  context.lineTo(724,100);
	  context.lineTo(727,102);
	  context.lineTo(729,105);
	  context.lineTo(732,110);
	  context.lineTo(734,115);
	  context.lineTo(735,120);
	  context.lineTo(735,200);
	  context.closePath();
	  context.fill();
	  	
		
		
		
		
	//eyes
	context.beginPath();
	context.fillStyle = "black";
	context.arc(685,245,7,0,2*Math.PI);
	context.fill();      
	context.closePath(); 
			
	context.beginPath();
	context.fillStyle = "black";
	context.arc(715,245,7,0,2*Math.PI);
	context.fill();		
	context.closePath(); 
	
	
	
	
	
	//mouth
	context.beginPath();
	context.strokeStyle = "black";
	context.lineWidth = 3;
	context.arc(700,260,5,0,2*Math.PI);
	context.stroke();
	context.closePath(); 
	
	context.beginPath();
	context.moveTo(700,265);
	context.lineTo(700,290);
	context.stroke();
	context.closePath(); 
	
	context.beginPath();
	context.arc(700,260,30,0.6,0.8*Math.PI);
	context.stroke();
	context.closePath(); 
	
	context.beginPath();
	context.fillStyle = "pink";
	context.arc(665,260,10,0,2*Math.PI);
	context.fill();      
	context.closePath(); 
			
	context.beginPath();
	context.fillStyle = "pink";
	context.arc(735,260,10,0,2*Math.PI);
	context.fill();		
	context.closePath(); 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//rabbit ear
	context.beginPath();
	context.fillStyle = "pink";
	context.moveTo(667,177);
	context.lineTo(665,120);
	
	context.lineTo(666,115);
	context.lineTo(670,110);
	
    context.lineTo(672,109);
	context.lineTo(674,109);
	
	context.lineTo(676,110);
	context.lineTo(679,115);
	
	context.lineTo(680,120);
	context.lineTo(685,172);
	context.closePath();
	context.fill();
	//context.stroke();  
	
	
	context.beginPath();
	context.fillStyle = "pink";
	context.moveTo(710,172);
	context.lineTo(715,120);
	
	context.lineTo(716,115);
	context.lineTo(720,110);
	
	context.lineTo(722,109);
	context.lineTo(724,109);
	
	context.lineTo(726,110);
	context.lineTo(729,115);
	
	context.lineTo(730,120);
	context.lineTo(728,177);
	context.closePath();
	context.fill();
		
	

	
	
}

DrawFace();