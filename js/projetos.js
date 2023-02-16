
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
let tags = [];
let projetos = [
    {
        titulo:"TicTacToe",        
        descricao:"Jogo da velha",
        detalhes:"",
        tags:["Jogos","Criatividade"],
        qtd_img: 1      
    }, {
        titulo:"MarketList",              
        descricao:"Lista de mercado",
        detalhes:"",
        tags:["Facilidades","Ferramentas"],
        qtd_img: 1 
    }
]

 
function nome_projeto(titulo){  
    
    return (titulo).toLowerCase() ;
} 
 function listar_imagens(nome, qtd_img){
    let imagens = [];
    for(let i= 1; i<=qtd_img;i++){
        imagens.push("i/"+nome+" ("+i+").jpg")
    }
    return imagens;
} 

projetos.forEach(projeto => {
    projeto.nome = nome_projeto(projeto.titulo)
    projeto.imagens = listar_imagens(projeto.nome, projeto.qtd_img)
    projeto.tags.forEach(tag=>{
        tags.push(tag);
    })
});

tags =  [...new Set(tags)];



let lista_projetos = new Vue({
	el:'#projetos', 
	data:{
		projetos: projetos,
        tags: tags
		
	}});
