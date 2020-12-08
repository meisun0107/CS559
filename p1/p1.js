// @auther: Mei Sun <msun252@wisc.edu>
// @version: 9/16/2020

var canvas = document.getElementById('myCanvas');
function setup() { 
  var slider1 = document.getElementById('slider1');
  slider1.value =0;
  var slider2 = document.getElementById('slider2');
  slider2.value =0;            
  var slider3 = document.getElementById('slider3');
  slider3.value =0;      
  var slider4 = document.getElementById('slider4');
  slider4.value =0;
  var slider5 = document.getElementById('slider5');
  slider5.value =0;            
  var slider6 = document.getElementById('slider6');
  slider6.value =0;  
                  
  function draw() {
    var context = canvas.getContext('2d');
    canvas.width = canvas.width;
    // use the sliders to get various parameters
    var dx1 = slider1.value;
	var dx2 = slider2.value;
	var dx3 = slider3.value;
	
	var dx4 = slider4.value;
	var dx5 = slider5.value;
	var dx6 = slider6.value;
	
	
	//Draw the shapes that will not move
	function DrawFace() {
	
	//Draw the “Line” logo
	context.beginPath();
	context.fillStyle = "darkgreen";
	context.arc(550,400,65,0,2*Math.PI);
	context.fill();
	context.closePath();
	
    //L
    context.beginPath();
    context.strokeStyle = "beige";
	context.lineWidth = 7;
    context.moveTo(500,376);
	context.lineTo(500,420);
	context.lineTo(515,420);
    context.stroke();
    context.closePath();
	
	//I
	context.beginPath();
	context.moveTo(530,376);
	context.lineTo(530,424);
	context.stroke();
	context.closePath();
	
	//N
	context.beginPath();
	context.moveTo(550,424);
	context.lineTo(550,380);
	context.lineTo(554,380);
	context.lineTo(561,420);
	context.lineTo(565,420);
	context.lineTo(565,376);
	context.stroke();
	context.closePath();
	
	//E
	context.beginPath();
	context.moveTo(600,380);
	context.lineTo(585,380);
	context.lineTo(585,400);
	context.lineTo(600,400);
	context.stroke();
	context.closePath();
	
	context.beginPath();
	context.moveTo(585,400);
	context.lineTo(585,420);
	context.lineTo(600,420);
	context.stroke();
	context.closePath();
	
	
	
    //Draw the bear face
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
		
	}

    //The inner ear of the bear
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
	
	
	//The eyes of the bear
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
	
	
	//The mouth of the bear
	function DrawMouth() {
	    
		//The circle around the mouth
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
	
	
	
	
	//The inner ear of the rabbit
	function DrawEar2() {
		context.beginPath();
		context.fillStyle = "pink";
		context.moveTo(67,177);
		context.lineTo(65,120);
		
		context.lineTo(66,115);
		context.lineTo(70,110);
		
		context.lineTo(72,109);
		context.lineTo(74,109);
		
		context.lineTo(76,110);
		context.lineTo(79,115);
		
		context.lineTo(80,120);
		context.lineTo(85,172);
		context.closePath();
		context.fill();
		
		
		context.beginPath();
		context.fillStyle = "pink";
		context.moveTo(110,172);
		context.lineTo(115,120);
		
		context.lineTo(116,115);
		context.lineTo(120,110);
		
		context.lineTo(122,109);
		context.lineTo(124,109);
		
		context.lineTo(126,110);
		context.lineTo(129,115);
		
		context.lineTo(130,120);
		context.lineTo(128,177);
		context.closePath();
		context.fill();
	}
	
	//The eyes of the rabbit
	function DrawEye2() {
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
	
	//The mouth of the rabbit
	function DrawMouth2() {
		context.beginPath();
		context.strokeStyle = "black";
		context.lineWidth = 3;
		context.arc(100,260,5,0,2*Math.PI);
		context.stroke();
		context.closePath(); 
		
		context.beginPath();
		context.moveTo(100,265);
		context.lineTo(100,290);
		context.stroke();
		context.closePath(); 
		
		context.beginPath();
		context.arc(100,260,30,0.6,0.8*Math.PI);
		context.stroke();
		context.closePath(); 
		
		context.beginPath();
		context.fillStyle = "pink";
		context.arc(65,260,10,0,2*Math.PI);
		context.fill();      
		context.closePath(); 
				
		context.beginPath();
		context.fillStyle = "pink";
		context.arc(135,260,10,0,2*Math.PI);
		context.fill();		
		context.closePath();
	
	}

 context.save();
  function setup2() {
    var y = 50;
    function draw2() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      // use the slider to get the position
      var x = 100;
      // this actually draws a square
	  context.fillStyle = "black";
      context.beginPath();
      context.rect(x,y,50,50);
      context.fill();
      y = (y + 2) % 100;
      window.requestAnimationFrame(draw2);
	  };
    window.requestAnimationFrame(draw2);
   };
   context.restore();
   
    
	
    DrawFace();
    context.save();
	context.translate(dx1,0);
	DrawEar();
	context.restore();
	
    context.save();
    context.translate(dx2,0);
	DrawEye();
	context.restore();
	

    context.save();
	context.translate(dx3,0);
	DrawMouth();
    context.restore();
	
	
	context.save();
	context.translate(dx4,0);
	DrawEar2();
	context.restore();
	
	
	
	context.save();
	context.translate(dx5,0);
	DrawEye2();
	context.restore();
	
	
	context.save();
	context.translate(dx6,0);
	DrawMouth2();
	context.restore();
	
	context.save();
	setup2();
	context.restore();
  }
  
  slider1.addEventListener("input",draw);
  slider2.addEventListener("input",draw);
  slider3.addEventListener("input",draw);
  slider4.addEventListener("input",draw);
  slider5.addEventListener("input",draw);
  slider6.addEventListener("input",draw);
  
  draw();
}



setup();