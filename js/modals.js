const slides = document.querySelectorAll('.swiper-slide');
const modalOverlay = document.querySelector('.modal-overlay');
const closers = document.querySelectorAll('.modal-close')

slides.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
    document.querySelector('body').classList.add('stop-scroll');
  });
});

closers.forEach((el) => {
  el.addEventListener('click', (e) => {
    modalOverlay.classList.remove('modal-overlay--visible');
    document.querySelector('.modal--visible').classList.remove('modal--visible')
    document.querySelector('body').classList.remove('stop-scroll');
  });
});
