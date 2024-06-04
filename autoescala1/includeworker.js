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

function includeWorkers(){
	
	workerList = [];
	document.querySelectorAll(".worker.include").forEach((item)=>{
		/////// ---------- rever errro
		let cantEnterDays = [];
		let daysOfWorkObject = {};
	
		item.querySelectorAll(".condition.include").forEach((condition)=>{
			let startDay = parseInt(condition.querySelector('.dayStart').value)-1;		
			let endDay = parseInt(condition.querySelector('.dayEnd').value)-1;
			let startHour = parseInt(condition.querySelector('.hourStart').value);		
			let endHour = parseInt(condition.querySelector('.hourEnd').value);
			let afterRest = parseInt(condition.querySelector('.restAfterSpecial').value);
			let signalToPut = condition.querySelector('.signal').value;
			let CountDay = condition.querySelector('#countDays').checked;
			let useHour = condition.querySelector('#countHour').checked;
			let totalHourOfCondition =  0;
					
			

			let restObjectData = getRestDays(endDay,endHour,afterRest);
			let daysToRest = restObjectData.daysR;
			let startRestHour =restObjectData.startHR;
			let endRestHour = restObjectData.endHR;

			let daysRatio = endDay-startDay+1;
			
			let daysToPut = [];
			for(let t=startDay;t<=endDay;t++){
				daysToPut.push(t);
			}
			if(useHour){				
				totalHourOfCondition =	sumHour(startDay+1,endDay,startHour,endHour)/daysRatio;								
			}
			let conditionToAppend = {
				workHourPLus: totalHourOfCondition, 
				signal: signalToPut,
				days: daysToPut,
				daysOfRest: daysToRest,
				firstDayOfRestHour:startRestHour, 
				lastDayOfRestHour: endRestHour,
				afterRest:afterRest,	 
				hourEnd: endHour,
				hourStart: startHour,
				CountDay: CountDay
			};

			cantEnterDays.push(conditionToAppend);
		});
		/////// ---------- rever errro

		
		let id = item.querySelector('#id').value;
		let workerName = item.querySelector('#worker').value;	
		
		/////////////
		
		
		let daySubtractor = 0;

		for (let cant=0; cant<cantEnterDays.length;cant++){
			if(cantEnterDays[cant].workHourPLus==0){

				daySubtractor+= (cantEnterDays[cant].days.length);
			}
			
		}
		/////////////
		
		let dayMultiplier =1;
		dayMultiplier = monthDays/(monthDays-daySubtractor);
		definedShifts =[];
		shiftModelWeek.forEach(element => {
			daysOfWorkObject[element.shift] = {shift:element.shift, days: 0};
			definedShifts.push(element.shift);
		});
		
		definedShifts = [...new Set(definedShifts)];
		
		let levelInput = item.querySelector('#level').value;

		let startHour = 0;

		

        workerList[workerName] = {
			workerId: id,
			name: workerName,
			level: levelInput, 
			shiftWork: [], 
			dayMultiplier: dayMultiplier,
			daysOfWork: daysOfWorkObject, 
			daysOfWeekend: 0,
			daysOfWorkType: {
				Normal: 0,
				Friday: 0,
				Saturday: 0,
				Sunday: 0,
				Holiday: 0
			},
			daysOfWorkTotal: 0, 
			workHours: 0, 
			especialSituation: cantEnterDays};
	});

	startShift();
}

function getRestDays(endDay,endHour,afterRest){
	
	let resto1 = 0;
	if(afterRest+endHour>=24){
		resto1 = afterRest-(24-endHour);		
	}else{
		resto1 = afterRest+endHour;
	}
	
	let qtdDias = [];
	let diasInteiros = parseInt(resto1/24);	
	let diasFloat = resto1/24;
	let resto2 = diasFloat-diasInteiros;
	
	if(afterRest+endHour>=24){
		 diasInteiros++;
	}

	for(let w=0;w<=diasInteiros;w++){
		qtdDias.push(endDay+w);
	}
	
	let horaInicio = endHour;
	let horaFim = resto2*24;
	
	// console.log(`no dia ${qtdDias[0]} começar a folga as ${horaInicio}`);
	// console.log(`os dias são ${qtdDias}`);
	// console.log(`acaba ${qtdDias[qtdDias.length-1]} as ${horaFim}`);
	let restaData = {startHR: horaInicio, daysR: qtdDias, endHR:horaFim }

	return restaData;
	
}

function sumHour(startDay,endDay,startHour,endHour){
	let part1 = (24-startHour);
	let part2 = 24*((endDay)-(startDay)); 
	let part3 = endHour;
	let totalHour = part1+part2+part3;
	
	return totalHour;
}