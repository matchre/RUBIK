function Rubik(s, queueContainer, goQueue, goSBS) {
	this.N = 2;
	this.nbCube = this.N*this.N*this.N;
	this.scene = s;
	this.queue = new Array();
	this.useQueue = false;
	this.countQueue = 0;
	this.queueContainer = queueContainer;
	this.goQueue = goQueue;
	this.goSBS = goSBS;
	this.codagePosition = new Array(0,1,2,3,4,5,6);
	this.codageRotation = new Array(0,0,0,0,0,0,0);
	
	this.action;		// Rotation object
	
	var nbCount = 0;
	
	this.cubes = [this.nbCube];
	this.count = [6];

	for(i = 0;i<this.N;++i) {
		for(j = 0;j<this.N;++j) {
			for(k = 0;k<this.N;++k) {
				this.cubes[nbCount++] = new Cube(s, i, j, k, this.N);
			}
		}
	}	
}

Rubik.prototype.updatePos = function(face, angle) // Update the P = (p1, p2, p3, p4, p5, p6, p7, o1, o2, o3, o4, o5, o6, o7) vector
{
	if(face == 1 && angle < -3) {	// R2
		this.actionRight();
		this.actionRight();
	}
	else if(face == 1 && angle < 0) {	// R
		this.actionRight();
		
	}
	else if(face == 1 && angle > 0) {	// R-1
		this.actionRight();
		this.actionRight();
		this.actionRight();
	}
	else if(face == 2 && angle > 3) {	// D2
		this.actionDown();
		this.actionDown();
	}
	else if(face == 2 && angle > 0) {	// D
		this.actionDown();
	}
	else if(face == 2 && angle < 0) {	// D-1
		this.actionDown();
		this.actionDown();
		this.actionDown();
	}
	else if(face == 3 && angle > 3) {	// B2
		this.actionBottom();
		this.actionBottom();
	}
	else if(face == 3 && angle > 0) {	// B
		this.actionBottom();
	}
	else if(face == 3 && angle < 0) {	// B-1
		this.actionBottom();
		this.actionBottom();
		this.actionBottom();
	}
}

Rubik.prototype.actionRight = function()	// Turn right the P vector
{
	this.codagePosition = positionRight(this.codagePosition);
	this.codageRotation = rotationRight(this.codageRotation);
}

Rubik.prototype.actionDown = function()	// Turn down the P vector
{
	this.codagePosition = positionDown(this.codagePosition);
	this.codageRotation = rotationDown(this.codageRotation);
}

Rubik.prototype.actionBottom = function()	// Turn bottom the P vector
{
	this.codagePosition = positionBottom(this.codagePosition);
	this.codageRotation = rotationBottom(this.codageRotation);
}

Rubik.prototype.calcN = function(a, r) {	// Calculate the index of the current position
	var n1, n2;
	var d = new Array();
	
	var c = a.slice(0);
	
	for(var i=0;i<6;++i) {
		var j = i;
		while(c[j] != i) j++;

		c[j] = c[i];
		c[i] = i;
		
		d[i] = j-i;
	}
	
	n1 = d[5] + 2 * (d[4] + 3 * (d[3] + 4 * (d[2] + 5 * (d[1] + 6 * d[0]))));
	n2 = r[0] + 3 * (r[1] + 3 * (r[2] + 3 * (r[3] + 3 * (r[4] + 3 * r[5]))));
	
	return n1 * 729 + n2;
}

Rubik.prototype.getValue = function(index) {	// Get value associated to the index found
	var n = indexTable.charCodeAt(Math.floor(index/4));
	
	if(n == 125) n = 92;
	
	n -= 35;
	
	var div = 27, diff = index % 4;
	
	var k = 0;
	while(k < diff) {
		k++;
		n -= (Math.floor(n/div) * div);
		div /= 3 ;
	}
	
	return Math.floor(n / div);
}

Rubik.prototype.update = function() {	// Move the cube if requested
	if(this.action) {
		this.action.turn();
		if(this.action.isOver()) this.action = null;
	}
	else if(this.useQueue && this.queue[0]) {
		this.action = this.queue[0];
		
		if(this.displayQueue) { // the queue is displayed => interaction
			if(this.countQueue > 0) $('#'+this.queueContainer+'_'+(this.countQueue-1)).css({'color' : 'black'});
			$('#'+this.queueContainer+'_'+this.countQueue).css({'color' : 'red'});
			
			++this.countQueue;
		}
		
		this.queue.splice(0,1);
	}
	else if(this.useQueue) {
		this.clearQueue();
	}
}

Rubik.prototype.nextStep = function() {		// Go to next step
	if(!this.action && !this.useQueue && this.queue[0]) {
		this.action = this.queue[0];
		
		if(this.displayQueue) { // the queue is displayed => interaction
			if(this.countQueue > 0) $('#'+this.queueContainer+'_'+(this.countQueue-1)).css({'color' : 'black'});
			$('#'+this.queueContainer+'_'+this.countQueue).css({'color' : 'red'});
			
			++this.countQueue;
		}
		
		this.queue.splice(0,1);
		
		if(!this.queue[0]) this.clearQueue();
	}
}

Rubik.prototype.solve = function() {	// Solve the cube
	if(this.queue) this.clearQueue();

	var c = this.codagePosition.slice(0);
	var r = this.codageRotation.slice(0);
	
	var currentIndex = this.calcN(c, r);
	var currentValue = this.getValue(currentIndex);

	var a, b, tempIndex, tempValue;

	var liste = this.codagePosition+" "+this.codageRotation+" "+currentIndex+" "+currentValue+" ---- ";
	var k = 0;
	while(currentIndex != 0 && k++ < 50) { // the loop reaches the end in less than 11 moves
		for(var i=0;i<9;++i) {
			if(i == 0) { // R
				a = positionRight(c);
				b = rotationRight(r);
				tempIndex = this.calcN(a, b);
				tempValue = this.getValue(tempIndex);
				if(tempValue == (currentValue-1 >= 0 ? currentValue-1 : 2)) {
					c = a;
					r = b;
					currentIndex = tempIndex;
					currentValue = tempValue;
					this.add2Queue(1, -90, 0.05, true);
					break;
				}
			}
			else if(i == 1) { // R2
				a = positionRight(positionRight(c));
				b = rotationRight(rotationRight(r));
				tempIndex = this.calcN(a, b);
				tempValue = this.getValue(tempIndex);
				if(tempValue == (currentValue-1 >= 0 ? currentValue-1 : 2)) {
					c = a;
					r = b;
					currentIndex = tempIndex;
					currentValue = tempValue;
					this.add2Queue(1, -180, 0.05, true);
					break;
				}
			}
			else if(i == 2) { // R-1
				a = positionRight(positionRight(positionRight(c)));
				b = rotationRight(rotationRight(rotationRight(r)));
				tempIndex = this.calcN(a, b);
				tempValue = this.getValue(tempIndex);
				if(tempValue == (currentValue-1 >= 0 ? currentValue-1 : 2)) {
					c = a;
					r = b;
					currentIndex = tempIndex;
					currentValue = tempValue;
					this.add2Queue(1, 90, 0.05, true);
					break;
				}
			}
			else if(i == 3) { // D
				a = positionDown(c);
				b = rotationDown(r);
				tempIndex = this.calcN(a, b);
				tempValue = this.getValue(tempIndex);
				if(tempValue == (currentValue-1 >= 0 ? currentValue-1 : 2)) {
					c = a;
					r = b;
					currentIndex = tempIndex;
					currentValue = tempValue;
					this.add2Queue(2, 90, 0.05, true);
					break;
				}
			}
			else if(i == 4) { // D2
				a = positionDown(positionDown(c));
				b = rotationDown(rotationDown(r));
				tempIndex = this.calcN(a, b);
				tempValue = this.getValue(tempIndex);
				if(tempValue == (currentValue-1 >= 0 ? currentValue-1 : 2)) {
					c = a;
					r = b;
					currentIndex = tempIndex;
					currentValue = tempValue;
					this.add2Queue(2, 180, 0.05, true);
					break;
				}
			}
			else if(i == 5) { // D-1
				a = positionDown(positionDown(positionDown(c)));
				b = rotationDown(rotationDown(rotationDown(r)));
				tempIndex = this.calcN(a, b);
				tempValue = this.getValue(tempIndex);
				if(tempValue == (currentValue-1 >= 0 ? currentValue-1 : 2)) {
					c = a;
					r = b;
					currentIndex = tempIndex;
					currentValue = tempValue;
					this.add2Queue(2, -90, 0.05, true);
					break;
				}
			}
			else if(i == 6) { // B
				a = positionBottom(c);
				b = rotationBottom(r);
				tempIndex = this.calcN(a, b);
				tempValue = this.getValue(tempIndex);
				if(tempValue == (currentValue-1 >= 0 ? currentValue-1 : 2)) {
					c = a;
					r = b;
					currentIndex = tempIndex;
					currentValue = tempValue;
					this.add2Queue(3, 90, 0.05, true);
					break;
				}
			}
			else if(i == 7) { // B2
				a = positionBottom(positionBottom(c));
				b = rotationBottom(rotationBottom(r));
				tempIndex = this.calcN(a, b);
				tempValue = this.getValue(tempIndex);
				if(tempValue == (currentValue-1 >= 0 ? currentValue-1 : 2)) {
					c = a;
					r = b;
					currentIndex = tempIndex;
					currentValue = tempValue;
					this.add2Queue(3, 180, 0.05, true);
					break;
				}
			}
			else if(i == 8) { // B-1
				a = positionBottom(positionBottom(positionBottom(c)));
				b = rotationBottom(rotationBottom(rotationBottom(r)));
				tempIndex = this.calcN(a, b);
				tempValue = this.getValue(tempIndex);
				if(tempValue == (currentValue-1 >= 0 ? currentValue-1 : 2)) {
					c = a;
					r = b;
					currentIndex = tempIndex;
					currentValue = tempValue;
					this.add2Queue(3, -90, 0.05, true);
					break;
				}
			}
		}
	}
}

Rubik.prototype.clearQueue = function() {	// Clear the queue
	this.queue = new Array();
	this.useQueue = false;
	$('#'+this.goQueue).css({'color' : 'grey'});
	$('#'+this.goSBS).css({'color' : 'grey'});
	$('#'+this.queueContainer).html('');
	
	this.countQueue = 0;
}

Rubik.prototype.processQueue = function() {	// Say that the queue can be used
	this.useQueue = true;
}

Rubik.prototype.shuffle = function() {	// Shuffle the cube
	if(this.queue) this.clearQueue(); // reset the queue before anything else
	
	this.displayQueue = false;
	var rand1 = 15 + Math.random()*20;
	
	for(var i = 0;i<rand1;++i) {
		this.add2Queue(1 + Math.floor(Math.random()*3), 90, 0.5);
	}
	
	this.useQueue = true;
}

Rubik.prototype.bigShuffle = function() {	// Shuffle the cube for 2nd application
	if(this.queue) this.clearQueue(); // reset the queue before anything else
	
	this.displayQueue = false;
	var rand1 = 5000;
	
	for(var i = 0;i<rand1;++i) {
		this.add2Queue(1 + Math.floor(Math.random()*3), 90, 0.04);
	}
	
	this.useQueue = true;
}

Rubik.prototype.stopShuffle = function() {	// Stop shuffling the cube for 2nd application
	if(this.queue) this.clearQueue();
}

Rubik.prototype.add2Queue = function(action, angle, speed, display) {	// Add event to the queue
	var axis;
	
	if(display) {
		$('#'+this.goQueue).css({'color':'black'});
		$('#'+this.goSBS).css({'color':'black'});
		
		this.displayQueue = true;
		
		var rot;
		
		if(action == 1 && angle == -90) rot = 'R';
		else if(action == 1 && angle == -180) rot = 'R<sup>2</sup>';
		else if(action == 1 && angle == 90) rot = 'R<sup>-1</sup>';
		else if(action == 2 && angle == 90) rot = 'D';
		else if(action == 2 && angle == 180) rot = 'D<sup>2</sup>';
		else if(action == 2 && angle == -90) rot = 'D<sup>-1</sup>';
		else if(action == 3 && angle == 90) rot = 'B';
		else if(action == 3 && angle == 180) rot = 'B<sup>2</sup>';
		else if(action == 3 && angle == -90) rot = 'B<sup>-1</sup>';

		$('#'+this.queueContainer).append('<span id="'+this.queueContainer+'_'+this.queue.length+'">'+rot+' </span>');
	}
	
	if(action == 1) axis = new THREE.Vector3(1, 0, 0);
	else if(action == 2) axis = new THREE.Vector3(0, 1, 0);
	else axis = new THREE.Vector3(0, 0, 1);
	
	this.queue[this.queue.length] = new Action(this.cubes, this, axis, (angle*Math.PI)/180, action, speed);
}

Rubik.prototype.getCubes = function() {
	return this.cubes;
}

Rubik.prototype.getCube = function(id) {
	return this.cubes[id];
}

Rubik.prototype.turnRight = function(angle, speed, queue)	// Turn right
{
	if(queue && !this.useQueue) this.add2Queue(1, angle, speed, true);
	else if(!this.action && !this.useQueue) {
		var axis = new THREE.Vector3(1, 0, 0);
		this.action = new Action(this.cubes, this, axis, (angle*Math.PI)/180, 1, speed);
	}
}

Rubik.prototype.turnDown = function(angle, speed, queue)	// Turn down
{
	if(queue && !this.useQueue) this.add2Queue(2, angle, speed, true);
	else if(!this.action && !this.useQueue) {
		var axis = new THREE.Vector3(0, 1, 0);
		this.action = new Action(this.cubes, this, axis, (angle*Math.PI)/180, 2, speed);
	}
}

Rubik.prototype.turnBack = function(angle, speed, queue)	// Turn bottom
{
	if(queue && !this.useQueue) this.add2Queue(3, angle, speed, true);
	else if(!this.action && !this.useQueue) {
		var axis = new THREE.Vector3(0, 0, 1);
		this.action = new Action(this.cubes, this, axis, (angle*Math.PI)/180, 3, speed);
	}
}