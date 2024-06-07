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
function includeShift(currentDay, typeOfDay, weekDay){
	shiftModelWeek = [];

	document.querySelectorAll(".shift.include").forEach((item)=>{
		let shiftName = item.querySelector('#shiftName').value;
		let shiftTag = item.querySelector('#shiftTag').value;
		let levelInput = item.querySelector('#level').value;
		let startHour = parseInt(item.querySelector('#startTime').value);		
		let minWorkers = parseInt(item.querySelector('#minWorkers').value);
		let workHours = parseInt(item.querySelector('#workHours').value);
		let restAfter = parseInt(item.querySelector('#restAfter').value);
		let applyIn = {};
		item.querySelectorAll(".applyin").forEach((applyDay)=>{
			applyIn[applyDay.getAttribute('id')] = applyDay.checked;
		})
		if(applyIn[typeOfDay]){
			
		}else{
			minWorkers = 0;
		}
		
		let shiftData = {applyDays: applyIn, day: currentDay, weekDay:weekDay, typeOfDay: typeOfDay, tittle: shiftName, shift: shiftTag, reqLevel: levelInput, workers:[], minWorkers: minWorkers, ch: workHours, startHour: startHour, restAfter: restAfter};
		shiftModelWeek.push(shiftData);
	});	

	
	return(shiftModelWeek);
}
