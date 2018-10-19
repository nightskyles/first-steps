"use strict"

function toggleButton1() {
	let tab1 = document.getElementById('tab-button1');
	let tab2 = document.getElementById('tab-button2');
	let tab3 = document.getElementById('tab-button3');
	if ( !(tab1.classList.contains('selected')) ) {
		tab1.classList.toggle('selected');
	};
	if ( (tab2.classList.contains('selected')) ) {
		tab2.classList.toggle('selected');
	};
	if ( (tab3.classList.contains('selected')) ) {
		tab3.classList.toggle('selected');
	};
	
}

function toggleButton2() {
	let tab1 = document.getElementById('tab-button1');
	let tab2 = document.getElementById('tab-button2');
	let tab3 = document.getElementById('tab-button3');
	if ( (tab1.classList.contains('selected')) ) {
		tab1.classList.toggle('selected');
	};
	if ( !(tab2.classList.contains('selected')) ) {
		tab2.classList.toggle('selected');
	};
	if ( (tab3.classList.contains('selected')) ) {
		tab3.classList.toggle('selected');
	};
	
}


function toggleButton3() {
	let tab1 = document.getElementById('tab-button1');
	let tab2 = document.getElementById('tab-button2');
	let tab3 = document.getElementById('tab-button3');
	if ( (tab1.classList.contains('selected')) ) {
		tab1.classList.toggle('selected');
	};
	if ( (tab2.classList.contains('selected')) ) {
		tab2.classList.toggle('selected');
	};
	if ( !(tab3.classList.contains('selected')) ) {
		tab3.classList.toggle('selected');
	};
	
}


