const target = document.getElementById('menu');
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById('nav');
  nav.classList.toggle('in');
});

const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const contactModal = document.getElementById('contactModal');
openBtn.addEventListener('click', () => {
  contactModal.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
  contactModal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (!e.target.closest('.contact-modal-inner') && e.target.id !== 'openBtn') {
    contactModal.style.display = 'none';
  };
});

function scrollTop(elem) {
  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
scrollTop('scrollBtn');