"use strict"

let buttons = document.getElementsByClassName('buttons');
let toggleWrapper = document.querySelector('.tabs-toggle')
toggleWrapper.onclick = function(e) {
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove('selected');
	}
	e.target.classList.add('selected');
};
