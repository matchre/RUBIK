function positionRight(a) {
	return new Array(a[1], a[4], a[2], a[0], a[3], a[5], a[6]);
}

function rotationRight(a) {
	return new Array((a[1]+1) % 3, a[4]-1 < 0 ? 2 : a[4]-1, a[2], a[0]-1 < 0 ? 2 : a[0]-1, (a[3]+1)%3, a[5], a[6]);
}

function positionDown(a) {
	return new Array(a[0], a[2], a[5], a[3], a[1], a[4], a[6]);
}

function rotationDown(a) {
	return new Array(a[0], a[2], a[5], a[3], a[1], a[4], a[6]);
}

function positionBottom(a) {
	return new Array(a[0], a[1], a[2], a[4], a[5], a[6], a[3]);
}

function rotationBottom(a) {
	return new Array(a[0], a[1], a[2], (a[4]+1)%3, a[5]-1<0?2:a[5]-1, (a[6]+1)%3, a[3]-1<0?2:a[3]-1);
}