const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}
// login form 
let modal = document.getElementById ('myModal');
let btn = document.getElementById ('openModalBtn');
let span = document.getElementsByClassName ('close')[0];
btn.onclick = function (){
	modal.style.display = "block";
}
span.onclick = function () {
	modal.style.display = "none";
}
window.onclick = function (event){
	if (event.target == modal){
		modal.style.display = "none";
	}
}

// reg form
let regModal = document.getElementById ('myRegModal');
let regBtn = document.getElementById ('openRegModalBtn');
let regSpan = document.getElementsByClassName ('regClose')[0];
regBtn.onclick = function (){
	regModal.style.display = "block";
}
regSpan.onclick = function () {
	regModal.style.display = "none";
}
window.onclick = function (event){
	if (event.target == regModal){
		regModal.style.display = "none";
	}
}

let loginBtn = document.getElementById ('login-btn');

