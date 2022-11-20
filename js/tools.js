let listOfTools = [
    {
        name: 'autoescala',
        link: '/autoescala',
        description: 'bla bla bla bla bla',
        image: '../img/autoescala.png'
    },
    {
        name: 'circulocoord',
        link: '/circulocoord',
        description: 'bla bla bla bla bla',
        image: '../img/circulocoord.png'
    },
  
]

let tools = new Vue({
	el:'#tools', 
	data:{
		tools: listOfTools	
		
	}});