
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
let tags = [];
let projetos = [
    {
        titulo: "TicTacToe",
        descricao: "Jogo da velha",
        detalhes: "",
        tags: ["Bubble", "Responsividade"],
        qtd_img: 1
    }, {
        titulo: "MarketList",
        descricao: "Lista de mercado",
        detalhes: "",
        tags: ["Bubble", "Banco de dados", "Responsividade"],
        qtd_img: 1
    },{
        titulo: "Drums",
        descricao: "Bateria virtual",
        detalhes: "",
        tags: ["Javascript", "Áudio"],
        qtd_img: 1
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







