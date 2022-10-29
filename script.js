const navHeader = document.querySelector('.nav-header');
const hamburger = document.querySelector('.hamburger');
const cancel = document.querySelector('.cancel');

const toggleNav = () => {
  navHeader.classList.toggle('active');
  hamburger.classList.toggle('active');
  cancel.classList.toggle('active');
}

hamburger.addEventListener('click', () => {
  toggleNav();
});

cancel.addEventListener('click', () => {
  toggleNav();
})