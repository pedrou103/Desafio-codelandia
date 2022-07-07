let theme = document.getElementById('theme');

theme.addEventListener('click', function() {
    let content = document.getElementById('tema').classList.contains('dark');
    
    if (content == true) {
        document.getElementById('tema').classList.remove('dark');  
        document.getElementById('tema').classList.add('light');
    } else {
        document.getElementById('tema').classList.remove('light');  
        document.getElementById('tema').classList.add('dark');
    }
})