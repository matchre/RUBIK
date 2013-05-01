function Cube(s, i, j, k, N) {
	this.scene = s;
	this.x = i;
	this.y = j;
	this.z = k;
	this.N = N;
	this.mid = N%2 == 0 ? N/2 - .5 : Math.floor(N/2);
	
	this.pos;
	
	this.calcPositions();

	this.render = new THREE.Object3D();
	
	var l = 150;	 // lenght of an edge
	var e = 20;		 // gap between mini-cubes
	var L = (l+e)/2; // shift from center
	
	
		// Colors ...
	var cubeMaterialArray = [];
	var colors = [6];
	for(var i = 0;i<6;++i) colors[i] = 0x777777;
	
	if(this.x == 0) colors[1] = 0xff0000;
	else if(this.x == this.N-1) colors[0] = 0xff4500;
	if(this.y == 0) colors[3] = 0xffff00;
	else if(this.y == this.N-1) colors[2] = 0xffffff;
	if(this.z == 0) colors[5] = 0x006400;
	else if(this.z == this.N-1) colors[4] = 0x0000ff;

	for(var i = 0 ;i<6;++i) cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: colors[i] } ) );
	
	var cubeGeometry = new THREE.CubeGeometry(l, l, l, 5,5,5, cubeMaterialArray);
	
	this.image = new THREE.Mesh( cubeGeometry, new THREE.MeshFaceMaterial() );
	this.image.position.set((this.x-this.N/2)*(l+e) + L, (this.y-this.N/2)*(l+e) + L, (this.z-this.N/2)*(l+e) + L);
	
	this.render.add(this.image);
	this.scene.add(this.render);
}

Cube.prototype.turnPos = function(phi, face) {	// Change positions of the mini-cube
	var x, y, z;

	var cos = Math.round(Math.cos(phi)); // Useless to recalculate this everytime ...
	var sin = Math.round(Math.sin(phi));

		// New coords of mini cubes
	if(face == 1) {
		x = this.x;
		y = cos * (this.y - this.mid) - sin * (this.z - this.mid) + this.mid;
		z = sin * (this.y - this.mid) + cos * (this.z - this.mid) + this.mid;
	}
	else if(face == 2) {
		x = sin * (this.z - this.mid) + cos * (this.x - this.mid) + this.mid;
		y = this.y;
		z = cos * (this.z - this.mid) - sin * (this.x - this.mid) + this.mid;
	}
	else if(face == 3) {
		x = cos * (this.x - this.mid) - sin * (this.y - this.mid) + this.mid;
		y = sin * (this.x - this.mid) + cos * (this.y - this.mid) + this.mid;
		z = this.z;
	}
	
	this.x = x;
	this.y = y;
	this.z = z;
	
	this.calcPositions();
}

Cube.prototype.calcPositions = function() {	// Upadte position (relatively to the cube) of mini-cubes
	this.pos = 0;

	if(this.x == 0) this.pos += 1; 			// Left
	else if(this.x == this.N-1) this.pos += 2;	// Right
	if(this.y == 0) this.pos += 4;			// Down
	else if(this.y == this.N-1) this.pos += 8;	// Up
	if(this.z == 0) this.pos += 16;			// Back
	else if(this.z == this.N-1) this.pos += 32;	// Front
}

Cube.prototype.isPosLeft = function() {
	return this.pos & 1;
}

Cube.prototype.isPosRight = function() {
	return this.pos & 2;
}

Cube.prototype.isPosDown = function() {
	return this.pos & 4;
}

Cube.prototype.isPosUp = function() {
	return this.pos & 8;
}

Cube.prototype.isPosBack = function() {
	return this.pos & 16;
}

Cube.prototype.isPosFront= function() {
	return this.pos & 32;
}

Cube.prototype.getImage = function() {
	return this.image;
}

Cube.prototype.getRender = function() {
	return this.render;
}