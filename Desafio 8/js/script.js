if (window.screen.width < 900) {
    document.getElementById('login').innerText = '';
    document.getElementById('login').classList.add('mobile');
} else {
    document.getElementById('login').innerText = 'fazer login';
}