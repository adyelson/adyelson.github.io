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
function exportData(){
    
	exportShiftModelWeek = [];
	document.querySelectorAll(".shift.include").forEach((item)=>{
		let shiftName = item.querySelector('#shiftName').value;
		let shiftTag = item.querySelector('#shiftTag').value;
		let levelInput = item.querySelector('#level').value;
		let minWorkers = parseInt(item.querySelector('#minWorkers').value);
		let workHours = parseInt(item.querySelector('#workHours').value);
		let startHour = parseInt(item.querySelector('#startTime').value);
		let restAfter = parseInt(item.querySelector('#restAfter').value);
		let applyNormal = item.querySelector('#Normal').checked;
		let applyFriday = item.querySelector('#Friday').checked;
		let applySaturday = item.querySelector('#Saturday').checked;
		let applySunday = item.querySelector('#Sunday').checked;
		let applyHoliday = item.querySelector('#Holiday').checked;
		

		let shiftData = {tittle: shiftName, shift: shiftTag, reqLevel: levelInput, workers:[], minWorkers: minWorkers, ch: workHours, startHour: startHour, restAfter: restAfter, applyFriday:applyFriday,applyHoliday:applyHoliday,applyNormal:applyNormal,applySaturday:applySaturday,applySunday:applySunday};
		exportShiftModelWeek.push(shiftData);
	});

    exportWorkerList = []
	document.querySelectorAll(".worker.include").forEach((item)=>{
		/////// ---------- rever errro
		let cantEnterDays = [];

		item.querySelectorAll(".condition.include").forEach((condition)=>{
			let startDay = parseInt(condition.querySelector('.dayStart').value)-1;		
			let endDay = parseInt(condition.querySelector('.dayEnd').value);
			let signalToPut = condition.querySelector('.signal').value;
			let hourStart = parseInt(condition.querySelector('.hourStart').value);		
			let hourEnd = parseInt(condition.querySelector('.hourEnd').value);
			let afterRest = parseInt(condition.querySelector('.restAfterSpecial').value);
			let sumDays = condition.querySelector('#countDays').checked;
			let sumHour = condition.querySelector('#countHour').checked;
			let daysToPut = [];
			
			for(let t=startDay;t<endDay;t++){
				daysToPut.push(t);
			}
			
			let conditionToAppend = {signal: signalToPut,days: daysToPut, afterRest:afterRest, hourEnd: hourEnd, hourStart: hourStart, sumDays: sumDays, sumHour: sumHour};

			cantEnterDays.push(conditionToAppend);
		});
		/////// ---------- rever errro

		
		
		let id = item.querySelector('#id').value;
		let workerName = item.querySelector('#worker').value;	
		
		/////////////
		

		let daySubtractor = 0;

		for (let cant=0; cant<cantEnterDays.length;cant++){
			daySubtractor+= cantEnterDays[cant].days.length;
		}
		/////////////
		
		let dayMultiplier =1;
		// let dayMultiplier = monthDays/(monthDays-daySubtractor);


		let levelInput = item.querySelector('#level').value;
        exportWorkerList.push({workerId: id, name: workerName, level: levelInput, shiftWork: [], dayMultiplier: dayMultiplier,  daysOfWork: 0, workHours: 0, especialSituation: cantEnterDays});
	});
	let sequenceOfdays = document.querySelector("#maxdayssequence").value;
	let restAfterSequence = document.querySelector("#restaftersequence").value;
	let paramSequenceDays = {days: sequenceOfdays, rest: restAfterSequence};

	let option1 = document.querySelector('#opt1').value;
	let option2 = document.querySelector('#opt2').value;
	let option3 = document.querySelector('#opt3').value;
	//let option4 = document.querySelector('#opt4').value;
	let option0 = document.querySelector('#opt0').value;

	let optionsExp = {opt0: option0, opt1:option1, opt2: option2, opt3: option3}; //opt4:option4}

	let holidaysExp = (document.querySelector('.holidays').value).split(',');

    let json = {woker: exportWorkerList, shift: exportShiftModelWeek, paramSequenceDays: paramSequenceDays, holidays: holidaysExp, priorityOptions: optionsExp }

   let dataStr = JSON.stringify(json);
   let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
   let exportFileDefaultName = 'data';
   let linkElement = document.createElement('a');
   linkElement.setAttribute('href', dataUri);
   linkElement.setAttribute('download', exportFileDefaultName);
   linkElement.click();
}