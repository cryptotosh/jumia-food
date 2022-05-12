const hamburger = document.getElementById('hamburger'),
navbar = document.querySelector('.navbar-mobile');

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('show');
});