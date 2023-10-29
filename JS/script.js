/*--------------------MENU-DESPLEGABLE--------------------*/
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
/*--------------------------AOS--------------------------*/
AOS.init({
  easing: 'ease-out-back',
  duration: 1000
});