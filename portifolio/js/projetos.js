let anoatual = new Date().getFullYear();
document.querySelectorAll(".f3lixcopy").forEach((el) => {
  if (pagelanguage == "br") {
    el.innerHTML = `&copy;${anoatual} F3lixTech. Todos os direitos reservados.`;
  } else {
    el.innerHTML = `&copy;${anoatual} F3lixTech. All rights reserved.`;
  }
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
let tags = [];
let projetos = [
  {
    linkvideo: "",
    link: {
      en: "https://casher.app.br/",
      br: "https://casher.app.br/",
    },
    titulo: {
      en: "Casher",
      br: "Casher",
    },
    descricao: {
      en: "Coupon system to receive discounts.",
      br: "Sistema de cupons para receber descontos.",
    },
    detalhes: {
      en: [
        "Complete coupon system with authentication, store campaign listings for point use to earn discounts.",
      ],
      br: [
        "Sistema completo de cupons com sistema de autenticação, listagem de campanhas de lojas para uso de pontos para ganho de desconto.",
      ],
    },
    tags: {
      en: [
        "Desktop",
        "Mobile",
        "Bubble",
        "Responsiveness",
        "Database",
        "API",
        "Login System",
        "Email",
        "Complex",
      ],
      br: [
        "Desktop",
        "Mobile",
        "Bubble",
        "Responsividade",
        "Banco de dados",
        "API",
        "Sistema de Login",
        "E-mail",
        "Complexo",
      ],
    },
    qtd_img: 3,
  },
  {
    linkvideo: "https://youtu.be/8Z1GRo7DD2s",
    link: {
      en: "../projetos/simuladomestre/?en",
      br: "../projetos/simuladomestre/?br",
    },
    titulo: {
      en: "Mock Exam",
      br: "Simulado-Mestre",
    },
    descricao: {
      en: "System for registering questions.",
      br: "Sistema para cadastro de perguntas.",
    },
    detalhes: {
      en: [
        "This is one of the most complex applications on the project list, with various features created to help with studies, training students for exams with questionnaires that appear with random questions.",
        "This tool has a login system, but registration is by invitation, and only users with permission to invite can register new users.",
        "Access to the questions is done all at once and saved in custom states to avoid too many database queries. The answers are also saved in custom states each time the user responds. At the end of the questionnaire, it is possible to save the user's performance after checking the answers.",
        "There are other features, such as registering questions, managing questions, managing users, and checking correction requests.",
        "An API connection with Google Sheets and Google Calendar was added to view the service schedule of the staff using this system and sync with each one's calendar.",
      ],
      br: [
        "Essa é uma das aplicação mais complexas que existe na lista de projetos, possui diversas funcionalidades e foi criada com o objetivo inicial de ajudar nos estudos, treinando alunos para provas com questionários que aparecem com perguntas aleatórias.",
        "Essa ferramenta possui sistema de login, porém o cadastro é por convite, e apenas usuários com permissão para convidar conseguirão cadastrar novos usuários.",
        "O acesso às perguntas é feito de uma única vez e salvas em custom states, para evitar muitas consultas ao banco de dados. As respostas também são salvas em custom states para cada vez que o usuário responde. Ao fim do questionário, é possível salvar o desempenho do usuário, após a conferência das respostas.",
        "Existem outras funcionalidades, como cadastrar perguntas, gerenciar as perguntas, gerenciar os usuários, conferir solicitações de correção de perguntas.",
        "Foi acrescentada uma conexão API com Google Planilhas e Google Agenda, para visualizar escala de serviço do pessoal que utiliza esse sistema e sincronizar com a agenda de cada um.",
      ],
    },
    tags: {
      en: [
        "Desktop",
        "Mobile",
        "Bubble",
        "Responsiveness",
        "Database",
        "API",
        "Login System",
        "Email",
        "Complex",
      ],
      br: [
        "Desktop",
        "Mobile",
        "Bubble",
        "Responsividade",
        "Banco de dados",
        "API",
        "Sistema de Login",
        "E-mail",
        "Complexo",
      ],
    },
    qtd_img: 11,
  },
  {
    linkvideo: "https://youtu.be/6SbKyBHSH60",
    link: {
      en: "../ferramentas/autoescala/?en",
      br: "../ferramentas/autoescala/?br",
    },
    titulo: {
      en: "Automatic Service Scheduling",
      br: "Auto Escala",
    },
    descricao: {
      en: "System for automatic scheduling creation.",
      br: "Sistema para criação automática de escala.",
    },
    detalhes: {
      en: [
        "This automatic scheduling creation system required a high level of logic and knowledge in JavaScript, along with CSS, to achieve 99% effectiveness in schedule creation.",
        "To create the schedule, just enter the employees according to their skills and then register the shifts with the scheduled hours and rules. Additionally, it is possible to add restrictions to the users, such as vacations. You can define the holidays and the priorities of the criteria for automatic distribution.",
        "The system also offers the option to export the configuration made in JSON format, to be imported later, avoiding rework. Moreover, it is possible to export the ready schedule in CSV format.",
      ],
      br: [
        "Esse sistema de criação de escala automática exigiu um alto nível de lógica e conhecimento em JavaScript, juntamente com CSS, para alcançar 99% de eficácia na criação da escala.",
        "Para criar a escala, basta inserir os funcionários de acordo com suas competências e, em seguida, cadastrar os turnos com horários e regras previstas. Além disso, é possível adicionar restrições aos usuários, como férias, por exemplo. Você pode definir os dias de feriados e as prioridades dos critérios para a distribuição automática.",
        "O sistema ainda oferece a opção de exportar a configuração realizada em formato JSON, para ser importada posteriormente, evitando retrabalho. Além disso, é possível exportar a escala pronta em formato CSV.",
      ],
    },
    tags: {
      en: ["Desktop", "Javascript", "Complex", "CSS", "Upload"],
      br: ["Desktop", "Javascript", "Complexo", "CSS", "Upload"],
    },
    qtd_img: 6,
  },
  {
    linkvideo: "",
    link: {
      en: "../projetos/listadecompras/?en",
      br: "../projetos/listadecompras/?br",
    },
    titulo: {
      en: "Shopping List",
      br: "Lista de Compras",
    },
    descricao: {
      en: "Application to create an online shopping list.",
      br: "Aplicação para criar lista de mercado on-line.",
    },
    detalhes: {
      en: [
        "The shopping list application developed in Bubble.io offers an easy and efficient way to manage your shopping. With the ability to save items in a database, you can access and manage your shopping lists from anywhere and share them with others if needed.",
        "Although this version does not allow restricting access by user, Bubble.io easily allows changing privacy rules.",
        "The application allows you to add, delete, and edit items on the list, as well as mark them as purchased or not, to help you keep track of your shopping items in real-time. With its user-friendly interface and useful features, this application is a valuable tool for anyone looking to manage their shopping more efficiently.",
      ],
      br: [
        "A aplicação de lista de compras desenvolvida em Bubble.io oferece uma maneira fácil e eficiente de gerenciar suas compras. Com a capacidade de salvar itens em um banco de dados, você pode acessar e gerenciar suas listas de compras de qualquer lugar e compartilhá-las com outras pessoas, se necessário.",
        "Embora nessa versão não seja possível restringir o acesso por usuário, o bubble.io permite facilmente alterar as regras de privacidade.",
        "A aplicação permite que você adicione, exclua e edite itens da lista, além de marcar como comprados ou não, para ajudá-lo a acompanhar seus itens de compra em tempo real. Com sua interface amigável e recursos úteis, esta aplicação é uma ferramenta valiosa para quem deseja gerenciar suas compras de forma mais eficiente.",
      ],
    },
    tags: {
      en: ["Desktop", "Mobile", "Bubble", "Database", "Responsiveness"],
      br: ["Desktop", "Mobile", "Bubble", "Banco de dados", "Responsiveness"],
    },
    qtd_img: 1,
  },
  {
    linkvideo: "",
    link: {
      en: "../projetos/jogodavelha/?en",
      br: "../projetos/jogodavelha/?br",
    },
    titulo: {
      en: "Tic-Tac-Toe",
      br: "Jogo da Velha",
    },
    descricao: {
      en: "Classic tic-tac-toe game implementation.",
      br: "Implementação do clássico jogo da velha.",
    },
    detalhes: {
      en: [
        "This is a simple implementation of the classic tic-tac-toe game. It allows two players to play against each other on the same device, taking turns to place their symbols (X or O) on a 3x3 grid. The first player to align three of their symbols horizontally, vertically, or diagonally wins the game.",
        "The game keeps track of the score between rounds and allows players to reset the board to start a new game.",
      ],
      br: [
        "Essa é uma implementação simples do clássico jogo da velha. Permite que dois jogadores joguem entre si no mesmo dispositivo, alternando para colocar seus símbolos (X ou O) em uma grade 3x3. O primeiro jogador a alinhar três de seus símbolos horizontal, vertical ou diagonalmente vence o jogo.",
        "O jogo mantém o controle da pontuação entre as rodadas e permite que os jogadores reiniciem o tabuleiro para começar um novo jogo.",
      ],
    },
    tags: {
      en: ["Desktop", "Mobile", "Javascript", "Game", "Multiplayer"],
      br: ["Desktop", "Mobile", "Javascript", "Jogo", "Multiplayer"],
    },
    qtd_img: 1,
  },
  {
    linkvideo: "https://youtu.be/mDpEqoXxSqA",
    link: {
      en: "../projetos/desenhando/?en",
      br: "../projetos/desenhando/?br",
    },
    titulo: {
      en: "Drawing",
      br: "Desenhando",
    },
    descricao: {
      en: "Application for drawing and painting.",
      br: "Aplicação para desenhar e pintar.",
    },
    detalhes: {
      en: [
        "Drawing is an application developed for artistic expression through digital drawing and painting. It provides a range of tools such as brushes, colors, and erasers to create digital art.",
        "Users can save their creations locally or share them online. The application supports various file formats for saving and exporting artwork.",
      ],
      br: [
        "Desenhando é uma aplicação desenvolvida para expressão artística por meio de desenho e pintura digital. Ela oferece uma variedade de ferramentas como pincéis, cores e borrachas para criar arte digital.",
        "Os usuários podem salvar suas criações localmente ou compartilhá-las online. A aplicação suporta diversos formatos de arquivo para salvar e exportar as obras de arte.",
      ],
    },
    tags: {
      en: ["Desktop", "Drawing", "Painting", "Tools"],
      br: ["Desktop", "Desenho", "Pintura", "Ferramentas"],
    },
    qtd_img: 2,
  },
  {
    linkvideo: "https://youtu.be/D4TkG1i_xX8",
    link: {
      en: "../projetos/bateriavirtual/?en",
      br: "../projetos/bateriavirtual/?br",
    },
    titulo: {
      en: "Virtual Drums",
      br: "Bateria Virtual",
    },
    descricao: {
      en: "Virtual drums simulator.",
      br: "Simulador de bateria virtual.",
    },
    detalhes: {
      en: [
        "Virtual Drums is a fun and interactive application that simulates playing a drum set. Users can play various drum sounds by tapping on the virtual drums displayed on the screen.",
        "The application provides a realistic drumming experience with responsive sounds based on touch interactions. It's a great tool for drum enthusiasts or anyone looking to have some musical fun.",
      ],
      br: [
        "Bateria Virtual é uma aplicação divertida e interativa que simula tocar uma bateria. Os usuários podem reproduzir vários sons de bateria ao tocar nas baterias virtuais exibidas na tela.",
        "A aplicação proporciona uma experiência realista de bateria com sons responsivos com base em interações de toque. É uma ótima ferramenta para entusiastas de bateria ou qualquer pessoa que queira se divertir com música.",
      ],
    },
    tags: {
      en: ["Desktop", "Music", "Simulation", "Interactive"],
      br: ["Desktop", "Música", "Simulação", "Interativo"],
    },
    qtd_img: 1,
  },
  {
    linkvideo: "",
    link: {
      en: "../projetos/meteorologia/?en",
      br: "../projetos/meteorologia/?br",
    },
    titulo: {
      en: "Meteorology",
      br: "Meteorologia",
    },
    descricao: {
      en: "Application for checking weather conditions.",
      br: "Aplicação para verificar condições climáticas.",
    },
    detalhes: {
      en: [
        "Meteorology is an application designed to provide users with up-to-date weather information. It fetches data from reliable sources to display current weather conditions, forecasts, and other meteorological data.",
        "Users can search for specific locations to get detailed weather reports, including temperature, humidity, wind speed, and more. The application may also include features like weather maps or notifications for severe weather alerts.",
      ],
      br: [
        "Meteorologia é uma aplicação projetada para fornecer aos usuários informações meteorológicas atualizadas. Ela busca dados de fontes confiáveis para exibir as condições climáticas atuais, previsões e outros dados meteorológicos.",
        "Os usuários podem buscar locais específicos para obter relatórios meteorológicos detalhados, incluindo temperatura, umidade, velocidade do vento e muito mais. A aplicação também pode incluir recursos como mapas climáticos ou notificações para alertas de condições climáticas severas.",
      ],
    },
    tags: {
      en: ["Desktop", "Mobile", "Weather", "API", "Search"],
      br: ["Desktop", "Mobile", "Clima", "API", "Busca"],
    },
    qtd_img: 3,
  },
  {
    linkvideo: "https://youtu.be/IuRTh2iLVE0",
    link: {
      en: "../projetos/quiz/?en",
      br: "../projetos/quiz/?br",
    },
    titulo: {
      en: "Quiz",
      br: "Quiz",
    },
    descricao: {
      en: "Interactive quiz application.",
      br: "Aplicação de quiz interativo.",
    },
    detalhes: {
      en: [
        "Quiz is an interactive application that allows users to participate in quizzes on various topics. It offers multiple-choice questions with scoring and feedback for users.",
        "The application can be customized to include different quiz categories, levels of difficulty, and scoring systems. It's a great tool for educational purposes, testing knowledge, or just having fun with quizzes.",
      ],
      br: [
        "Quiz é uma aplicação interativa que permite aos usuários participarem de quizzes sobre diversos temas. Ela oferece perguntas de múltipla escolha com pontuação e feedback para os usuários.",
        "A aplicação pode ser personalizada para incluir diferentes categorias de quiz, níveis de dificuldade e sistemas de pontuação. É uma ótima ferramenta para fins educacionais, testar conhecimentos ou simplesmente se divertir com quizzes.",
      ],
    },
    tags: {
      en: ["Desktop", "Mobile", "Quiz", "Interactive", "Scoring"],
      br: ["Desktop", "Mobile", "Quiz", "Interativo", "Pontuação"],
    },
    qtd_img: 2,
  },
  {
    linkvideo: "",
    link: {
      en: "../projetos/relogioanalogico/?en",
      br: "../projetos/relogioanalogico/?br",
    },
    titulo: {
      en: "Analog Clock",
      br: "Relógio Analógico",
    },
    descricao: {
      en: "Design and Mathematics to rotate the hands.",
      br: "Design e Matemática para girar os ponteiros.",
    },
    detalhes: {
      en: [
        "An application in JavaScript, CSS, and HTML that shows an analog clock is an excellent example of the combination of mathematics and design. The most challenging part of creating this type of clock is making the hands move precisely and continuously. This is done using mathematics to calculate the correct angles for each of the hands.",
        'In CSS, the angles are defined for each hand using the "transform" property. The value of the property is a function that specifies the rotation angle of the element. This allows each hand to be positioned correctly on the clock.',
        'In JavaScript, the angle calculations are done using the current date and time. From this, it is possible to calculate the angles for the hour, minute, and second hands. Once the angles are calculated, it is possible to update the "transform" properties in the CSS and make the hands move correctly.',
      ],
      br: [
        "Uma aplicação em JavaScript, CSS e HTML que mostra um relógio analógico é um excelente exemplo da combinação de matemática e design. A parte mais desafiadora da criação desse tipo de relógio é fazer com que os ponteiros se movam de forma precisa e contínua. Isso é feito utilizando matemática para calcular os ângulos corretos para cada um dos ponteiros.",
        'No CSS, os ângulos são definidos para cada ponteiro, usando a propriedade "transform". O valor da propriedade é uma função que especifica o ângulo de rotação do elemento. Isso permite que cada ponteiro seja posicionado corretamente no relógio.',
        'Já no JavaScript, o cálculo dos ângulos é feito usando a data e hora atuais. A partir disso, é possível calcular os ângulos para os ponteiros das horas, minutos e segundos. Uma vez que os ângulos são calculados, é possível atualizar as propriedades de "transform" no CSS e fazer com que os ponteiros se movam corretamente.',
      ],
    },
    tags: {
      en: ["Desktop", "Mobile", "Javascript", "CSS"],
      br: ["Desktop", "Mobile", "Javascript", "CSS"],
    },
    qtd_img: 1,
  },
  {
    linkvideo: "",
    link: {
      en: "../projetos/jogodavelhajs/?en",
      br: "../projetos/jogodavelhajs/?br",
    },
    titulo: {
      en: "Tic Tac Toe JS",
      br: "Jogo da Velha JS",
    },
    descricao: {
      en: "Page demonstration with drag and drop effect.",
      br: "Demonstração de página com efeito drag and drop.",
    },
    detalhes: {
      en: [
        'The Tic Tac Toe application is an example of how JavaScript can be used to create interactive games on the web. In this application, the user can play against themselves, alternating between "X" and "O", or play against a friend using the same device. The game is presented in a simple interface, with a 3x3 grid layout where the player clicks on an empty cell to make their move.',
        "The game logic was implemented entirely in JavaScript, using click events to register the player's moves and a series of functions to check for a winner or a tie. The JavaScript code is also responsible for updating the game's interface in real-time, showing whose turn it is to play and displaying victory, tie, or defeat messages.",
        "The Tic Tac Toe application is a great example of how JavaScript programming can be used to create interactive web games, and serves as an excellent base for those who want to learn more about the language and its application in web projects.",
      ],
      br: [
        'A aplicação Jogo da Velha é um exemplo de como o JavaScript pode ser utilizado para criar jogos interativos na web. Nessa aplicação, o usuário pode jogar contra si mesmo, alternando entre "X" e "O", ou jogar contra um amigo, utilizando o mesmo dispositivo. O jogo é apresentado em uma interface simples, com um layout de grade 3x3, onde o jogador clica em uma célula vazia para fazer sua jogada.',
        "A lógica do jogo foi implementada inteiramente em JavaScript, com o uso de eventos de clique para registrar as jogadas do jogador e uma série de funções para verificar se houve um vencedor ou se houve um empate. O código JavaScript também é responsável por atualizar a interface do jogo em tempo real, mostrando quem é a vez de jogar e exibindo mensagens de vitória, empate ou derrota.",
        "A aplicação Jogo da Velha é um ótimo exemplo de como a programação em JavaScript pode ser utilizada para criar jogos interativos na web, e serve como uma excelente base para aqueles que desejam aprender mais sobre a linguagem e sua aplicação em projetos web.",
      ],
    },
    tags: {
      en: ["Desktop", "Mobile", "Javascript", "CSS"],
      br: ["Desktop", "Mobile", "Javascript", "CSS"],
    },
    qtd_img: 1,
  },
  {
    linkvideo: "",
    link: {
      en: "../projetos/pizzariavirtual/?en",
      br: "../projetos/pizzariavirtual/?br",
    },
    titulo: {
      en: "Virtual Pizzeria",
      br: "Pizzaria Virtual",
    },
    descricao: {
      en: "Interface of a virtual pizzeria.",
      br: "Interface de uma pizzaria virtual.",
    },
    detalhes: {
      en: [
        "The interface of a pizza ordering application is an excellent example of how CSS, HTML, and JavaScript can be combined to create a pleasant and interactive user experience. With this application, it is possible to choose the desired amount of pizza and add it to the cart quickly and easily.",
        "The interface is simple and intuitive, with clearly identified and organized buttons and input fields. The design is attractive and modern, with vibrant colors and images that make the user feel attracted to interact with the application.",
        "The use of JavaScript makes the application even more powerful, allowing the user to add and remove items from the cart without the need to refresh the page. This makes the shopping experience more fluid and faster, providing a sense of practicality and convenience.",
        "It is important to note that this pizza ordering application is just a demonstration interface and does not have a real database connection. Therefore, any information entered into the application will not be stored or used for any other purpose.",
      ],
      br: [
        "A interface de uma aplicação para compra de pizza é um excelente exemplo de como o CSS, HTML e JavaScript podem ser combinados para criar uma experiência de usuário agradável e interativa. Com essa aplicação, é possível escolher a quantidade de pizza desejada e adicioná-la ao carrinho, de forma rápida e fácil.",
        "A interface é simples e intuitiva, com botões e campos de entrada claramente identificados e organizados. O design é atraente e moderno, com cores vibrantes e imagens que fazem com que o usuário se sinta atraído a interagir com a aplicação.",
        "O uso de JavaScript torna a aplicação ainda mais poderosa, permitindo que o usuário adicione e remova itens do carrinho sem a necessidade de atualizar a página. Isso torna a experiência de compra mais fluida e rápida, proporcionando uma sensação de praticidade e conveniência.",
        "É importante ressaltar que esta aplicação para compra de pizza é apenas uma demonstração de interface e não possui conexão com um banco de dados real. Portanto, qualquer informação inserida na aplicação não será armazenada ou utilizada para qualquer outro fim.",
      ],
    },
    tags: {
      en: ["Desktop", "Mobile", "Javascript", "CSS"],
      br: ["Desktop", "Mobile", "Javascript", "CSS"],
    },
    qtd_img: 6,
  },
  {
    linkvideo: "",
    link: {
      en: "../projetos/urnaeletronica/?en",
      br: "../projetos/urnaeletronica/?br",
    },
    titulo: {
      en: "Electronic Voting Machine",
      br: "Urna Eletrônica",
    },
    descricao: {
      en: "System that simulates an electronic voting machine.",
      br: "Sistema que simula uma Urna Eletrônica.",
    },
    detalhes: {
      en: [
        "This page is an example of a hypothetical election for the mayor of a fictional city. Four candidates were registered with their respective numbers, names, parties, and photos.",
        "To simplify use, no database connection was made, but an object with the candidates' information was used.",
        'In the "COUNCILOR" stage, there are two registered candidates: "Fulano de Tal" from the "ABC" party with the number "38111" and "Beltrano da Silva" from the "DEFG" party with the number "77222".',
        'In the "MAYOR" stage, there are two registered candidates: "Ciclano" from the "ABC" party with the number "99" and "Zulano" from the "QWERTY" party with the number "84". Each candidate has a vice, in addition to their respective photos and captions.',
        'To vote, just click on the numbers corresponding to the candidate s number you want to vote for. If you made a mistake and entered the wrong number, you can correct the vote by clicking the "CORRIGE" button. If you want to vote blank, just click the "BRANCO" button and confirm the vote.',
        "After confirming the vote, the page displays the next voting stage, if any. Otherwise, the page displays a message ending the voting process.",
      ],
      br: [
        "Essa página tem como exemplo uma eleição hipotética para prefeito de uma cidade fictícia. Foram cadastrados quatro candidatos, com seus respectivos números, nomes, partidos e fotos.",
        "Para simplificar o uso, não foi realizado conexão com banco de dados, mas sim uso de objeto com as informações dos candidatos.",
        'Na etapa de "VEREADOR", há dois candidatos cadastrados: "Fulano de Tal" do partido "ABC" com o número "38111" e "Beltrano da Silva" do partido "DEFG" com o número "77222".',
        'Na etapa de "PREFEITO", há dois candidatos cadastrados: "Ciclano" do partido "ABC" com o número "99" e "Zulano" do partido "QWERTY" com o número "84". Cada candidato possui um vice, além de suas respectivas fotos e legendas.',
        'Para votar, basta clicar nos números correspondentes ao número do candidato que você deseja votar. Caso tenha errado e digitado o número incorreto, você pode corrigir o voto clicando no botão "CORRIGE". Se quiser votar em branco, basta clicar no botão "BRANCO" e confirmar o voto.',
        "Após a confirmação do voto, a página exibe a próxima etapa de votação, caso haja. Caso contrário, a página exibe uma mensagem encerrando o processo de votação.",
      ],
    },
    tags: {
      en: ["Desktop", "Mobile", "Javascript", "CSS"],
      br: ["Desktop", "Mobile", "Javascript", "CSS"],
    },
    qtd_img: 3,
  },

  {
    linkvideo: "",
    link: {
      en: "../plugins/linkedinaddcertification/?en",
      br: "../plugins/linkedinaddcertification/?br",
    },
    titulo: {
      en: "LinkedIn add certification",
      br: "LinkedIn adicionar certificação",
    },
    descricao: {
      en: "Plugin for LinkedIn certification form.",
      br: "Plugin para formulário de certificação do LinkedIn.",
    },
    detalhes: {
      en: [
        "To use this plugin, simply provide the necessary properties for creating the certification and execute the function that opens the creation form on LinkedIn, automatically filling in the fields.",
        "It is important to use a workflow to perform the action that will receive the certificate information and navigate to the LinkedIn page with the form pre-filled automatically.",
      ],
      br: [
        "Para utilizar este plugin, basta fornecer as propriedades necessárias para a criação da certificação e executar a função que abre o formulário de criação no LinkedIn, preenchendo os campos automaticamente.",
        "É importante utilizar um fluxo de trabalho para executar a ação que receberá as informações do certificado e navegar até a página do LinkedIn com o formulário pré-preenchido automaticamente.",
      ],
    },
    tags: {
      en: ["Bubble", "Complex", "Plugin"],
      br: ["Bubble", "Complexo", "Plugin"],
    },
    qtd_img: 1,
  },
  {
    linkvideo: "",
    link: {
      en: "../ferramentas/circulocoord/?en",
      br: "../ferramentas/circulocoord/?br",
    },
    titulo: {
      en: "Geographic Coordinates Circle",
      br: "Círculo de Coordenadas Geográficas",
    },
    descricao: {
      en: "Find the geographic coordinates of a circle.",
      br: "Encontre as coordenadas geográficas de um círculo.",
    },
    detalhes: {
      en: [
        "After entering the data about the geographic circle, the system will return the geographic coordinates that form the inserted circle.",
        "The formulas used in this system do not take magnetic declinations into account.",
      ],
      br: [
        "Após inserir os dados sobre o círculo geográfico, o sistema irá retornar as coordenadas geográficas que formam o círculo inserido.",
        "As fórmulas utilizadas nesse sistema não levam em conta as declinações magnéticas.",
      ],
    },
    tags: {
      en: ["Desktop", "Mobile", "Javascript", "CSS"],
      br: ["Desktop", "Mobile", "Javascript", "CSS"],
    },
    qtd_img: 1,
  },
];
let sobremim = [
  {
    titulo: "Criador da F3lixTech",
    textop1:
      "Felix é o criador da F3lixTech,  que oferece soluções tecnológicas personalizadas por meio de metodologias ágeis e consultorias especializadas.",
  },
  {
    titulo: "História com Tecnologia",
    textop1:
      "Há " +
      (anoatual - 2005) +
      " anos, Felix teve seu primeiro contato com a tecnologia, quando teve seu primeiro computador. Desde então, ele mostrou uma curiosidade natural em aprender sobre o funcionamento interno do sistema operacional e seus softwares.",
    textop2:
      "Na época, ele já corrigia erros e substituía dll no Windows 98. Pouco depois, aprendeu a editar arquivos em linguagem Lua para personalizar um servidor de Tibia. Isso despertou um interesse ainda maior em desenvolver suas habilidades em programação. Anos depois, ele se aventurou a criar servidores de Ragnarok e Minecraft, demonstrando uma compreensão cada vez maior em relação aos conceitos da tecnologia;",
    textop3:
      "Em 2009, ele concluiu um curso técnico em informática, o que o permitiu expandir ainda mais seu conhecimento e habilidades. Atualmente, Felix está se formando em Tecnologia da Informação, além de pós-graduação em Engenharia de Software, mostrando seu comprometimento em continuar aprimorando seus conhecimentos e habilidades para fornecer soluções tecnológicas cada vez mais avançadas e eficazes.",
    textop4:
      "Membro ativo da comunidade Sem Codar desde 2021, compartilha seus conhecimentos e experiências com outros entusiastas da tecnologia. Ele está juntando todas as suas habilidades, tanto em programação tradicional quanto em no-code, para extrair o melhor que o mundo da tecnologia pode oferecer.",
  },
  {
    titulo: "Cursos",
    texto: "",
    lista: [
      "Pós em Engenharia de Software - MBA",
      "Bacharelado em Tecnologia da Informação",
      "Técnico em Informática",
      "Bacharelado em Ciências Aeronáuticas",
      "Técnico em Controle de Tráfego Aéreo",
    ],
  },
  {
    titulo: "Certificados",
    texto: "",
    lista: [
      "Sem Codar",
      "GIT/GITHUB",
      "Javascript",
      "Docker",
      "Sass",
      "HTML",
      "REACT",
    ],
  },
  {
    titulo: "Treinamentos realizados",
    texto: "",
    lista: [
      "POO/Java - Curso em Vídeo",
      "Spring/React - DevSuperior",
      "Hackaton Gemini - Iteris",
    ],
  },
  {
    titulo: "Outros conhecimentos/habilidades",
    texto: "",
    lista: [
      "Bubble",
      "Appgyver",
      "Vue",
      "Bootstrap",
      "CSS",
      "Google Sheet/Excel",
      "Python",
      "Criação de plugins - Bubble",
      "SQL",
      "MySQL",
      "Shellscript/Linux",
      "Integração API",
    ],
  },
];

let politicasdeprivacidade = {
  en: {
    "Privacy Policy for F3lixTech":
      "The privacy of visitors to the F3lixTech website is of great importance, and this privacy policy describes how personal information will be collected, used, shared, and protected.",

    "Collection of Personal Information":
      "Personal information from visitors to the F3lixTech website will not be collected unless it is provided voluntarily. Personal information may include name, email address, and phone number, and will be used only to respond to inquiries or contact requests.",

    "Use of Personal Information":
      "The personal information collected will be used exclusively to respond to inquiries or contact requests. This information will not be shared with third parties unless required by law.",

    "Cookies and Tracking Technologies":
      "The F3lixTech website may use cookies and other tracking technologies to enhance the user experience and collect information about how visitors use the site. This information may include IP address, browser type, internet service provider (ISP), pages visited, and time spent on the site. The information collected will be used only to improve the user experience and analyze website traffic.",

    "Links to Other Sites":
      "The F3lixTech website may contain links to other sites that are not operated by F3lixTech. There is no control over the content and privacy practices of these sites, and no responsibility for their privacy policies.",

    "Security of Personal Information":
      "Reasonable measures will be taken to protect the personal information collected from unauthorized access, use, disclosure, alteration, or destruction. However, due to the nature of the internet, it is not possible to guarantee the complete security of personal information against security breaches.",

    "Changes to the Privacy Policy":
      "The privacy policy may be updated from time to time, and the most recent version will always be available on the F3lixTech website.",

    Contact:
      "If you have any questions or concerns about the privacy policy, you can contact us through the F3lixTech website.",
  },
  br: {
    "Política de Privacidade para F3lixTech":
      "A privacidade dos visitantes do site F3lixTech é de grande importância e esta política de privacidade descreve como as informações pessoais serão coletadas, usadas, compartilhadas e protegidas.",

    "Coleta de Informações Pessoais":
      "Informações pessoais dos visitantes do site F3lixTech não serão coletadas, a menos que sejam fornecidas voluntariamente. As informações pessoais podem incluir nome, endereço de e-mail e número de telefone, e serão utilizadas apenas para responder a perguntas ou solicitações de contato.",

    "Uso de Informações Pessoais":
      "As informações pessoais coletadas serão utilizadas exclusivamente para responder a perguntas ou solicitações de contato. Não haverá compartilhamento dessas informações com terceiros, a menos que exigido por lei.",

    "Cookies e Tecnologias de Rastreamento":
      "O site F3lixTech pode utilizar cookies e outras tecnologias de rastreamento para melhorar a experiência do usuário e coletar informações sobre como os visitantes utilizam o site. As informações podem incluir endereço IP, tipo de navegador, provedor de serviços de internet (ISP), páginas visitadas e tempo gasto no site. As informações coletadas serão utilizadas apenas para melhorar a experiência do usuário e analisar o tráfego do site.",

    "Links para Outros Sites":
      "O site F3lixTech pode conter links para outros sites que não são operados por ele. Não há controle sobre o conteúdo e as práticas de privacidade desses sites, e não há responsabilidade pela política de privacidade deles.",

    "Segurança das Informações Pessoais":
      "Medidas razoáveis serão tomadas para proteger as informações pessoais coletadas contra acesso não autorizado, uso, divulgação, alteração ou destruição. No entanto, devido à natureza da internet, não é possível garantir a completa segurança das informações pessoais contra violações de segurança.",

    "Alterações na Política de Privacidade":
      "A política de privacidade pode ser atualizada de tempos em tempos e a versão mais recente estará sempre disponível no site F3lixTech.",

    Contato:
      "Em caso de dúvidas ou preocupações sobre a política de privacidade, é possível entrar em contato por meio do site F3lixTech.",
  },
};

let termosdeuso = {
  en: {
    "Terms of Use for the F3lixTech website":
      "These terms of use describe the rights and responsibilities of the user when accessing and using the F3lixTech website. By accessing and using the site, the user agrees to these terms of use.",

    "Site Content":
      "All content on the F3lixTech website, including text, images, videos, audio, and other materials, is protected by copyright and is the exclusive property of F3lixTech, unless otherwise indicated. The user may not copy, reproduce, distribute, transmit, display, sell, license, or commercially exploit any content on the site without prior written permission from F3lixTech.",

    "Links to Other Sites":
      "The F3lixTech website may contain links to other sites that are not operated by F3lixTech. F3lixTech is not responsible for the content and privacy practices of these sites and does not endorse or assume any responsibility for any content, advertising, products, or other materials on these sites. The user is responsible for evaluating and assuming the risks associated with accessing and using these sites.",

    "Limitation of Liability":
      "The F3lixTech website is provided as is and F3lixTech makes no warranties of any kind, express or implied, including, but not limited to, warranties of fitness for a particular purpose, non-infringement, or uninterrupted or error-free operation. Under no circumstances will F3lixTech be liable for any direct, indirect, punitive, incidental, special, or consequential damages arising out of or in connection with the use or inability to use the site.",

    "Changes to the Terms of Use":
      "F3lixTech reserves the right to update or modify these terms of use at any time without prior notice. Continued use of the site after any changes to the terms of use are posted constitutes acceptance of those changes.",

    "Governing Law":
      "These terms of use will be governed by and construed in accordance with the laws of the country where F3lixTech is headquartered, without regard to conflicts of law provisions. The user agrees to submit to the exclusive jurisdiction of the courts of that country in relation to any dispute arising out of or related to the use of the F3lixTech website.",

    Contact:
      "If the user has any questions or concerns about these terms of use, please contact F3lixTech through the website.",
  },
  br: {
    "Termos de Uso para o site F3lixTech":
      "Estes termos de uso descrevem os direitos e responsabilidades do usuário ao acessar e usar o site F3lixTech. Ao acessar e utilizar o site, o usuário concorda com estes termos de uso.",

    "Conteúdo do Site":
      "Todo o conteúdo do site F3lixTech, incluindo texto, imagens, vídeos, áudios e outros materiais, é protegido por direitos autorais e é de propriedade exclusiva da F3lixTech, a menos que indicado de outra forma. O usuário não pode copiar, reproduzir, distribuir, transmitir, exibir, vender, licenciar ou explorar comercialmente qualquer conteúdo do site sem a permissão prévia por escrito da F3lixTech.",

    "Links para Outros Sites":
      "O site F3lixTech pode conter links para outros sites que não são operados pela F3lixTech. A F3lixTech não é responsável pelo conteúdo e pelas práticas de privacidade desses sites e não endossa nem assume qualquer responsabilidade por qualquer conteúdo, publicidade, produtos ou outros materiais nesses sites. O usuário é responsável por avaliar e assumir os riscos associados ao acesso e uso desses sites.",

    "Limitação de Responsabilidade":
      "O site F3lixTech é fornecido como está e a F3lixTech não oferece garantias de qualquer tipo, expressas ou implícitas, incluindo, mas não se limitando a, garantias de adequação a uma finalidade específica, não violação ou operação sem erros ou interrupções. Em nenhuma circunstância a F3lixTech será responsável por quaisquer danos diretos, indiretos, punitivos, incidentais, especiais ou consequentes resultantes ou relacionados ao uso do site ou da incapacidade de usá-lo.",

    "Alterações nos Termos de Uso":
      "A F3lixTech se reserva o direito de atualizar ou modificar estes termos de uso a qualquer momento e sem aviso prévio. O uso continuado do site após a publicação de quaisquer alterações aos termos de uso constitui aceitação dessas alterações.",

    "Lei Aplicável":
      "Estes termos de uso serão regidos e interpretados de acordo com as leis do país onde a F3lixTech está sediada, sem considerar conflitos de disposições legais. O usuário concorda em submeter-se à jurisdição exclusiva dos tribunais desse país em relação a qualquer disputa decorrente ou relacionada ao uso do site F3lixTech.",

    Contato:
      "Se o usuário tiver alguma dúvida ou preocupação sobre estes termos de uso, entre em contato com a F3lixTech através do site.",
  },
};

let pagedatatextos = {
  tituloprincipal: {
    en: "Turn your ideas into customized solutions",
    br: "Transforme suas ideias em soluções personalizadas",
  },
  subtituloprincipal: {
    en: "Smart and innovative solutions with agile methods and specialized consulting.",
    br: "Soluções inteligentes e inovadoras com métodos ágeis e consultorias especializadas.",
  },
  entrarcontato: {
    en: "Contact us",
    br: "Entrar em contato",
  },
  saibamais: {
    en: "More",
    br: "Saiba mais",
  },
  call1titulo: {
    en: "Optimization",
    br: "Otimização",
  },
  call1texto: {
    en: "Solutions to save time and avoid expenses in repetitive processes, all in the palm of your hand.",
    br: "Soluções para poupar tempo e evitar gastos em processos repetitivos, tudo na palma da sua mão.",
  },
  call2titulo: {
    en: "Multiplatform",
    br: "Multiplataforma",
  },
  call2texto: {
    en: "Access your application whenever you want, from any device.",
    br: "Acesse sua aplicação sempre que quiser, de qualquer dispositivo.",
  },
  introsolucao: {
    en: "Repetitive and complicated processes?",
    br: "Processos repetitivos e complicados?",
  },
  solucaotitulo: {
    en: "Solutions",
    br: "Soluções",
  },
  solucao1titulo: {
    en: "Accessibility",
    br: "Acessibilidade",
  },
  solucao1texto: {
    en: "No more suffering from access limitations, something common in old systems.",
    br: "Não sofra mais com limitação de acesso, algo comum em sistemas antigos.",
  },
  solucao2titulo: {
    en: "Integrations",
    br: "Integrações",
  },
  solucao2texto: {
    en: "Your application will have access to the necessary information concentrated in one place.",
    br: "Sua aplicação terá acesso as informações necessárias concentradas em um só lugar.",
  },
  solucao3titulo: {
    en: "Innovation",
    br: "Inovação",
  },
  solucao3texto: {
    en: "Choose exactly how your application will help you.",
    br: "Escolha exatamente como sua aplicação irá te ajudar.",
  },
  solucao4titulo: {
    en: "Cost Reduction",
    br: "Redução de Custo",
  },
  solucao4texto: {
    en: "Avoid unnecessary costs with manual operations that make mistakes and cause losses.",
    br: "Evite custos desnecessários com operações manuais que erram e causam prejuízos.",
  },
  solucao5titulo: {
    en: "Speed",
    br: "Velocidade",
  },
  solucao5texto: {
    en: "With optimized and automated processes, the information will always be updated.",
    br: "Com processos otimizados e automatizados, as informações sempre estarão atualizadas.",
  },
  solucao6titulo: {
    en: "Availability",
    br: "Disponibilidade",
  },
  solucao6texto: {
    en: "Servers that offer greater access availability than any other in the world.",
    br: "Servidores que oferecem maior disponibilidade para acesso que qualquer outro no mundo.",
  },
  sobrelink: {
    en: "About",
    br: "Sobre",
  },
  solucoeslink: {
    en: "Solutions",
    br: "Soluções",
  },
  projetolink: {
    en: "Projects",
    br: "Projetos",
  },
  tecnologiaslink: {
    en: "Technologies",
    br: "Tecnologias",
  },
  melhorescolhalink: {
    en: "Best Choice",
    br: "Melhor escolha",
  },
  projetostiutlo: {
    en: "Projects",
    br: "Projetos",
  },
  projetossubtitulo: {
    en: "skills code and no-code",
    br: "skills code e no-code",
  },
  projetosintroducao: {
    en: "See below some projects developed with Bubble and others that are great examples of coding skills at F3lixtech.",
    br: "Veja abaixo alguns projetos desenvolvidos com bubble e outros que são ótimos exemplos das habilidades de codificar que existem na F3lixtech.",
  },
  filtrar: {
    en: "Filter",
    br: "Filtrar",
  },
  testarbutton: {
    en: "Test",
    br: "Testar",
  },
  detalhesbutton: {
    en: "Details",
    br: "Detalhes",
  },
  melhorescolhatitulo: {
    en: "Best Choice",
    br: "Melhor escolha",
  },
  melhorescolhatexto: {
    en: "No-Code platforms speed up development, and even when obstacles arise, here all difficulties will be overcome due to the high level of technical knowledge.",
    br: "As plataformas No-Code aceleram o desenvolvimento, e mesmo quando surgirem obstáculos, aqui todas as dificuldades serão superadas devido ao alto nível de conhecimento técnico.",
  },
  tenologiasecapacidadestitulo: {
    en: "Technologies and Capacities",
    br: "Tecnologias e Capacidades",
  },
  tenologiasecapacidadestexto: {
    en: "Fast delivery using no-code tools with the support of well-known market technologies.",
    br: "Rápida entrega utilizando ferramentas no-code com o suporte de tecnologias conhecidas do mercado.",
  },
  tccall1texto: {
    en: "Bubble.io",
    br: "Bubble.io",
  },
  tccall2texto: {
    en: "HTML, CSS, JavaScript",
    br: "HTML, CSS, JavaScript",
  },
  tccall3texto: {
    en: "Plugin creation",
    br: "Criação de plugins",
  },
  tccall4texto: {
    en: "API connections",
    br: "Conexões API",
  },
  tccall5texto: {
    en: "Database",
    br: "Banco de dados",
  },
  tccall6texto: {
    en: "Reliable servers",
    br: "Servidores Confiáveis",
  },
  metodologiatitulo: {
    en: "Methodology",
    br: "Métodologia",
  },
  metodologiatexto: {
    en: "Well-defined processes.",
    br: "Processos bem definidos.",
  },
  metodologiacall1titulo: {
    en: "1. Planning",
    br: "1. Planejamento",
  },
  metodologiacall1texto: {
    en: "Definition of the main functionalities and objectives to be achieved.",
    br: "Definição das principais funcionalidades e objetivos a serem alcançados.",
  },
  metodologiacall2titulo: {
    en: "2. Prototyping",
    br: "2. Prototipagem",
  },
  metodologiacall2texto: {
    en: "Creation of prototypes of the main screens for the client to validate.",
    br: "Criação protótipos das principais telas para que o cliente possa validar.",
  },
  metodologiacall3titulo: {
    en: "3. Schedule",
    br: "3. Cronograma",
  },
  metodologiacall3texto: {
    en: "Definition of the schedule to implement each of the functionalities.",
    br: "Definição do cronograma, para implementar cada uma das funcionalidades.",
  },
  metodologiacall4titulo: {
    en: "4. Development",
    br: "4. Desenvolvimento",
  },
  metodologiacall4texto: {
    en: "Start of the development of functionalities, with meetings at the end of each one.",
    br: "Início do desenvolvimento das funcionalidades, com reuniões ao final de cada uma.",
  },
  metodologiacall5titulo: {
    en: "5. Delivery",
    br: "5. Entrega",
  },
  metodologiacall5texto: {
    en: "A final round of tests will be conducted and the final product delivered.",
    br: "Será realizada uma última rodada de testes e entregue o produto final.",
  },
  metodologiacall6titulo: {
    en: "6. Monitoring",
    br: "6. Acompanhamento",
  },
  metodologiacall6texto: {
    en: "After the final delivery, there will be support for product maintenance.",
    br: "Após a entrega final, existirá suporte para manutenção do produto.",
  },
  frasefinal: {
    en: "Everything is achievable! It just depends on the time and energy you will dedicate to achieve your goal!",
    br: "Tudo é alcançavel! Só depende do tempo e energia que você irá dedicar para alcançar seu objetivo!",
  },
  textodesenvolvedor: {
    en: "Developer",
    br: "Desenvolvedor",
  },
  textocomeceagora: {
    en: "Start now!",
    br: "Comece agora!",
  },
  termosdeuso: {
    en: "Terms of use",
    br: "Termos de uso",
  },
  fechar: {
    en: "Close",
    br: "Fechar",
  },
  politicasprivacidade: {
    en: "Privacy Policies",
    br: "Políticas de privacidade",
  },
  sobremim: {
    en: "About me",
    br: "Sobre mim",
  },
  videodemotexto: {
    en: "Demo video",
    br: "Vídeo demonstrativo",
  },
};

function nome_projeto(titulo) {
  return titulo.toLowerCase().replaceAll(" ", "_");
}
function listar_imagens(nome, qtd_img) {
  let imagens = [];
  for (let i = 1; i <= qtd_img; i++) {
    imagens.push("i/projetos/" + nome + " (" + i + ").jpg");
  }
  return imagens;
}

tags = [...new Set(tags)].sort();

const projetoitem = document.querySelectorAll(".projetoitem");
let lista_filtro_projeto = [];
const tagsSpan = document.querySelector(".modal-tags");

const imgElem = document.querySelector(".modal-img");

const imgDivElem = document.querySelector(".modal-img-div");
imgDivElem.innerHTML = "";

let filtroProjetos = document.querySelector(".filtrar-projetos");
let listaDeFiltros = document.querySelector(".lista-de-filtros");
projetos.forEach((projeto) => {
  projeto.nome = nome_projeto(projeto.titulo["br"]);
  projeto.imagens = listar_imagens(projeto.nome, projeto.qtd_img);
  projeto.tags[pagelanguage].forEach((tag) => {
    tags.push(tag);
  });
});

let pagedata = new Vue({
  el: ".pagedata",
  data: {
    pagedata: pagedatatextos,
    pagelanguage: pagelanguage,
    projetos: projetos,
    tags: tags,
    politicas: politicasdeprivacidade,
    termos: termosdeuso,
    sobre: sobremim,
  },
});

document.querySelectorAll(".tagbutton").forEach((el) => {
  el.addEventListener("click", () => {
    if (lista_filtro_projeto.includes(el.innerHTML)) {
      lista_filtro_projeto.splice(
        lista_filtro_projeto.indexOf(el.innerHTML),
        1
      );
      el.classList.remove("badge-primary");
      el.classList.add("badge-dark");
    } else {
      lista_filtro_projeto.push(el.innerHTML);
      el.classList.add("badge-primary");
      el.classList.remove("badge-dark");
    }
    projetoitem.forEach((projeto) => {
      let inclui = [];
      if (lista_filtro_projeto.length === 0) {
        projeto.style.display = "flex";
      }
      lista_filtro_projeto.forEach((el) => {
        if (projeto.textContent.includes(el)) {
          inclui.push(true);
        } else {
          inclui.push(false);
        }
        if (!inclui.includes(false)) {
          projeto.style.display = "flex";
        } else {
          projeto.style.display = "none";
        }
      });
    });
  });
});

document.querySelectorAll(".modal-projeto-open").forEach((el) => {
  el.addEventListener("click", () => {
    let idcod = el.getAttribute("id");
    let projeto = projetos[idcod];
    let countImg = projeto.imagens.length;

    document.querySelector(".modal-title-projeto").innerHTML =
      projeto.titulo[pagelanguage];
    // document.querySelector('.controle-central').setAttribute('id',projeto.nome+idcod)
    document.querySelectorAll(".controlador-carousel").forEach((el) => {
      // el.setAttribute('href','#'+projeto.nome+idcod)
      if (countImg <= 1) {
        el.classList.add("d-none");
      } else {
        el.classList.remove("d-none");
      }
    });

    let newimg = "";
    let newDivimg = "";
    document.querySelector(".modal-lista-img").innerHTML = "";

    document.querySelector(".modal-detalhes").innerHTML = "";
    projeto.detalhes[pagelanguage].forEach((element) => {
      let paragrafroDetalhes = document.createElement("p");
      paragrafroDetalhes.innerHTML = element;
      document.querySelector(".modal-detalhes").appendChild(paragrafroDetalhes);
    });

    projeto.imagens.map((imagem, index) => {
      // ---- append no div e depois na lista para imagem
      newDivimg = imgDivElem.cloneNode(true);
      newimg = imgElem.cloneNode(true);
      newimg.setAttribute("src", imagem);
      if (index + 1 == 1) {
        newDivimg.classList.add("active");
      }
      newDivimg.append(newimg);
      document.querySelector(".modal-lista-img").append(newDivimg);
    });

    let newtag = "";
    document.querySelector(".modal-lista-tags").innerHTML = "";
    projeto.tags[pagelanguage].map((tag, index) => {
      newtag = tagsSpan.cloneNode(true);
      newtag.innerHTML = tag;
      document.querySelector(".modal-lista-tags").append(newtag);
    });
    if (projeto.linkvideo == "") {
      document.querySelector(".modal-div-video").classList.add("d-none");
    } else {
      document.querySelector(".modal-div-video").classList.remove("d-none");
      document
        .querySelector(".modal-linkvideo")
        .setAttribute("href", projeto.linkvideo);
    }

    document
      .querySelector(".modal-testar-projeto")
      .setAttribute("href", projeto.link[pagelanguage]);
  });
});

filtroProjetos.addEventListener("click", function (ev) {
  if (filtroProjetos.classList.contains("color-main")) {
    listaDeFiltros.classList.remove("d-none");
    filtroProjetos.classList.remove("color-main");
  } else {
    filtroProjetos.classList.add("color-main");
    listaDeFiltros.classList.add("d-none");
    document.querySelectorAll(".tagbutton").forEach((el) => {
      el.classList.remove("badge-primary");
      el.classList.add("badge-dark");
      lista_filtro_projeto = [];
      projetoitem.forEach((projeto) => {
        if (lista_filtro_projeto.length === 0) {
          projeto.style.display = "flex";
        }
      });
    });
  }
  ev.preventDefault();
});
