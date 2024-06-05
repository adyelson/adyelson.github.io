// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// (c) Todos os direitos reservados. 2022
//
// Adyelson Felix Loureiro
//
// f3lixtech@f3lixtech.com 
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
let startArea = document.querySelector('.startArea');
let workerInsertArea = document.querySelector('.workerInsertArea');
let shiftInsertArea = document.querySelector('.shiftInsertArea');
let shiftArea = document.querySelector('.shiftArea');

let workerInsertAreaButton = document.querySelector('.workerInsertAreaButton');
let shiftInsertAreaButton = document.querySelector('.shiftInsertAreaButton');
let shiftAreaButton = document.querySelector('.shiftAreaButton');
let startAreaButton = document.querySelector('.startAreaButton');

startAreaButton.addEventListener('click',()=>{
	startAreaButton.classList.add('show');
	startArea.classList.remove('hide');
	
	shiftArea.classList.add('hide');
	workerInsertArea.classList.add('hide');
	shiftInsertArea.classList.add('hide');
	
	shiftAreaButton.classList.remove('show');
	workerInsertAreaButton.classList.remove('show');
	shiftInsertAreaButton.classList.remove('show');

});

shiftAreaButton.addEventListener('click',()=>{
	shiftAreaButton.classList.add('show');
	shiftArea.classList.remove('hide');

	startArea.classList.add('hide');
	workerInsertArea.classList.add('hide');
	shiftInsertArea.classList.add('hide');

	workerInsertAreaButton.classList.remove('show');
	shiftInsertAreaButton.classList.remove('show');
	startAreaButton.classList.remove('show');

});

workerInsertAreaButton.addEventListener('click',()=>{
	workerInsertAreaButton.classList.add('show');
	workerInsertArea.classList.remove('hide');

	startArea.classList.add('hide');
	shiftInsertArea.classList.add('hide');
	shiftArea.classList.add('hide');

	shiftAreaButton.classList.remove('show');
	shiftInsertAreaButton.classList.remove('show');
	startAreaButton.classList.remove('show');

});

shiftInsertAreaButton.addEventListener('click',()=>{
	shiftInsertAreaButton.classList.add('show');
	shiftInsertArea.classList.remove('hide');

	startArea.classList.add('hide');
	workerInsertArea.classList.add('hide');
	shiftArea.classList.add('hide');

	shiftAreaButton.classList.remove('show');
	workerInsertAreaButton.classList.remove('show');
	startAreaButton.classList.remove('show');

});


