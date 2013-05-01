function Action(cubes, rubik, axis, delta, face, speed) {
	this.cubes = cubes;
	this.rubik = rubik;
	this.axis = axis;
	this.delta = Math.abs(delta);
	this.angleIni = delta;
	this.face = face;
	this.speed = speed;
	this.way = delta > 0;		// Way to turn (1 : Clockwise ; 0 : counterclockwise)
}

function rotateAroundWorldAxis(object, axis, radians) { // Thanks to http://stackoverflow.com/a/11060965/1781051
    var rotWorldMatrix = new THREE.Matrix4();
    rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
    rotWorldMatrix.multiplySelf(object.matrix);
    object.matrix = rotWorldMatrix;
    object.rotation.getRotationFromMatrix(object.matrix, object.scale);
}

Action.prototype.turn = function() {	// Does a rotation
	var alpha = this.speed;
	var i;
	
	if(this.delta - alpha <= 0) alpha = this.delta;
	this.delta -= alpha;
	
	if(!this.way) alpha = -alpha;

	if(this.face == 1) this.turnRight(alpha);
	else if(this.face == 2) this.turnDown(alpha);
	else if(this.face == 3) this.turnBack(alpha);
	
	if(this.isOver()) { // if it's over, refresh of every cube which has turned
		//alert(this.rubik.codagePosition+" "+this.rubik.codageRotation);
		this.rubik.updatePos(this.face, this.angleIni);
		//alert(this.rubik.codagePosition+" "+this.rubik.codageRotation);
		if(this.face == 1) {
			for(i=0;i<this.cubes.length;++i) 
				if(this.cubes[i].isPosRight()) 
					this.cubes[i].turnPos(this.angleIni, this.face);
		}
		else if(this.face == 2) {
			for(i=0;i<this.cubes.length;++i) 
				if(this.cubes[i].isPosDown()) 
					this.cubes[i].turnPos(this.angleIni, this.face);
		}
		else if(this.face == 3) {
			for(i=0;i<this.cubes.length;++i) 
				if(this.cubes[i].isPosBack()) 
					this.cubes[i].turnPos(this.angleIni, this.face);
		}
	}
}

Action.prototype.isOver = function(alpha) {
	return this.delta <= 0;
}

Action.prototype.turnRight = function(alpha) {	// Turn the cube in 3D
	for(var i=0;i<this.cubes.length;++i) {
		if(this.cubes[i].isPosRight()) rotateAroundWorldAxis(this.cubes[i].getRender(), this.axis, alpha);
	}
}

Action.prototype.turnDown = function(alpha) {	// Turn the cube in 3D
	for(var i=0;i<this.cubes.length;++i) {
		if(this.cubes[i].isPosDown()) rotateAroundWorldAxis(this.cubes[i].getRender(), this.axis, alpha);
	}
}

Action.prototype.turnBack = function(alpha) {	// Turn the cube in 3D
	for(var i=0;i<this.cubes.length;++i) {
		if(this.cubes[i].isPosBack()) rotateAroundWorldAxis(this.cubes[i].getRender(), this.axis, alpha);
	}
}