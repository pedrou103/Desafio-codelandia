const btnMenu = document.getElementById('btn-menu');
const navbar = document.querySelector('.menu-links');

btnMenu.onclick = () => {
    console.log('clique')
    navbar.classList.toggle('acionado')
}