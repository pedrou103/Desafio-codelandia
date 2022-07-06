if (window.screen.width < 500) {
    document.getElementById('login').innerText = '';
    document.getElementById('login').classList.add('mobile');
} else {
    document.getElementById('login').innerText = 'fazer login';
}