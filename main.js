const logo = document.querySelector('.home__logo'),
close = document.querySelector('.home__close'),
menu = document.querySelector('.home__menu');

logo.addEventListener('click', ()=>{
    menu.classList.add('active');
});

close.addEventListener('click', ()=>{
    menu.classList.remove('active');
});

/*--remove menu mobile--*/
const navLink = document.querySelectorAll(".home__link");
  
const linkAction = () => {
  const menu = document.querySelector(".home__menu");
  menu.classList.remove("active");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
