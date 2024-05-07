const MODAL = document.querySelector('#modal');
const MODALBTN = document.querySelector('.modal-box button');

MODALBTN.addEventListener('click', () => {
    MODAL.classList.toggle('hide');
})