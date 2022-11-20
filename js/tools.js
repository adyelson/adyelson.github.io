let listOfTools = [
    {
        name: 'autoescala',
        link: '/autoescala',
        description: 'bla bla bla bla bla',
        image: '../img/autoescala.png'
    },
    {
        name: 'circoord',
        link: '/circoord',
        description: 'bla bla bla bla bla',
        image: '../img/circoord.png'
    },
    {
        name: 'whatsapp',
        link: '/whatsapp',
        description: 'bla bla bla bla bla',
        image: '../img/whatsapp.jpg'
    },
]

let tools = new Vue({
	el:'#tools', 
	data:{
		tools: listOfTools	
		
	}});