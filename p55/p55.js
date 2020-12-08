// @auther: Mei Sun <msun252@wisc.edu>
// @version: 11/11/2020
// @Refering: week8 - demo4

function setup() {
	
    var observerCanvas = document.getElementById('observerCanvas');
    var cameraCanvas = document.getElementById('cameraCanvas');
    var observerContext = observerCanvas.getContext('2d');
    var cameraContext = cameraCanvas.getContext('2d');
	
    var slider1 = document.getElementById('slider1');
    slider1.value = 0;
    var slider2 = document.getElementById('slider2');
    slider2.value = 0;
    var slider3 = document.getElementById('slider3');
    slider3.value = 0;

	
    var context = cameraContext;

    function draw() {
      
	observerCanvas.width = observerCanvas.width;
	cameraCanvas.width = cameraCanvas.width;

	var moveT = slider1.value;
    var moveB = slider2.value;
    var viewAngle = slider3.value*0.02*Math.PI;
	
	function moveToTx(loc,Tx)
	{var res=vec3.create(); vec3.transformMat4(res,loc,Tx); context.moveTo(res[0],res[1]);}

	function lineToTx(loc,Tx)
	{var res=vec3.create(); vec3.transformMat4(res,loc,Tx); context.lineTo(res[0],res[1]);}
	



    function drawBox(Tx) {
		
		context.fillStyle = "lightpink";
		
		context.beginPath();
		moveToTx([0,0,0],Tx);
		lineToTx([50,0,0],Tx);
		lineToTx([50,0,30],Tx);
		lineToTx([0,0,30],Tx);
		context.closePath();
		context.fill();
		
		context.beginPath();
		moveToTx([0,30,0],Tx);
		lineToTx([50,30,0],Tx);
		lineToTx([50,30,30],Tx);
		lineToTx([0,30,30],Tx);
		context.closePath();
		context.fill();
		

		
		context.beginPath();
		moveToTx([0,30,0],Tx);
		lineToTx([0,0,0],Tx);
		lineToTx([0,0,30],Tx);
		lineToTx([0,30,30],Tx);
		context.closePath();
		context.fill();
		
		context.beginPath();
		moveToTx([50,30,0],Tx);
		lineToTx([50,0,0],Tx);
		lineToTx([50,0,30],Tx);
		lineToTx([50,30,30],Tx);
		context.closePath();
		context.fill();
		

		context.beginPath();
		moveToTx([0,0,0],Tx);
		lineToTx([0,30,0],Tx);
		lineToTx([50,30,0],Tx);
		lineToTx([50,0,0],Tx);
		context.closePath();
		context.fill();
		
	
		context.beginPath();
		moveToTx([0,0,30],Tx);
		lineToTx([0,30,30],Tx);
		lineToTx([50,30,30],Tx);
		lineToTx([50,0,30],Tx);
		context.closePath();
		context.fill();
		
	}
	
	
	function drawTable(TxU,scale) {
        var Tx = mat4.clone(TxU);
        mat4.scale(Tx,Tx,[scale,scale,scale]);
		context.fillStyle = "lightblue";
       
	   //上面
		context.beginPath();
	    moveToTx([0,100,0],Tx);
	    lineToTx([140,100,0],Tx);
        lineToTx([140,100,60],Tx);
      	lineToTx([0,100,60],Tx);
	    context.closePath();
		context.fill();
		
		//下面
		moveToTx([0,95,0],Tx);
		lineToTx([140,95,0],Tx);
		lineToTx([140,95,60],Tx);
		lineToTx([0,95,60],Tx);
		context.closePath();
		context.fill();
		
		//后面
		moveToTx([0,100,0],Tx);
		lineToTx([0,95,0],Tx);
		lineToTx([140,95,0],Tx);
		lineToTx([140,100,0],Tx);
		context.closePath();
		context.fill();
		//前面
		moveToTx([0,100,60],Tx);
		lineToTx([0,95,60],Tx);
		lineToTx([140,95,60],Tx);
		lineToTx([140,100,60],Tx);
		context.closePath();
		context.fill();
		//左边
		moveToTx([0,100,0],Tx);
		lineToTx([0,100,60],Tx);
		lineToTx([0,95,60],Tx);
		lineToTx([0,95,0],Tx);
		context.closePath();
		context.fill();
		//右边
		moveToTx([140,100,0],Tx);
		lineToTx([140,100,60],Tx);
		lineToTx([140,95,60],Tx);
		lineToTx([140,95,0],Tx);
		context.closePath();
		context.fill();


	}
	
	
	function drawTableLeg(TxU,scale) {
	    var Tx = mat4.clone(TxU);
	    mat4.scale(Tx,Tx,[scale,scale,scale]);
		
	    context.fillStyle = "grey";
		//leg1
		context.beginPath();
		moveToTx([0,0,0],Tx);
		lineToTx([10,0,0],Tx);
		lineToTx([10,0,10],Tx);
		lineToTx([0,0,10],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([0,95,0],Tx);
		lineToTx([10,95,0],Tx);
		lineToTx([10,95,10],Tx);
		lineToTx([0,95,10],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([0,0,0],Tx);
		lineToTx([0,0,10],Tx);
		lineToTx([0,95,10],Tx);
		lineToTx([0,95,0],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([10,0,0],Tx);
		lineToTx([10,0,10],Tx);
		lineToTx([10,95,10],Tx);
		lineToTx([10,95,0],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([0,0,0],Tx);
		lineToTx([10,0,0],Tx);
		lineToTx([10,95,0],Tx);
		lineToTx([0,95,0],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([0,0,10],Tx);
		lineToTx([10,0,10],Tx);
		lineToTx([10,95,10],Tx);
		lineToTx([0,95,10],Tx);
		context.closePath();
		context.fill();
		
		//leg2
		context.beginPath();
		moveToTx([130,0,0],Tx);
		lineToTx([140,0,0],Tx);
		lineToTx([140,0,10],Tx);
		lineToTx([130,0,10],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([130,95,0],Tx);
		lineToTx([140,95,0],Tx);
		lineToTx([140,95,10],Tx);
		lineToTx([130,95,10],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([130,0,0],Tx);
		lineToTx([130,0,10],Tx);
		lineToTx([130,95,10],Tx);
		lineToTx([130,95,0],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([140,0,0],Tx);
		lineToTx([140,0,10],Tx);
		lineToTx([140,95,10],Tx);
		lineToTx([140,95,0],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([130,0,0],Tx);
		lineToTx([140,0,0],Tx);
		lineToTx([140,95,0],Tx);
		lineToTx([130,95,0],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([130,0,10],Tx);
		lineToTx([140,0,10],Tx);
		lineToTx([140,95,10],Tx);
		lineToTx([130,95,10],Tx);
		context.closePath();
		context.fill();
		
		//leg3
		context.beginPath();
		moveToTx([130,0,50],Tx);
		lineToTx([140,0,50],Tx);
		lineToTx([140,0,60],Tx);
		lineToTx([130,0,60],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([130,95,50],Tx);
		lineToTx([140,95,50],Tx);
		lineToTx([140,95,60],Tx);
		lineToTx([130,95,60],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([130,0,50],Tx);
		lineToTx([130,0,60],Tx);
		lineToTx([130,95,60],Tx);
		lineToTx([130,95,50],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([140,0,50],Tx);
		lineToTx([140,0,60],Tx);
		lineToTx([140,95,60],Tx);
		lineToTx([140,95,50],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([130,0,50],Tx);
		lineToTx([140,0,50],Tx);
		lineToTx([140,95,50],Tx);
		lineToTx([130,95,50],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([130,0,60],Tx);
		lineToTx([140,0,60],Tx);
		lineToTx([140,95,60],Tx);
		lineToTx([130,95,60],Tx);
		context.closePath();
		context.fill();
		
		//leg4
		context.beginPath();
		moveToTx([0,0,50],Tx);
		lineToTx([10,0,50],Tx);
		lineToTx([10,0,60],Tx);
		lineToTx([0,0,60],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([0,95,50],Tx);
		lineToTx([10,95,50],Tx);
		lineToTx([10,95,60],Tx);
		lineToTx([0,95,60],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([0,0,50],Tx);
		lineToTx([0,0,60],Tx);
		lineToTx([0,95,60],Tx);
		lineToTx([0,95,50],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([10,0,50],Tx);
		lineToTx([10,0,60],Tx);
		lineToTx([10,95,60],Tx);
		lineToTx([10,95,50],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([0,0,50],Tx);
		lineToTx([10,0,50],Tx);
		lineToTx([10,95,50],Tx);
		lineToTx([0,95,50],Tx);
		context.closePath();
		context.fill();
		
		moveToTx([0,0,60],Tx);
		lineToTx([10,0,60],Tx);
		lineToTx([10,95,60],Tx);
		lineToTx([0,95,60],Tx);
		context.closePath();
		context.fill();
		
	
	}
	
	
    function drawCamera(TxU,scale) {
        var Tx = mat4.clone(TxU);
        mat4.scale(Tx,Tx,[scale,scale,scale]);
        context.beginPath();
	    context.strokeStyle = "darkorange";
	   
        moveToTx([-3,-3,-2],Tx);lineToTx([3,-3,-2],Tx);
        lineToTx([3,3,-2],Tx);lineToTx([-3,3,-2],Tx);
		context.closePath();
		context.fillStyle = "yellow";
		context.fill();
		
        moveToTx([3,-3,-2],Tx);lineToTx([2,-2,0],Tx);
        lineToTx([2,2,0],Tx);lineToTx([3,3,-2],Tx);
        moveToTx([2,-2,0],Tx);lineToTx([-2,-2,0],Tx);
        lineToTx([-2,2,0],Tx);lineToTx([2,2,0],Tx);
        moveToTx([-2,-2,0],Tx);lineToTx([-3,-3,-2],Tx);
       lineToTx([-3,3,-2],Tx);lineToTx([-2,2,0],Tx);
	  
        context.stroke();
    }

    var CameraCurve = function() {
        var distance = 100;
        var eye = vec3.create();
        eye[0] = distance*Math.sin(viewAngle);
        eye[1] = 100;
        eye[2] = distance*Math.cos(viewAngle);
        return [eye[0],eye[1],eye[2]];
    }



    var eyeCamera = CameraCurve();
    var targetCamera = vec3.fromValues(0,0,0);
    var upCamera = vec3.fromValues(0,1,0); 
	var TlookAtCamera = mat4.create();
    mat4.lookAt(TlookAtCamera, eyeCamera, targetCamera, upCamera);

    var eyeObserver = vec3.fromValues(700,300,500);
    var targetObserver = vec3.fromValues(0,0,0);
    var upObserver = vec3.fromValues(0,1,0);
	var TlookAtObserver = mat4.create();
    mat4.lookAt(TlookAtObserver, eyeObserver, targetObserver, upObserver);
      
    var Tviewport = mat4.create();
	mat4.fromTranslation(Tviewport,[200,280,0]);
	mat4.scale(Tviewport,Tviewport,[130,-130,130]); 

    context = cameraContext;

    var TprojectionCamera = mat4.create();
    mat4.ortho(TprojectionCamera,-120,120,-120,120,-1,1);

    var TprojectionObserver = mat4.create();
    mat4.ortho(TprojectionObserver,-120,120,-120,120,-1,1);

    var tVP_PROJ_VIEW_Camera = mat4.create();
    mat4.multiply(tVP_PROJ_VIEW_Camera,Tviewport,TprojectionCamera);
    mat4.multiply(tVP_PROJ_VIEW_Camera,tVP_PROJ_VIEW_Camera,TlookAtCamera);
	
    var tVP_PROJ_VIEW_Observer = mat4.create();
    mat4.multiply(tVP_PROJ_VIEW_Observer,Tviewport,TprojectionObserver);
    mat4.multiply(tVP_PROJ_VIEW_Observer,tVP_PROJ_VIEW_Observer,TlookAtObserver);
      

    var Tmodel = mat4.create();
	mat4.fromTranslation(Tmodel,[moveT,0,0]);
 
    var tVP_PROJ_VIEW_MOD_Camera = mat4.create();
	mat4.multiply(tVP_PROJ_VIEW_MOD_Camera, tVP_PROJ_VIEW_Camera, Tmodel);
    var tVP_PROJ_VIEW_MOD1_Observer = mat4.create();
	mat4.multiply(tVP_PROJ_VIEW_MOD1_Observer, tVP_PROJ_VIEW_Observer, Tmodel);
    var tVP_PROJ_VIEW_MOD2_Observer = mat4.create();
    mat4.translate(tVP_PROJ_VIEW_MOD2_Observer, tVP_PROJ_VIEW_Observer, eyeCamera);
	var TlookFromCamera = mat4.create();
    mat4.invert(TlookFromCamera,TlookAtCamera);
    mat4.multiply(tVP_PROJ_VIEW_MOD2_Observer, tVP_PROJ_VIEW_MOD2_Observer, TlookFromCamera);



    context = cameraContext;
	drawTableLeg(tVP_PROJ_VIEW_MOD_Camera,1);
    drawTable(tVP_PROJ_VIEW_MOD_Camera,1);
	var box_to_table = mat4.create();
	mat4.multiply(box_to_table, tVP_PROJ_VIEW_Camera, Tmodel);
	mat4.translate(box_to_table,box_to_table,[moveB,100,20]);
	drawBox(box_to_table);
 
	context = observerContext;
	drawTableLeg(tVP_PROJ_VIEW_MOD1_Observer,1);
    drawTable(tVP_PROJ_VIEW_MOD1_Observer,1); 	
	var box_to_table2 = mat4.create();
	mat4.translate(box_to_table2,tVP_PROJ_VIEW_MOD1_Observer,[moveB,100,20]);
	drawBox(box_to_table2);	
    drawCamera(tVP_PROJ_VIEW_MOD2_Observer,8); 
	
    }
    
  
    slider1.addEventListener("input",draw);
    slider2.addEventListener("input",draw);
	slider3.addEventListener("input",draw);
    draw();
}
window.onload = setup;