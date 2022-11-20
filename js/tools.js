let listOfTools = [
    {
        name: 'Auto escala',
        link: '/autoescala',
        description: 'Ferramenta para criação automática de turnos de serviços.',
        image: '../img/autoescala.png'
    },
    {
        name: 'Coordenadas do círculo',
        link: '/circulocoord',
        description: 'A partir de uma coordenada central de um círculo, encontre as coordenadas geográficas do perímetro.',
        image: '../img/circulocoord.png'
    },
  
]

let tools = new Vue({
	el:'#tools', 
	data:{
		tools: listOfTools	
		
	}});