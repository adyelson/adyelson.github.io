



$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
let tags = [];
let projetos = [
   {
        titulo: "MarketList",
        descricao: "Aplicação para criar lista de mercado on-line.",
        detalhes: "",
        tags: ["Bubble", "Banco de dados", "Responsividade"],
        qtd_img: 1
    }, {
        titulo: "Drums",
        descricao: "Bateria virtual que reproduz som.",
        detalhes: "",
        tags: ["Javascript", "Áudio", "CSS"],
        qtd_img: 1
    }, {
        titulo: "Weather",
        descricao: "Aplicação para ver condições meteorológicas.",
        detalhes: "",
        tags: ["Javascript", "API", "CSS"],
        qtd_img: 3
    }, {
        titulo: "TicTacToe",
        descricao: "Jogo da velha para passar o tempo.",
        detalhes: "",
        tags: ["Bubble", "Responsividade"],
        qtd_img: 1
    },  {
        titulo: "SimuladoMestre",
        descricao: "Sistema para cadastro de perguntas.",
        detalhes: "",
        tags: ["Bubble", "Responsividade","Banco de dados", "API", "Sistema de Login", "E-mail"],
        qtd_img: 10
    }
]


function nome_projeto(titulo) {

    return (titulo).toLowerCase();
}
function listar_imagens(nome, qtd_img) {
    let imagens = [];
    for (let i = 1; i <= qtd_img; i++) {
        imagens.push("i/" + nome + " (" + i + ").jpg")
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
imgDivElem.innerHTML ="";
document.querySelectorAll(".modal-projeto-open").forEach(el => {

    el.addEventListener('click', () => {
        let idcod = el.getAttribute('id');
        let projeto = projetos[idcod];
        let countImg = projeto.imagens.length;
        
        document.querySelector('.modal-title').innerHTML = projeto.titulo; 
        document.querySelector('.controle-central').setAttribute('id',projeto.nome+idcod)
        document.querySelectorAll('.controlador-carousel').forEach(el=>{
            el.setAttribute('href','#'+projeto.nome+idcod)
            if(countImg<=1){
                el.classList.add('d-none');
            }else{
                el.classList.remove('d-none');
            }
        })       

        let newimg = "";
        let newDivimg = "";
        document.querySelector('.modal-lista-img').innerHTML = "";
        
        (projeto.imagens).map((imagem, index) => {
            // ---- append no div e depois na lista para imagem
            newDivimg = imgDivElem.cloneNode(true);
            newimg = imgElem.cloneNode(true);
            newimg.setAttribute('src',imagem);
            if(index+1 == 1){
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

        document.querySelector('.modal-testar').setAttribute('href', projeto.titulo);

    })
})

let filtroProjetos = document.querySelector('.filtrar-projetos');
let listaDeFiltros = document.querySelector('.lista-de-filtros');

filtroProjetos.addEventListener('click', function(ev){
    if(filtroProjetos.classList.contains('color-main')){
        listaDeFiltros.classList.remove('d-none');
        filtroProjetos.classList.remove('color-main');
    }else{
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




