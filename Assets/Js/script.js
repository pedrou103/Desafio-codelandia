const projects = [
    {
        link: './Desafio 1/index.html',
        linkImage: './Assets/Images/d01.png',
        titleProject: 'BLOG - Codelândia',
        textProject: 'Esse é o 1º desafio da codelândia e ele consiste na criação da página inicial de notícias.',
    },
    {
        link: './Desafio 2/index.html',
        linkImage: './Assets/Images/d02.png',
        titleProject: 'JordanShoes - Codelândia',
        textProject: 'Esse é o 2º desafio da codelândia e ele consiste na criação de uma página de um e-commerce.',
    },
    {
        link: './Desafio 3/index.html',
        linkImage: './Assets/Images/d03.png',
        titleProject: 'One page - Codelândia',
        textProject: 'Esse é o 3º desafio da codelândia e ele consiste na criação da página do one page.',
    },
    {
        link: './Desafio 4/index.html',
        linkImage: './Assets/Images/d04.png',
        titleProject: 'Login - Codelândia',
        textProject: 'Esse é o 4º desafio da codelândia e ele consiste na criação de uma página de login.',
    },
    {
        link: './Desafio 5/index.html',
        linkImage: './Assets/Images/d05.png',
        titleProject: 'Studio Ghibli - Codelândia',
        textProject: 'Esse é o 5º desafio da codelândia e ele consiste na criação de uma página dos studios ghibli.',
    },
    {
        link: './Desafio 6/index.html',
        linkImage: './Assets/Images/d06.png',
        titleProject: 'Loki - Codelândia',
        textProject: 'Esse é o 6º desafio da codelândia e ele consiste na criação de uma página da série Loki.',
    },
    {
        link: './Desafio 7/index.html',
        linkImage: './Assets/Images/d07.png',
        titleProject: 'Valorant - Codelândia',
        textProject: 'Esse é o 7º desafio da codelândia e ele consiste na criação de uma página do jogo Valorant.',
    },
    {
        link: './Desafio 8/index.html',
        linkImage: './Assets/Images/d08.png',
        titleProject: 'CodeMoji - Codelândia',
        textProject: 'Esse é o 8º desafio da codelândia e ele consiste na criação de uma página de um site de emojis.',
    },
    {
        link: './Desafio 9/index.html',
        linkImage: './Assets/Images/d09.png',
        titleProject: 'Portfólio - Codelândia',
        textProject: 'Esse é o 9º desafio da codelândia e ele consiste na criação de uma página de portfólio.',
    },
    {
        link: './Desafio 10/index.html',
        linkImage: './Assets/Images/d10.png',
        titleProject: 'Naped - Codelândia',
        textProject: 'Esse é o 10º desafio da codelândia e ele consiste na criação da página inicial de notícias do mundo nerd.',
    },
    {
        link: 'https://desafio-codelandia-ten.vercel.app/',
        linkImage: './Assets/Images/d11.png',
        titleProject: 'Memo - Codelândia',
        textProject: 'Esse é o 11º desafio da codelândia e ele consiste na criação de um jogo da memória.',
    },
    {
        link: 'https://desafio12-react.vercel.app/',
        linkImage: './Assets/Images/d12.png',
        titleProject: 'La Pizza - Codelândia',
        textProject: 'Esse é o 12º desafio da codelândia e ele consiste na criação de uma página de uma pizzaria.',
    },
    {
        link: 'https://desafio-codelandia-9ik1.vercel.app/',
        linkImage: './Assets/Images/d16.png',
        titleProject: 'Feliz Natal - Codelândia',
        textProject: 'Esse é o 16º desafio da codelândia e ele consiste na criação de uma página para comemorar o natal.',
    },
];

function createProjects() {
    let div = document.getElementById('projects')

    html = '';
    projects.forEach((element) => {

        html += `
        <div class="card">
            <img class="img-project" src="${element.linkImage}" alt="">
            <h2>${element.titleProject}</h2>
            <p>${element.textProject}</p>
            <a href="${element.link}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                    <path
                        d="M27 19.5V28.5C27 29.2956 26.6839 30.0587 26.1213 30.6213C25.5587 31.1839 24.7956 31.5 24 31.5H7.5C6.70435 31.5 5.94129 31.1839 5.37868 30.6213C4.81607 30.0587 4.5 29.2956 4.5 28.5V12C4.5 11.2044 4.81607 10.4413 5.37868 9.87868C5.94129 9.31607 6.70435 9 7.5 9H16.5"
                        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.5 4.5H31.5V13.5" stroke="black" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M15 21L31.5 4.5" stroke="black" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                Visualizar
            </a>
        </div>
        `;
    }) 
    div.innerHTML = html;

}
createProjects()