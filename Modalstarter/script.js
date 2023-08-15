'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');
let btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('btn click');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const ClosePopUp = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', ClosePopUp);
overlay.addEventListener('click', ClosePopUp);
document.addEventListener('keydown', function (eventt) {
  if (eventt.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      ClosePopUp();
    }
  }
});
