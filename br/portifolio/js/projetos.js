let anoatual = new Date().getFullYear();
document.querySelectorAll(".f3lixcopy").forEach((el) => {
  el.innerHTML = `&copy;${anoatual} F3lixTech. Todos os direitos reservados.`;
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
let tags = [];
let projetos = [
  {
    linkvideo: "",
    link: "https://casher.app.br/",
    titulo: "Casher",
    descricao: "Sistema de cupons para receber descontos.",
    detalhes: [
      "Sistema completo de cupons com sistema de autenticação, listagem de campanhas de lojas para uso de pontos para ganho de desconto.",
    ],
    tags: [
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
    qtd_img: 3,
  },
  {
    linkvideo: "https://youtu.be/8Z1GRo7DD2s",
    link: "../projetos/simuladomestre",
    titulo: "Simulado-Mestre",
    descricao: "Sistema para cadastro de perguntas.",
    detalhes: [
      "Essa é uma das aplicação mais complexas que existe na lista de projetos, possui diversas funcionalidades e foi criada com o objetivo inicial de ajudar nos estudos, treinando alunos para provas com questionários que aparecem com perguntas aleatórias.",
      "Essa ferramenta possui sistema de login, porém o cadastro é por convite, e apenas usuários com permissão para convidar conseguirão cadastrar novos usuários.",
      "O acesso às perguntas é feito de uma única vez e salvas em custom states, para evitar muitas consultas ao banco de dados. As respostas também são salvas em custom states para cada vez que o usuário responde. Ao fim do questionário, é possível salvar o desempenho do usuário, após a conferência das respostas.",
      "Existem outras funcionalidades, como cadastrar perguntas, gerenciar as perguntas, gerenciar os usuários, conferir solicitações de correção de perguntas.",
      "Foi acrescentada uma conexão API com Google Planilhas e Google Agenda, para visualizar escala de serviço do pessoal que utiliza esse sistema e sincronizar com a agenda de cada um.",
    ],
    tags: [
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
    qtd_img: 10,
  },
  {
    linkvideo: "https://youtu.be/6SbKyBHSH60",
    link: "../ferramentas/autoescala",
    titulo: "Auto Escala",
    descricao: "Sistema para criação automática de escala.",
    detalhes: [
      "Esse sistema de criação de escala automática exigiu um alto nível de lógica e conhecimento em JavaScript, juntamente com CSS, para alcançar 99% de eficácia na criação da escala.",
      "Para criar a escala, basta inserir os funcionários de acordo com suas competências e, em seguida, cadastrar os turnos com horários e regras previstas. Além disso, é possível adicionar restrições aos usuários, como férias, por exemplo. Você pode definir os dias de feriados e as prioridades dos critérios para a distribuição automática.",
      "O sistema ainda oferece a opção de exportar a configuração realizada em formato JSON, para ser importada posteriormente, evitando retrabalho. Além disso, é possível exportar a escala pronta em formato CSV.",
    ],
    tags: ["Desktop", "Javascript", "Complexo", "CSS", "Upload"],
    qtd_img: 6,
  },
  {
    linkvideo: "",
    link: "../microprojetos/listadecompras",
    titulo: "Lista de Compras",
    descricao: "Aplicação para criar lista de mercado on-line.",
    detalhes: [
      "A aplicação de lista de compras desenvolvida em Bubble.io oferece uma maneira fácil e eficiente de gerenciar suas compras. Com a capacidade de salvar itens em um banco de dados, você pode acessar e gerenciar suas listas de compras de qualquer lugar e compartilhá-las com outras pessoas, se necessário.",
      "Embora nessa versão não seja possível restringir o acesso por usuário, o bubble.io permite facilmente alterar as regras de privacidade. ",
      "A aplicação permite que você adicione, exclua e edite itens da lista, além de marcar como comprados ou não, para ajudá-lo a acompanhar seus itens de compra em tempo real. Com sua interface amigável e recursos úteis, esta aplicação é uma ferramenta valiosa para quem deseja gerenciar suas compras de forma mais eficiente.",
    ],
    tags: ["Desktop", "Mobile", "Bubble", "Banco de dados", "Responsividade"],
    qtd_img: 1,
  },
  {
    linkvideo: "",
    link: "../microprojetos/jogodavelha",
    titulo: "Jogo da Velha",
    descricao: "Jogo da velha para passar o tempo.",
    detalhes: [
      "Como plataforma de desenvolvimento visual de aplicativos web, o Bubble.io oferece uma interface intuitiva e fácil de usar para criar jogos como o jogo da velha. É possível usar a ferramenta de design para arrastar e soltar elementos, como botões, campos de texto e caixas de seleção, para criar a interface do jogo e, em seguida, programar a lógica do jogo usando uma interface visual de fluxograma.",
      "A criação de um jogo da velha no Bubble.io começa com a criação de uma página em branco e a seleção dos elementos básicos do jogo, como as células do tabuleiro e os botões de reinicialização. Em seguida, o desenvolvedor pode usar o editor de estilo para personalizar a aparência do jogo, como as cores e as fontes utilizadas. Depois disso, a lógica do jogo pode ser programada usando a interface visual de fluxograma, onde as ações e regras do jogo são representadas por blocos lógicos.",
      "Um dos principais benefícios do uso do Bubble.io para criar jogos como o jogo da velha é que o processo é altamente visual e interativo, permitindo que os desenvolvedores iterem rapidamente sobre o design e a lógica do jogo. Além disso, a plataforma tem uma grande comunidade de desenvolvedores e uma variedade de recursos de suporte, o que torna o processo de desenvolvimento mais fácil e eficiente.",
    ],
    tags: ["Desktop", "Mobile", "Bubble", "Responsividade"],
    qtd_img: 1,
  },
  {
    linkvideo: "",
    link: "../ferramentas/desenhando",
    titulo: "Desenhando",
    descricao: "Aplicação simplificada de desenho online.",
    detalhes: [
      'A aplicação "Desenhando" é uma ferramenta que permite ao usuário criar desenhos em um canvas, utilizando as funcionalidades de desenho de mão livre e seleção de cores. A aplicação foi desenvolvida em HTML, CSS e JavaScript.',
      "A interface da aplicação é simples e intuitiva, com botões para selecionar a cor e um botão de limpar tela para apagar o desenho atual. Ao selecionar a cor, o usuário pode desenhar na tela com o mouse ou com o dedo em dispositivos móveis.",
      "A aplicação é responsiva e se adapta a diferentes tamanhos de tela, permitindo que o usuário desenhe tanto em desktops quanto em dispositivos móveis. O código da aplicação é bastante simples e pode ser facilmente modificado para incluir novas funcionalidades, como a capacidade de salvar desenhos ou desfazer ações.",
      'Em suma, a aplicação "Desenhando" é uma ferramenta simples e útil para quem quer criar desenhos em um ambiente digital, porém com algumas limitações. Com sua interface intuitiva e responsividade, é fácil para o usuário se familiarizar e começar a desenhar rapidamente.',
    ],
    tags: ["Desktop", "Mobile", "Javascript"],
    qtd_img: 2,
  },
  {
    linkvideo: "",
    link: "../ferramentas/bateriavirtual",
    titulo: "Bateria Virtual",
    descricao: "Bateria virtual que reproduz som.",
    detalhes: [
      "Essa página é uma aplicação de bateria virtual, que permite ao usuário tocar diferentes sons de bateria ao pressionar as teclas do teclado correspondentes. A página utiliza HTML, CSS e JavaScript para criar a interface e o comportamento interativo.",
      "No HTML, há uma estrutura básica da página, com tags que definem os elementos e seu conteúdo, como o cabeçalho com o título da página, a área de botões da bateria e uma área para compor e tocar músicas. O CSS é responsável pela estilização da página, definindo a aparência visual dos elementos, como cores e bordas.",
      "O JavaScript é responsável pelo comportamento interativo da página, recebendo as ações do usuário e acionando os eventos correspondentes. A cada vez que o usuário pressiona uma tecla do teclado, o JavaScript captura o evento e executa uma função que reproduz o som correspondente. Além disso, há botões para tocar e resetar a composição musical do usuário, que também são implementados com funções em JavaScript. Os sons da bateria são armazenados em arquivos de áudio, que são acessados e reproduzidos por meio de objetos de áudio em JavaScript.",
    ],
    tags: ["Desktop", "Mobile", "Javascript", "Áudio", "CSS"],
    qtd_img: 1,
  },
  {
    linkvideo: "",
    link: "../ferramentas/meteorologia",
    titulo: "Meteorologia",
    descricao: "Aplicação para ver condições meteorológicas.",
    detalhes: [
      "Esta página é uma aplicação web de meteorologia que permite aos usuários buscar informações meteorológicas de uma determinada localidade.",
      "A página possui um campo de busca para inserir o nome da cidade e um botão para realizar a busca. Os resultados são exibidos na página, incluindo a temperatura, a velocidade do vento e uma imagem que representa as condições meteorológicas.",
      "A página foi criada usando HTML, CSS e JavaScript, e utiliza conexão API para receber as informações.",
    ],
    tags: ["Desktop", "Mobile", "Javascript", "API", "CSS"],
    qtd_img: 3,
  },
  {
    linkvideo: "",
    link: "../microprojetos/quiz",
    titulo: "Quiz",
    descricao: "Sistema de questionário virtual.",
    detalhes: [
      "Um sistema de questionário virtual é uma aplicação que permite aos usuários responder perguntas em uma plataforma digital. Essa aplicação foi desenvolvida em JS, CSS e HTML. Isso é possível graças à maneira como o sistema foi desenvolvido, usando objetos JavaScript.",
      "Com essa aplicação, é possível criar uma variedade de questionários para atender a diferentes necessidades, como questionários de satisfação do cliente, questionários de feedback do usuário ou questionários de pesquisa de mercado. Cada questionário pode conter várias perguntas.",
      "A interface do sistema de questionário virtual é projetada para ser fácil de usar e intuitiva. As perguntas são exibidas em uma única página.",
      "Graças à sua arquitetura de objeto JavaScript, a aplicação pode receber atualização para obter as perguntas facilmente por meio de APIs. Isso significa que os desenvolvedores podem criar um banco de dados externo de perguntas e conectá-lo ao sistema de questionário virtual para obter perguntas automaticamente. Essa arquitetura também permite que os desenvolvedores adicionem facilmente novas perguntas ou atualizem perguntas existentes.",
    ],
    tags: ["Desktop", "Mobile", "Javascript", "CSS"],
    qtd_img: 2,
  },
  {
    linkvideo: "",
    link: "../ferramentas/relogioanalogico",
    titulo: "Relógio Analógico",
    descricao: "Design e Matemática para girar os ponteiros.",
    detalhes: [
      "Uma aplicação em JavaScript, CSS e HTML que mostra um relógio analógico é um excelente exemplo da combinação de matemática e design. A parte mais desafiadora da criação desse tipo de relógio é fazer com que os ponteiros se movam de forma precisa e contínua. Isso é feito utilizando matemática para calcular os ângulos corretos para cada um dos ponteiros.",
      'No CSS, os ângulos são definidos para cada ponteiro, usando a propriedade "transform". O valor da propriedade é uma função que especifica o ângulo de rotação do elemento. Isso permite que cada ponteiro seja posicionado corretamente no relógio.',
      'Já no JavaScript, o cálculo dos ângulos é feito usando a data e hora atuais. A partir disso, é possível calcular os ângulos para os ponteiros das horas, minutos e segundos. Uma vez que os ângulos são calculados, é possível atualizar as propriedades de "transform" no CSS e fazer com que os ponteiros se movam corretamente.',
    ],
    tags: ["Desktop", "Mobile", "Javascript", "CSS"],
    qtd_img: 1,
  },
  {
    linkvideo: "",
    link: "../microprojetos/jogodavelhajs",
    titulo: "Jogo da Velha JS",
    descricao: "Demonstração de página com efeito drag and drop.",
    detalhes: [
      'A aplicação Jogo da Velha é um exemplo de como o JavaScript pode ser utilizado para criar jogos interativos na web. Nessa aplicação, o usuário pode jogar contra si mesmo, alternando entre "X" e "O", ou jogar contra um amigo, utilizando o mesmo dispositivo. O jogo é apresentado em uma interface simples, com um layout de grade 3x3, onde o jogador clica em uma célula vazia para fazer sua jogada.',
      "A lógica do jogo foi implementada inteiramente em JavaScript, com o uso de eventos de clique para registrar as jogadas do jogador e uma série de funções para verificar se houve um vencedor ou se houve um empate. O código JavaScript também é responsável por atualizar a interface do jogo em tempo real, mostrando quem é a vez de jogar e exibindo mensagens de vitória, empate ou derrota.",
      "A aplicação Jogo da Velha é um ótimo exemplo de como a programação em JavaScript pode ser utilizada para criar jogos interativos na web, e serve como uma excelente base para aqueles que desejam aprender mais sobre a linguagem e sua aplicação em projetos web.",
    ],
    tags: ["Desktop", "Mobile", "Javascript", "CSS"],
    qtd_img: 1,
  },
  {
    linkvideo: "",
    link: "../microprojetos/pizzariavirtual",
    titulo: "Pizzaria Virtual",
    descricao: "Interface de uma pizzaria virtual.",
    detalhes: [
      "A interface de uma aplicação para compra de pizza é um excelente exemplo de como o CSS, HTML e JavaScript podem ser combinados para criar uma experiência de usuário agradável e interativa. Com essa aplicação, é possível escolher a quantidade de pizza desejada e adicioná-la ao carrinho, de forma rápida e fácil.",
      "A interface é simples e intuitiva, com botões e campos de entrada claramente identificados e organizados. O design é atraente e moderno, com cores vibrantes e imagens que fazem com que o usuário se sinta atraído a interagir com a aplicação.",
      "O uso de JavaScript torna a aplicação ainda mais poderosa, permitindo que o usuário adicione e remova itens do carrinho sem a necessidade de atualizar a página. Isso torna a experiência de compra mais fluida e rápida, proporcionando uma sensação de praticidade e conveniência.",
      "É importante ressaltar que esta aplicação para compra de pizza é apenas uma demonstração de interface e não possui conexão com um banco de dados real. Portanto, qualquer informação inserida na aplicação não será armazenada ou utilizada para qualquer outro fim.",
    ],
    tags: ["Desktop", "Mobile", "Javascript", "CSS"],
    qtd_img: 6,
  },
  {
    linkvideo: "",
    link: "../microprojetos/urnaeletronica",
    titulo: "Urna Eletrônica",
    descricao: "Sistema que simula uma Urna Eletrônica.",
    detalhes: [
      "Essa página tem como exemplo uma eleição hipotética para prefeito de uma cidade fictícia. Foram cadastrados quatro candidatos, com seus respectivos números, nomes, partidos e fotos.",
      "Para simplificar o uso, não foi realizado conexão com banco de dados, mas sim uso de objeto com as informações dos candidatos.",
      'Na etapa de "VEREADOR", há dois candidatos cadastrados: "Fulano de Tal" do partido "ABC" com o número "38111" e "Beltrano da Silva" do partido "DEFG" com o número "77222".',
      'Na etapa de "PREFEITO", há dois candidatos cadastrados: "Ciclano" do partido "ABC" com o número "99" e "Zulano" do partido "QWERTY" com o número "84". Cada candidato possui um vice, além de suas respectivas fotos e legendas.',
      'Para votar, basta clicar nos números correspondentes ao número do candidato que deseja votar. Caso tenha se enganado e digitado um número errado, é possível corrigir o voto clicando no botão "CORRIGE". Caso queira votar em branco, basta clicar no botão "BRANCO" e confirmar o voto.',
      "Após a confirmação do voto, a página exibe a próxima etapa de votação, caso haja. Caso contrário, a página exibe uma mensagem de encerramento da votação.",
    ],
    tags: ["Desktop", "Mobile", "Javascript", "CSS", "Áudio"],
    qtd_img: 3,
  },
  {
    linkvideo: "",
    link: "../plugins/linkedinaddcertification",
    titulo: "LinkedIn add certification",
    descricao: "Plugin para formulário de certificação do LinkedIn.",
    detalhes: [
      "Para utilizar este plugin, basta fornecer as propriedades necessárias para a criação da certificação e executar a função que abre o formulário de criação no LinkedIn, preenchendo os campos automaticamente.",
      "É importante utilizar um fluxo de trabalho para executar a ação que receberá as informações do certificado e navegar até a página do LinkedIn com o formulário pré-preenchido automaticamente.",
    ],
    tags: ["Bubble", "Complexo", "Plugin"],
    qtd_img: 1,
  },
  {
    linkvideo: "",
    link: "../ferramentas/circulocoord",
    titulo: "Círculo Coordenadas",
    descricao: "Encontre as coordenadas geográficas de um círculo.",
    detalhes: [
      "Após inserir os dados sobre o círculo geográfico, o sistema irá retornar as coordenadas geográficas que formam o círculo inserido.",
      "As fórmulas utilizadas nesse sistema não levam em conta as declinações magnéticas.",
    ],
    tags: ["Desktop", "Mobile", "Javascript", "CSS"],
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
};

let termosdeuso = {
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
    en: "More",
    br: "Otimização",
  },
  call1texto: {
    en: "More",
    br: "Soluções para poupar tempo e evitar gastos em processos repetitivos, tudo na palma da sua mão.",
  },
  call2titulo: {
    en: "More",
    br: "Multiplataforma",
  },
  call2texto: {
    en: "More",
    br: "Acesse sua aplicação sempre que quiser, de qualquer dispositivo.",
  },
  introsolucao: {
    en: "More",
    br: "Processos repetitivos e complicados?",
  },
  solucaotitulo: {
    en: "More",
    br: "Soluções",
  },
  solucao1titulo: {
    en: "More",
    br: "Acessibilidade",
  },
  solucao1texto: {
    en: "More",
    br: "Não sofra mais com limitação de acesso, algo comum em sistemas antigos.",
  },
  solucao2titulo: {
    en: "More",
    br: "Integrações",
  },
  solucao2texto: {
    en: "More",
    br: "Sua aplicação terá acesso as informações necessárias concentradas em um só lugar.",
  },
  solucao3titulo: {
    en: "More",
    br: "Inovação",
  },
  solucao3texto: {
    en: "More",
    br: "Escolha exatamente como sua aplicação irá te ajudar.",
  },
  solucao4titulo: {
    en: "More",
    br: "Redução de Custo",
  },
  solucao4texto: {
    en: "More",
    br: "Evite custos desnecessários com operações manuais que erram e causam prejuízos.",
  },
  solucao5titulo: {
    en: "More",
    br: "Velocidade",
  },
  solucao5texto: {
    en: "More",
    br: "Com processos otimizados e automatizados, as informações sempre estarão atualizadas.",
  },
  solucao6titulo: {
    en: "More",
    br: "Disponibilidade",
  },
  solucao6texto: {
    en: "More",
    br: "Servidores que oferecem maior disponibilidade para acesso que qualquer outro no mundo.",
  },
  projetolink: {
    en: "More",
    br: "Projetos",
  },
  tecnologiaslink: {
    en: "More",
    br: "Tecnologias",
  },
  melhorescolhalink: {
    en: "More",
    br: "Melhor escolha",
  },
  projetostiutlo: {
    en: "More",
    br: "Projetos",
  },
  projetossubtitulo: {
    en: "More",
    br: "skills code e no-code",
  },
  projetosintroducao: {
    en: "More",
    br: "Veja abaixo alguns projetos desenvolvidos com bubble e outros que são ótimos exemplos das habilidades de codificar que existem na F3lixtech.",
  },
  filtrar: {
    en: "Filter",
    br: "Filtrar",
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
  projeto.nome = nome_projeto(projeto.titulo);
  projeto.imagens = listar_imagens(projeto.nome, projeto.qtd_img);
  projeto.tags.forEach((tag) => {
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

    document.querySelector(".modal-title").innerHTML = projeto.titulo;
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
    projeto.detalhes.forEach((element) => {
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
    projeto.tags.map((tag, index) => {
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

    document.querySelector(".modal-testar").setAttribute("href", projeto.link);
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
