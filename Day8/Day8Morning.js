function getFormValues() {
	console.log(
		document.getElementById("first").value + " " + document.getElementById("last").value
		);
}

var newText = document.getElementById("color-div");

function changeColor() {
	newText.classList.add('new-color');
}

var pic = document.getElementById("image");
var backDrop = document.getElementById("lightbox")

function toggleImage() {
	backDrop.classList.add('lightbox-bg');
	backDrop.classList.add('isVisible');
}

function removeImage(){
	backDrop.classList.remove('lightbox-bg');
	backDrop.classList.remove('isVisible');
}
document.getElementById("name-btn").onclick = function() {
	getFormValues();
};

document.getElementById("color-btn").onclick = function(){
	changeColor();
};

document.getElementById("image-btn").onclick = function(){
	toggleImage();
};

document.getElementById("lightbox").onclick = function(){
	removeImage();
};