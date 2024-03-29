
let anoatual = new Date().getFullYear();
document.querySelectorAll('.f3lixcopy').forEach(el=>{
    el.innerHTML = `&copy;${anoatual} F3lixTech. Todos os direitos reservados.`
})



$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
let tags = [];
let projetos = [{
    linkvideo: "https://youtu.be/8Z1GRo7DD2s",
    link: "SimuladoMestre",
    titulo: "Simulado-Mestre",
    descricao: "Sistema para cadastro de perguntas.",
    detalhes: ["Essa é uma das aplicação mais complexas que existe na lista de projetos, possui diversas funcionalidades e foi criada com o objetivo inicial de ajudar nos estudos, treinando alunos para provas com questionários que aparecem com perguntas aleatórias.", "Essa ferramenta possui sistema de login, porém o cadastro é por convite, e apenas usuários com permissão para convidar conseguirão cadastrar novos usuários.", "O acesso às perguntas é feito de uma única vez e salvas em custom states, para evitar muitas consultas ao banco de dados. As respostas também são salvas em custom states para cada vez que o usuário responde. Ao fim do questionário, é possível salvar o desempenho do usuário, após a conferência das respostas.", "Existem outras funcionalidades, como cadastrar perguntas, gerenciar as perguntas, gerenciar os usuários, conferir solicitações de correção de perguntas.", "Foi acrescentada uma conexão API com Google Planilhas e Google Agenda, para visualizar escala de serviço do pessoal que utiliza esse sistema e sincronizar com a agenda de cada um."],
    tags: ["Desktop", "Mobile", "Bubble", "Responsividade", "Banco de dados", "API", "Sistema de Login", "E-mail", "Complexo"],
    qtd_img: 10
},{
    linkvideo: "https://youtu.be/6SbKyBHSH60",
    link: "autoescala",
    titulo: "Auto Escala",
    descricao: "Sistema para criação automática de escala.",
    detalhes: ["Esse sistema de criação de escala automática exigiu um alto nível de lógica e conhecimento em JavaScript, juntamente com CSS, para alcançar 99% de eficácia na criação da escala.", "Para criar a escala, basta inserir os funcionários de acordo com suas competências e, em seguida, cadastrar os turnos com horários e regras previstas. Além disso, é possível adicionar restrições aos usuários, como férias, por exemplo. Você pode definir os dias de feriados e as prioridades dos critérios para a distribuição automática.", "O sistema ainda oferece a opção de exportar a configuração realizada em formato JSON, para ser importada posteriormente, evitando retrabalho. Além disso, é possível exportar a escala pronta em formato CSV."],
    tags: ["Desktop", "Javascript", "Complexo", "CSS", "Upload"],
    qtd_img: 6
},{
    linkvideo: "",
    link: "ListaDeCompras",
    titulo: "Lista de Compras",
    descricao: "Aplicação para criar lista de mercado on-line.",
    detalhes: ["A aplicação de lista de compras desenvolvida em Bubble.io oferece uma maneira fácil e eficiente de gerenciar suas compras. Com a capacidade de salvar itens em um banco de dados, você pode acessar e gerenciar suas listas de compras de qualquer lugar e compartilhá-las com outras pessoas, se necessário.", "Embora nessa versão não seja possível restringir o acesso por usuário, o bubble.io permite facilmente alterar as regras de privacidade. ", "A aplicação permite que você adicione, exclua e edite itens da lista, além de marcar como comprados ou não, para ajudá-lo a acompanhar seus itens de compra em tempo real. Com sua interface amigável e recursos úteis, esta aplicação é uma ferramenta valiosa para quem deseja gerenciar suas compras de forma mais eficiente."],
    tags: ["Desktop", "Mobile", "Bubble", "Banco de dados", "Responsividade"],
    qtd_img: 1
}, {
    linkvideo: "",
    link: "JogoDaVelha",
    titulo: "Jogo da Velha",
    descricao: "Jogo da velha para passar o tempo.",
    detalhes: ['Como plataforma de desenvolvimento visual de aplicativos web, o Bubble.io oferece uma interface intuitiva e fácil de usar para criar jogos como o jogo da velha. É possível usar a ferramenta de design para arrastar e soltar elementos, como botões, campos de texto e caixas de seleção, para criar a interface do jogo e, em seguida, programar a lógica do jogo usando uma interface visual de fluxograma.', 'A criação de um jogo da velha no Bubble.io começa com a criação de uma página em branco e a seleção dos elementos básicos do jogo, como as células do tabuleiro e os botões de reinicialização. Em seguida, o desenvolvedor pode usar o editor de estilo para personalizar a aparência do jogo, como as cores e as fontes utilizadas. Depois disso, a lógica do jogo pode ser programada usando a interface visual de fluxograma, onde as ações e regras do jogo são representadas por blocos lógicos.', 'Um dos principais benefícios do uso do Bubble.io para criar jogos como o jogo da velha é que o processo é altamente visual e interativo, permitindo que os desenvolvedores iterem rapidamente sobre o design e a lógica do jogo. Além disso, a plataforma tem uma grande comunidade de desenvolvedores e uma variedade de recursos de suporte, o que torna o processo de desenvolvimento mais fácil e eficiente.'],
    tags: ["Desktop", "Mobile", "Bubble", "Responsividade"],
    qtd_img: 1
}, {
    linkvideo: "",
    link: "Desenhando",
    titulo: "Desenhando",
    descricao: "Aplicação simplificada de desenho online.",
    detalhes: ['A aplicação "Desenhando" é uma ferramenta que permite ao usuário criar desenhos em um canvas, utilizando as funcionalidades de desenho de mão livre e seleção de cores. A aplicação foi desenvolvida em HTML, CSS e JavaScript.', 'A interface da aplicação é simples e intuitiva, com botões para selecionar a cor e um botão de limpar tela para apagar o desenho atual. Ao selecionar a cor, o usuário pode desenhar na tela com o mouse ou com o dedo em dispositivos móveis.', 'A aplicação é responsiva e se adapta a diferentes tamanhos de tela, permitindo que o usuário desenhe tanto em desktops quanto em dispositivos móveis. O código da aplicação é bastante simples e pode ser facilmente modificado para incluir novas funcionalidades, como a capacidade de salvar desenhos ou desfazer ações.', 'Em suma, a aplicação "Desenhando" é uma ferramenta simples e útil para quem quer criar desenhos em um ambiente digital, porém com algumas limitações. Com sua interface intuitiva e responsividade, é fácil para o usuário se familiarizar e começar a desenhar rapidamente.'],
    tags: ["Desktop", "Mobile", "Javascript"],
    qtd_img: 2
}, {
    linkvideo: "",
    link: "BateriaVirtual",
    titulo: "Bateria Virtual",
    descricao: "Bateria virtual que reproduz som.",
    detalhes: ["Essa página é uma aplicação de bateria virtual, que permite ao usuário tocar diferentes sons de bateria ao pressionar as teclas do teclado correspondentes. A página utiliza HTML, CSS e JavaScript para criar a interface e o comportamento interativo.", "No HTML, há uma estrutura básica da página, com tags que definem os elementos e seu conteúdo, como o cabeçalho com o título da página, a área de botões da bateria e uma área para compor e tocar músicas. O CSS é responsável pela estilização da página, definindo a aparência visual dos elementos, como cores e bordas.", "O JavaScript é responsável pelo comportamento interativo da página, recebendo as ações do usuário e acionando os eventos correspondentes. A cada vez que o usuário pressiona uma tecla do teclado, o JavaScript captura o evento e executa uma função que reproduz o som correspondente. Além disso, há botões para tocar e resetar a composição musical do usuário, que também são implementados com funções em JavaScript. Os sons da bateria são armazenados em arquivos de áudio, que são acessados e reproduzidos por meio de objetos de áudio em JavaScript."],
    tags: ["Desktop", "Mobile", "Javascript", "Áudio", "CSS"],
    qtd_img: 1
}, {
    linkvideo: "",
    link: "Meteorologia",
    titulo: "Meteorologia",
    descricao: "Aplicação para ver condições meteorológicas.",
    detalhes: ["Esta página é uma aplicação web de meteorologia que permite aos usuários buscar informações meteorológicas de uma determinada localidade.", "A página possui um campo de busca para inserir o nome da cidade e um botão para realizar a busca. Os resultados são exibidos na página, incluindo a temperatura, a velocidade do vento e uma imagem que representa as condições meteorológicas.", "A página foi criada usando HTML, CSS e JavaScript, e utiliza conexão API para receber as informações."],
    tags: ["Desktop", "Mobile", "Javascript", "API", "CSS"],
    qtd_img: 3
}, {
    linkvideo: "",
    link: "Quiz",
    titulo: "Quiz",
    descricao: "Sistema de questionário virtual.",
    detalhes: ['Um sistema de questionário virtual é uma aplicação que permite aos usuários responder perguntas em uma plataforma digital. Essa aplicação foi desenvolvida em JS, CSS e HTML. Isso é possível graças à maneira como o sistema foi desenvolvido, usando objetos JavaScript.', 'Com essa aplicação, é possível criar uma variedade de questionários para atender a diferentes necessidades, como questionários de satisfação do cliente, questionários de feedback do usuário ou questionários de pesquisa de mercado. Cada questionário pode conter várias perguntas.', 'A interface do sistema de questionário virtual é projetada para ser fácil de usar e intuitiva. As perguntas são exibidas em uma única página.', 'Graças à sua arquitetura de objeto JavaScript, a aplicação pode receber atualização para obter as perguntas facilmente por meio de APIs. Isso significa que os desenvolvedores podem criar um banco de dados externo de perguntas e conectá-lo ao sistema de questionário virtual para obter perguntas automaticamente. Essa arquitetura também permite que os desenvolvedores adicionem facilmente novas perguntas ou atualizem perguntas existentes.'],
    tags: ["Desktop", "Mobile", "Javascript", "CSS"],
    qtd_img: 2
}, {
    linkvideo: "",
    link: "RelogioAnalogico",
    titulo: "Relógio Analógico",
    descricao: "Design e Matemática para girar os ponteiros.",
    detalhes: ['Uma aplicação em JavaScript, CSS e HTML que mostra um relógio analógico é um excelente exemplo da combinação de matemática e design. A parte mais desafiadora da criação desse tipo de relógio é fazer com que os ponteiros se movam de forma precisa e contínua. Isso é feito utilizando matemática para calcular os ângulos corretos para cada um dos ponteiros.', 'No CSS, os ângulos são definidos para cada ponteiro, usando a propriedade "transform". O valor da propriedade é uma função que especifica o ângulo de rotação do elemento. Isso permite que cada ponteiro seja posicionado corretamente no relógio.', 'Já no JavaScript, o cálculo dos ângulos é feito usando a data e hora atuais. A partir disso, é possível calcular os ângulos para os ponteiros das horas, minutos e segundos. Uma vez que os ângulos são calculados, é possível atualizar as propriedades de "transform" no CSS e fazer com que os ponteiros se movam corretamente.'],
    tags: ["Desktop", "Mobile", "Javascript","CSS"],
    qtd_img: 1
}, {
    linkvideo: "",
    link: "JogoDaVelhaJs",
    titulo: "Jogo da Velha JS",
    descricao: "Demonstração de página com efeito drag and drop.",
    detalhes: ['A aplicação Jogo da Velha é um exemplo de como o JavaScript pode ser utilizado para criar jogos interativos na web. Nessa aplicação, o usuário pode jogar contra si mesmo, alternando entre "X" e "O", ou jogar contra um amigo, utilizando o mesmo dispositivo. O jogo é apresentado em uma interface simples, com um layout de grade 3x3, onde o jogador clica em uma célula vazia para fazer sua jogada.', 'A lógica do jogo foi implementada inteiramente em JavaScript, com o uso de eventos de clique para registrar as jogadas do jogador e uma série de funções para verificar se houve um vencedor ou se houve um empate. O código JavaScript também é responsável por atualizar a interface do jogo em tempo real, mostrando quem é a vez de jogar e exibindo mensagens de vitória, empate ou derrota.', 'A aplicação Jogo da Velha é um ótimo exemplo de como a programação em JavaScript pode ser utilizada para criar jogos interativos na web, e serve como uma excelente base para aqueles que desejam aprender mais sobre a linguagem e sua aplicação em projetos web.'],
    tags: ["Desktop", "Mobile", "Javascript","CSS"],
    qtd_img: 1
}, {
    linkvideo: "",
    link: "PizzariaVirtual",
    titulo: "Pizzaria Virtual",
    descricao: "Demonstração de página com efeito drag and drop.",
    detalhes: ["A interface de uma aplicação para compra de pizza é um excelente exemplo de como o CSS, HTML e JavaScript podem ser combinados para criar uma experiência de usuário agradável e interativa. Com essa aplicação, é possível escolher a quantidade de pizza desejada e adicioná-la ao carrinho, de forma rápida e fácil.", "A interface é simples e intuitiva, com botões e campos de entrada claramente identificados e organizados. O design é atraente e moderno, com cores vibrantes e imagens que fazem com que o usuário se sinta atraído a interagir com a aplicação.", "O uso de JavaScript torna a aplicação ainda mais poderosa, permitindo que o usuário adicione e remova itens do carrinho sem a necessidade de atualizar a página. Isso torna a experiência de compra mais fluida e rápida, proporcionando uma sensação de praticidade e conveniência.", "É importante ressaltar que esta aplicação para compra de pizza é apenas uma demonstração de interface e não possui conexão com um banco de dados real. Portanto, qualquer informação inserida na aplicação não será armazenada ou utilizada para qualquer outro fim."],
    tags: ["Desktop", "Mobile", "Javascript","CSS"],
    qtd_img: 6
}, {
    linkvideo: "",
    link: "UrnaEletronica",
    titulo: "Urna Eletrônica",
    descricao: "Sistema que simula uma Urna Eletrônica.",
    detalhes: [
        "Essa página tem como exemplo uma eleição hipotética para prefeito de uma cidade fictícia. Foram cadastrados quatro candidatos, com seus respectivos números, nomes, partidos e fotos.", "Para simplificar o uso, não foi realizado conexão com banco de dados, mas sim uso de objeto com as informações dos candidatos.", 'Na etapa de "VEREADOR", há dois candidatos cadastrados: "Fulano de Tal" do partido "ABC" com o número "38111" e "Beltrano da Silva" do partido "DEFG" com o número "77222".', 'Na etapa de "PREFEITO", há dois candidatos cadastrados: "Ciclano" do partido "ABC" com o número "99" e "Zulano" do partido "QWERTY" com o número "84". Cada candidato possui um vice, além de suas respectivas fotos e legendas.', 'Para votar, basta clicar nos números correspondentes ao número do candidato que deseja votar. Caso tenha se enganado e digitado um número errado, é possível corrigir o voto clicando no botão "CORRIGE". Caso queira votar em branco, basta clicar no botão "BRANCO" e confirmar o voto.', 'Após a confirmação do voto, a página exibe a próxima etapa de votação, caso haja. Caso contrário, a página exibe uma mensagem de encerramento da votação.'
    ],
    tags: ["Desktop", "Mobile", "Javascript", "CSS", "Áudio"],
    qtd_img: 3
}
]


function nome_projeto(titulo) {

    return (titulo).toLowerCase().replaceAll(" ", "_");
}
function listar_imagens(nome, qtd_img) {
    let imagens = [];
    for (let i = 1; i <= qtd_img; i++) {
        imagens.push("i/projetos/" + nome + " (" + i + ").jpg")
    }
    return imagens;
}

projetos.forEach(projeto => {
    projeto.nome = nome_projeto(projeto.titulo)
    projeto.imagens = listar_imagens(projeto.nome, projeto.qtd_img)
    projeto.tags.forEach(tag => {
        tags.push(tag);
    })
});

tags = [...new Set(tags)].sort();



let lista_projetos = new Vue({
    el: '#projetos',
    data: {
        projetos: projetos,
        tags: tags

    }
});


const projetoitem = document.querySelectorAll('.projetoitem');
let lista_filtro_projeto = [];

document.querySelectorAll(".tagbutton").forEach(el => {

    el.addEventListener('click', () => {
        if (lista_filtro_projeto.includes(el.innerHTML)) {
            lista_filtro_projeto.splice(lista_filtro_projeto.indexOf(el.innerHTML), 1);
            el.classList.remove('badge-primary');
            el.classList.add('badge-dark');
        } else {
            lista_filtro_projeto.push(el.innerHTML);
            el.classList.add('badge-primary');
            el.classList.remove('badge-dark');
        }
        projetoitem.forEach((projeto) => {
            let inclui = [];
            if (lista_filtro_projeto.length === 0) {
                projeto.style.display = 'flex';
            }
            lista_filtro_projeto.forEach(el => {
                if (projeto.textContent.includes(el)) {
                    inclui.push(true)
                } else {
                    inclui.push(false);
                }
                if (!inclui.includes(false)) {
                    projeto.style.display = 'flex';
                } else {
                    projeto.style.display = 'none';
                }
            })
        });
    })
})
const tagsSpan = document.querySelector('.modal-tags');

const imgElem = document.querySelector('.modal-img');

const imgDivElem = document.querySelector('.modal-img-div');
imgDivElem.innerHTML = "";
document.querySelectorAll(".modal-projeto-open").forEach(el => {

    el.addEventListener('click', () => {
        let idcod = el.getAttribute('id');
        let projeto = projetos[idcod];
        let countImg = projeto.imagens.length;

        document.querySelector('.modal-title').innerHTML = projeto.titulo;
        // document.querySelector('.controle-central').setAttribute('id',projeto.nome+idcod)
        document.querySelectorAll('.controlador-carousel').forEach(el => {
            // el.setAttribute('href','#'+projeto.nome+idcod)
            if (countImg <= 1) {
                el.classList.add('d-none');
            } else {
                el.classList.remove('d-none');
            }
        })

        let newimg = "";
        let newDivimg = "";
        document.querySelector('.modal-lista-img').innerHTML = "";


        document.querySelector('.modal-detalhes').innerHTML = '';
        projeto.detalhes.forEach(element => {
            let paragrafroDetalhes = document.createElement('p');
            paragrafroDetalhes.innerHTML = element;
            document.querySelector('.modal-detalhes').appendChild(paragrafroDetalhes);
        });



        (projeto.imagens).map((imagem, index) => {
            // ---- append no div e depois na lista para imagem
            newDivimg = imgDivElem.cloneNode(true);
            newimg = imgElem.cloneNode(true);
            newimg.setAttribute('src', imagem);
            if (index + 1 == 1) {
                newDivimg.classList.add('active');
            }
            newDivimg.append(newimg);
            document.querySelector('.modal-lista-img').append(newDivimg);
        })

        let newtag = "";
        document.querySelector('.modal-lista-tags').innerHTML = "";
        (projeto.tags).map((tag, index) => {
            newtag = tagsSpan.cloneNode(true);
            newtag.innerHTML = tag;
            document.querySelector('.modal-lista-tags').append(newtag);
        })
        if (projeto.linkvideo == "") {
            document.querySelector('.modal-div-video').classList.add('d-none');
        } else {
            document.querySelector('.modal-div-video').classList.remove('d-none');
            document.querySelector('.modal-linkvideo').setAttribute('href', projeto.linkvideo);
        }
        document.querySelector('.modal-testar').setAttribute('href', projeto.link);

    })
})

let filtroProjetos = document.querySelector('.filtrar-projetos');
let listaDeFiltros = document.querySelector('.lista-de-filtros');

filtroProjetos.addEventListener('click', function (ev) {
    if (filtroProjetos.classList.contains('color-main')) {
        listaDeFiltros.classList.remove('d-none');
        filtroProjetos.classList.remove('color-main');
    } else {
        filtroProjetos.classList.add('color-main');
        listaDeFiltros.classList.add('d-none');
        document.querySelectorAll(".tagbutton").forEach(el => {
            el.classList.remove('badge-primary');
            el.classList.add('badge-dark');
            lista_filtro_projeto = [];
            projetoitem.forEach((projeto) => {
                if (lista_filtro_projeto.length === 0) {
                    projeto.style.display = 'flex';
                }
            })
        })
    }
    ev.preventDefault();

})






