const header = document.querySelector('.header');
const menu = document.querySelector('.header__menu');
const overlay = document.querySelector('.header__overlay');


menu.addEventListener('click', (e) => {
  menu.classList.toggle('open');
  header.classList.toggle('open');
  overlay.classList.toggle('open');
});

/// Dark mode ///
let checkbox = document.getElementById('toggle');
let html = document.documentElement;
console.log(html);

checkbox.addEventListener('change', () => {
  transition();
  if (checkbox.checked) {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light')
  }
});

let transition = () => {
  html.classList.add('transition');
  window.setTimeout(() => {
    html.classList.remove('transition');
  }, 1000)
}