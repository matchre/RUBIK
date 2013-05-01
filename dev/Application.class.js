function Application() { 	// Thanks to http://stemkoski.github.com/Three.js/
	
	// standard global variables
	this.container;
	this.scene;
	this.camera;
	this.renderer;
	this.controls;
	this.stats;
	this.keyboard = new THREEx.KeyboardState();
	this.clock = new THREE.Clock();

	// custom global variables
	this.rubiks;
	this.world;
}

Application.prototype.init = function(w, h, containerName, queueContainer, goQueue, goSBS) 
{
		// CAMERA & SCENE
	
	this.scene = new THREE.Scene();
	var VIEW_ANGLE = 35, ASPECT = w / h, NEAR = 0.1, FAR = 20000;
	this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
	
	this.scene.add(this.camera);
	this.camera.position.set(-710, 560, 815);
	this.camera.lookAt(this.scene.position);	
	
		// RENDERER
	
	this.renderer = new THREE.WebGLRenderer({antialias:true});
	this.renderer.setSize(w, h);
	this.container = document.getElementById(containerName);
	this.container.appendChild(this.renderer.domElement);
	
		// CONTROLLER

	this.controls = new THREE.TrackballControls(this.camera, this.renderer.domElement);
	
		// LIGHT
	
	var light = new THREE.PointLight(0xffffff);
	light.position.set(0,250,0);
	this.scene.add(light);
	
	var ambientLight = new THREE.AmbientLight(0x111111);
	this.scene.add(ambientLight);
	
		// GEOMETRY
	
	this.rubiks = new Rubik(this.scene, queueContainer, goQueue, goSBS);
	//this.rubiks.shuffle();
	
	/*
	var axes = new THREE.AxisHelper();
	axes.scale.set(3,3,3); 
	this.scene.add(axes);
	// */
	
	/////////
	// SKY //
	/////////
	
	var skyBoxGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
	var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff } );
	var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
	skyBox.flipSided = true;
	this.scene.add(skyBox);
	
	this.scene.fog = new THREE.FogExp2( 0x9999ff, 0.00025 );
}

function animate(app) 
{
    requestAnimationFrame(function(){
		animate(app);
	});
	
	app.render();		
	app.update();
}

Application.prototype.update = function()
{
	this.rubiks.update();
	this.controls.update();
}

Application.prototype.render = function() 
{	
	this.renderer.render(this.scene, this.camera);
}

Application.prototype.getRubik = function() 
{	
	return this.rubiks;
}
