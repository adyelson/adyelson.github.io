// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// (c) Todos os direitos reservados. 2022
//
// Adyelson Felix Loureiro
//
// f3lixtech@f3lixtech.com 
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
let startDate = new Date();
if(startDate.getMonth()<10){

	document.querySelector('#qtdDiasMes').value =`${(startDate.getYear()+1900)}-0${startDate.getMonth()+1}`;
}else{

	document.querySelector('#qtdDiasMes').value =`${(startDate.getYear()+1900)}-${startDate.getMonth()+1}`;
}

let indexLane = 0;
let indexLaneShift = 0;
let workerList = {};
let month = [];
let convertedShift = [];
let headerConvertedShift = [];
let workers = [];
let headerShiftNormal = [];
let definedShifts = [];
let holidays = [];
let shiftList = new Vue({
	el:'#shiftList', 
	data:{
		workers: workers, //array
		workerList: workerList,//obj objt
		amountDays: 0,
		headerShift: headerShiftNormal,
		definedShifts: definedShifts
	},
	methods:{
		varToString: function(a){
			return (Object.keys(a)[0]);
		}
			
	}
});
let monthShift= [];
let workIdshiftList = new Vue({
	el:'#workIdshiftList', 
	data:{
		shifts: convertedShift,
		header: headerConvertedShift,
		amountDays: 0		
		
	}
});
let priorityList = new Vue({
	el:'#prioritylevel',
	data:{
		optionsa: ['Tipo do turno','Tipo do dia','Carga Horária','Total de dias',""],
		optionsb: ['Tipo do dia','Carga Horária','Total de dias','Tipo do turno',""],
		optionsc: ['Carga Horária','Total de dias','Tipo do turno','Tipo do dia',""],
		optionsd: ['Total de dias','Tipo do turno','Tipo do dia','Carga Horária',""],
		//optionse: ['Fim de semana','Total de dias','Tipo do turno','Tipo do dia','Carga Horária',""],
	}
})

let seeListOfWorkers = 0;
let seeShiftmonth = 0;
let specialSituation = [{type: 'dayoff', legend: '', startData: '', endData: '', free: false, plus: 0},]
let shiftModelWeek = [];




