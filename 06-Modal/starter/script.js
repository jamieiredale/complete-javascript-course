'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//Limitations of query selector in that only query selector will be selected
// const btnsOpenModal = document.querySelector('.show-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

//DRY refactoring - creating a function to close the modal rather than repeating the code from Overlay and Close Modal Btn
const closeModal = function () {
  console.log('Button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//For is a loop expression
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
