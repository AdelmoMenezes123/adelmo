const projeto = document.querySelector('#card')

const dados = [{
        id: 1,
        title: 'Z-FLIX',
        img: 'static/img/projetos/zflix.png',
        info: 'Clone da Netflix, Projeto feito a partir de uma live no youtube ministrada por Bonieky Lacerda. ',
        list: '<li>Consumindo API do site TheMoviedatabase.org</li><li>React</li><li>CSS</li>',
        link_projeto: 'https://z-flix.vercel.app/',
        github: 'https://github.com/AdelmoMenezes123/z-flix'

    },
    {
        id: 2,
        title: 'DesenFlix',
        img: 'static/img/projetos/desenflix.png',
        info: 'Desenflix, desenhos, series, animes e filmes, Projeto pessoal criado para aperfeiçoar meus conhecimentos em tecnologias como:',
        list: '<li>HTML</li> <li>CSS</li> <li>JavaScript</li>',
        link_projeto: 'https://desen-flix.vercel.app/',
        github: 'https://github.com/AdelmoMenezes123/DesenFlix'

    },
    {
        id: 3,
        title: 'Proffy-rocktseat',
        img: 'static/img/projetos/proffy.png',
        info: 'Semana Next Level Week 2, OmniStack, envento promovido pela Rocketseat. Foi usado tecnologias como:',
        list: '<li>HTML</li> <li>CSS</li> <li>JavaScript</li>',
        link_projeto: 'https://proffy-rocktseat.vercel.app/',
        github: 'https://github.com/AdelmoMenezes123/Proffy-Rocktseat'

    },
    {
        id: 4,
        title: 'Templete-Flexbox',
        img: 'static/img/projetos/templete-flexbox.png',
        info: 'Projeto de estudo, para aperfeicoar meus conhecimentos em CSS/Flex-box',
        list: '<li>HTML</li> <li>CSS / Flex-Box</li>',
        link_projeto: 'https://templete-flex.vercel.app/',
        github: 'https://github.com/AdelmoMenezes123/templete-flex'

    },
    {
        id: 5,
        title: 'Drogaria',
        img: 'static/img/projetos/JAVA1.png',
        info: 'Trabalho de faculdade, Arquitetura de software, Foi usado tecnologias como:',
        list: '<li>Java</li> <li>Swing</li> <li>SQL / Mysql</li>',
        ink_projeto: '#',
        github: 'https://github.com/AdelmoMenezes123/Sistema_java',

    },
    {
        id: 6,
        title: 'CalculaIMC',
        img: 'static/img/projetos/imc.png',
        info: 'Projeto Calcula IMC',
        list: '<li>HTML</li> <li>CSS</li> <li>JavaScript</li>',
        link_projeto: 'https://calcula-imc.vercel.app',
        github: 'https://github.com/AdelmoMenezes123/calculaIMC',

    },
]

const view = () => {

    dados.forEach(date => {

        const card = document.createElement('div')
        const botoes = document.createElement('div')
        const imgbox = document.createElement('div')
        const img = document.createElement('img')
        const content = document.createElement('div')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        const ul = document.createElement('ul')
        const linkVer = document.createElement('a')
        const linkGit = document.createElement('a')
        const buttonVer = document.createElement('button')
        const buttonGit = document.createElement('button')


        card.setAttribute('class', 'projeto--card')
        imgbox.setAttribute('class', 'imgBox')
        img.setAttribute('src', `${date.img}`)

        content.setAttribute('class', 'projeto--content')
        p.setAttribute('class', 'p')

        h2.innerHTML = `${date.title}`
        p.innerHTML = `${date.info}`
        ul.innerHTML = `${date.list}`

        linkVer.setAttribute('class', 'textoBranco')
        linkGit.setAttribute('class', 'textoBranco')
        linkVer.setAttribute('href', `${date.link_projeto}`)
        linkGit.setAttribute('href', `${date.github}`)
        linkVer.setAttribute('target', 'blank')
        linkGit.setAttribute('target', 'blank')
        linkVer.innerHTML = 'Ver Projeto'
        linkGit.innerHTML = 'Ver Codigo'

        botoes.setAttribute('class', 'botoes')

        buttonVer.setAttribute('class', 'btn btn-primary')
        buttonGit.setAttribute('class', 'btn btn-secondary')





        imgbox.appendChild(img)

        content.appendChild(h2)
        content.appendChild(p)
        content.appendChild(ul)

        buttonVer.appendChild(linkVer)
        buttonGit.appendChild(linkGit)

        botoes.appendChild(buttonVer)
        botoes.appendChild(buttonGit)

        content.appendChild(botoes)

        card.appendChild(imgbox)
        card.appendChild(content)

        projeto.appendChild(card)
    })
}

view();


{
    /*  <div class="projeto--card">
           <div class="imgBox">
                <img src="/static/img/projetos/bymoto.png">
            </div>
            <div class="projeto--content">
                <h2>Card One</h2>
                <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iure corrupti quam sit quis ea amet obcaecati ducimus doloribus ex quos enim et delectus quidem cupiditate, esse optio error nam!
                </p>
           
                <button class="btn btn-primary btn-lg">visitar </button>
                <button class="btn btn-secondary btn-lg">visitar </button>

            </div>
        </div> */
}