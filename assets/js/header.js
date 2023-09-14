const burger = document.querySelector('.burger'),
      menu = document.querySelector('.menu'),
      body = document.querySelector('body')


burger.addEventListener('click', () => {
    burger.classList.toggle('clickedBurger');
    menu.classList.toggle("showMenu")
    body.classList.toggle("bodyStopScroll")
});