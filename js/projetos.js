let projetos = [
    {
        nome:"TicTacToe",        
        descricao:"Jogo da velha",
        detalhes:"",
        tags:["jogos"],
        qtd_img: 3,
        imagens: []
        
    }, {
        nome:"MarketList",        
        descricao:"Lista de mercado",
        detalhes:"",
        tags:["Facilidades","Ferramentas"],
        qtd_img: 2,
        imagens: []
        
    }
]

function listar_imagens(nome, qtd_img){
    let imagens = [];
    for(let i= 1; i<=qtd_img;i++){
        imagens.push("i/"+nome+"_"+i+".jpg")
    }
    return imagens;
}  

projetos.forEach(projeto => {
    projeto.imagens = listar_imagens(projeto.nome, projeto.qtd_img)
});

let lista_projetos = new Vue({
	el:'#projetos', 
	data:{
		projetos: projetos	
		
	}});
