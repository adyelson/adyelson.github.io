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
function getDaysInMonth(year, month) {
	return new Date(year, month, 0).getDate();
  }

function checkTypeOfDay(date = new Date()){

	
	if(holidays.includes((date.getDate()).toString())){
		return 'Holiday'
	}else{

		if(date.getDay() === 0){
			return 'Sunday'
		}
		if(date.getDay() === 6){
			return 'Saturday'
		}
		if(date.getDay() === 5){
			return 'Friday'
		}
		if(date.getDay() !== 6 || date.getDay() !== 0 || date.getDay() !== 5){
			return 'Normal'
		}
	}

}

function setDays(){
	headerShiftNormal = [];
	let dataInputMonth = (document.querySelector('.qtdDiasMes').value);
	monthDays = getDaysInMonth(dataInputMonth.split('-')[0],dataInputMonth.split('-')[1]);

	let today = new Date(dataInputMonth+'-'+1);

	
	for (let a=0; a<monthDays;a++){
		today.setDate(a+1);
		typeOfDay = checkTypeOfDay(today);
		month[a] = includeShift(today.getDate(),typeOfDay,today.getDay())
		headerShiftNormal.push(typeOfDay);
	}
		
	includeWorkers();
}