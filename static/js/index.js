const container = document.querySelector('#abaCertificados');

var dateCertificado = [{
        id: 1,
        nome: 'Back-end em PHP',
        // https://imgur.com/HgqMm2G.jpg
        imgFrente: 'static/img/certificados/DEV-BACK-PHP.jpg',
        imgFundo: 'static/img/inicio-Certificado/BACK-PHP.png'
    },
    {
        id: 2,
        nome: 'Front-end em Angular',
        imgFrente: 'https://imgur.com/vIHfnkr.jpg',
        imgFundo: 'static/img/inicio-Certificado/ANGULAR.png'
    },
    {
        id: 3,
        nome: 'JavaScript ES6',
        imgFrente: 'https://i.imgur.com/ohY0dl1.jpg',
        imgFundo: 'static/img/inicio-Certificado/JS-ES6.png'
    },
    {
        id: 4,
        nome: 'HTML5 e CSS3',
        imgFrente: 'http://i.imgur.com/XHKwCf5.jpg',
        imgFundo: 'static/img/inicio-Certificado/HTML-e-CSS.png'
    },
    {
        id: 5,
        nome: 'Bootstrap',
        imgFrente: 'http://i.imgur.com/eYhqIJJ.jpg',
        imgFundo: 'static/img/inicio-Certificado/BOOTSTREP.png'
    },
    {
        id: 6,
        nome: 'GitHub',
        imgFrente: 'http://i.imgur.com/RwH7vYS.jpg',
        imgFundo: 'static/img/inicio-Certificado/GITHUB.png'
    },
    {
        id: 7,
        nome: 'Git',
        imgFrente: 'https://i.imgur.com/hTtRKRq.jpg',
        imgFundo: 'static/img/inicio-Certificado/GIT.png'
    },
    {
        id: 8,
        nome: 'SCRUM',
        imgFrente: 'https://imgur.com/02aDNty.jpg',
        imgFundo: 'static/img/inicio-Certificado/SCRUM.png'
    }
]




const gerarCertificados = () => {

    dateCertificado.forEach(data => {
        // VARIAVEIS
        const figure = document.createElement('figure');
        const link = document.createElement('a');
        const span = document.createElement('span');
        const img = document.createElement('img');



        // ADCIONANDO ATRIBUTOS
        figure.setAttribute('class', 'certif'); // atribuindo class no figure
        link.setAttribute('href', `${data.imgFrente}`); // atribuindo href e link para a tag (a)
        link.setAttribute('data-size', '1900x1967'); // atribuindo data-size a tag (a)
        span.setAttribute('class', 'nameTitulo');
        img.setAttribute('class', 'img-fluid');
        img.setAttribute('src', `${data.imgFundo}`);

        //ADICIONANDO CONTEXTO AS TAGS
        span.innerHTML = `${data.nome}`; // colocando valor na tag span

        // ADCIONANDO NOS CONTAINES FILHOS
        link.appendChild(span); //inserindo a tag span dentro de (a)
        link.appendChild(img); //inserindo a tag img dentro de (a)
        figure.appendChild(link); // inserindo a tag (a) dentro de figure

        // ADICIONANDO AO CONTAINER  PAI PARA TER VIZUALIZACAO NO HTML 
        container.appendChild(figure); // inserindo a tag figure dentro do container
    })

}

gerarCertificados();