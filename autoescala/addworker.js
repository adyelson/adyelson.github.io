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
function add(i,u,w, reqLevel, shiftTagS,typeOfDay){
	//days - daysOfWork or hour - workHours
	//i = dia
	//u = turno
	//w = numero do trabalho no dia
	let workArrayPos = [];	
	let arrayObjects = Object.entries(workerList);
	let listEntries = [];
	let startShiftHour =month[i][u].startHour;
	let extraWorkPlus = 0;
	let extraHourPlus = 0;
	let countDay = true;
	///// define level para vaga
	for(let z=0;z<arrayObjects.length;z++){
		let actualWork = arrayObjects[z][1];
		if(actualWork.level==reqLevel){
			let putSignal = '';
			let cantEnter = false;
			let mustRest = 0;
			if(actualWork.especialSituation.length>0){
				for(let s=0; s<actualWork.especialSituation.length;s++){
				 if(actualWork.especialSituation[s].days.includes(parseInt(i))){
					cantEnter = true;
					putSignal = actualWork.especialSituation[s].signal; 
					extraWorkPlus = workerList[actualWork.name];
					extraHourPlus = actualWork.especialSituation[s].workHourPLus;
					countDay = actualWork.especialSituation[s].CountDay;
				 }
			}			
			for(let a=0; a<actualWork.especialSituation.length;a++){				
				if(actualWork.especialSituation[a].daysOfRest.includes(parseInt(i))){
					let posCheck = actualWork.especialSituation[a].daysOfRest.length;
					let checkValueLast = actualWork.especialSituation[a].daysOfRest[posCheck-1];
					let checkValueFirst = actualWork.especialSituation[a].daysOfRest[0];
					mustRest++;

					if(i==checkValueFirst){
						if(actualWork.especialSituation[a].firstDayOfRestHour>=actualWork.especialSituation[a].hourEnd){
							mustRest--;
						}					
					}					
					if(i==checkValueLast){
						if(actualWork.especialSituation[a].lastDayOfRestHour<startShiftHour){
							mustRest--;
						}
				    }				
				}			   
				}
		   }			
			if(mustRest==0){
				if(!cantEnter){
				let alreadyPut = !!actualWork.shiftWork[i];				
				if(!alreadyPut){
					listEntries.push(actualWork);
				}
			}else{
				if(actualWork.shiftWork[i] == putSignal){
				}else{
					let existThis = !!extraWorkPlus.daysOfWork[putSignal];
					if(!existThis){						
						extraWorkPlus.daysOfWork[putSignal]={days: 1};						
					}else{
						extraWorkPlus.daysOfWork[putSignal].days++;
					}
					if(countDay){
						extraWorkPlus.daysOfWorkTotal++;
						extraWorkPlus.daysOfWorkType[typeOfDay]++;	//conferir necessidade		tipo de dia	
						if(['Friday','Saturday','Sunday'].includes(typeOfDay)){
							extraWorkPlus.daysOfWeekend++;
						}	
					}
					extraWorkPlus.workHours+=extraHourPlus;
					
					actualWork.shiftWork[i] = putSignal;
				}
			}
		}
	}
	}
	/////////////////////////////////////////////////////////////	VERIFICAR
	let arrayCheck = [listEntries.reverse()];// inverter para sempre pegar do ultimo da lista de baixo pra cima			
	let paramCheckList = [];
	document.querySelectorAll(".optionmaster").forEach(el=>{
		if(el.value!=""){

			paramCheckList.push(el.value);
		}
	})
	let paramCheck = [...new Set(paramCheckList)].length;

	let opt = {};
	for(let b=0;b<paramCheck;b++){
		let valuePriority = document.querySelector(`#opt${b}`).value;
		if(opt[valuePriority]!=undefined || valuePriority==""){
			paramCheck--;
			opt[document.querySelector(`#opt${b+1}`).value]=document.querySelector(`#opt${b}`).getAttribute('id')[3];
		}else{

			opt[valuePriority]=document.querySelector(`#opt${b}`).getAttribute('id')[3];
		}
	}
	
	for(let o=0;o<paramCheck;o++){
		workArrayPos=[];
		arrayCheck[o].forEach(element=>{
				o==opt['Tipo do turno'] ?	workArrayPos.push(element.daysOfWork[shiftTagS].days) :'';				
				o==opt['Tipo do dia'] ?		workArrayPos.push(element.daysOfWorkType[typeOfDay]):'';			
				o==opt['Carga Horária'] ?	workArrayPos.push(element.workHours):'';				
				o==opt['Total de dias'] ?	workArrayPos.push(element.daysOfWorkTotal):'';
				o==opt['Fim de semana'] ?	workArrayPos.push(element.daysOfWeekend):'';				
		});
		arrayCheck[o+1]=makeListToCheck(arrayCheck[o],searchLessDay(workArrayPos));				
	}			
	let workerId = '??';
	if(searchLessDay(workArrayPos)[0]==undefined){
		//alert('Não é possível atender as regras de escala com a quantidade atual de funcionários.');	

		// document.querySelector('.shiftList').classList.add('hide');	
		// document.querySelector('.workIdshiftList').classList.add('hide');	
	}else{
	let workerName = arrayCheck[paramCheck-1][searchLessDay(workArrayPos)[0]].name;	
	workerId = workerList[workerName].workerId;	
	workerList[workerName].daysOfWorkType[typeOfDay]++;
	if(['Friday','Saturday','Sunday'].includes(typeOfDay)){
		workerList[workerName].daysOfWeekend++;
	}
	workerList[workerName].daysOfWork[shiftTagS].days++;
	workerList[workerName].daysOfWorkTotal++;	
	workerList[workerName].shiftWork[i] = month[i][u].shift;	
	workerList[workerName].workHours += month[i][u].ch;
	//////------------------------------------------------------------------
	//////------------------------------------------------------------------
	let cont = document.querySelector("#maxdayssequence").value-1; ////////////////////////////////////////////-----------------edit  -1 fixo
	let sequenceRest = document.querySelector("#restaftersequence").value;////////////////////////////////////////////-----------------edit
	let checkSequenceOfWork = [];
	for (let zw=i-cont; zw<i;zw++){ 
		checkSequenceOfWork.push(workerList[workerName].shiftWork[zw]);		
	}	
	let endDay = i;
	let endHour = month[i][u].ch+month[i][u].startHour;
	let afterRest = 0;
		//tem folga no meio do intervalo escolhido
	if(checkSequenceOfWork.includes(undefined)){
		afterRest = month[i][u].restAfter;
	}else{
		afterRest = sequenceRest;
	}
		
	let restObjectData = getRestDays(endDay,endHour,afterRest);
	let daysToRest = restObjectData.daysR;
	let startRestHour =restObjectData.startHR;
	let endRestHour = restObjectData.endHR;

	let daysToPut = [];
	for(let t=i;t<=endDay;t++){
		daysToPut.push(t);
	}

	let conditionToAppend = {
		workHourPLus: 0, 
		signal: month[i][u].shift,
		days: daysToPut,
		daysOfRest: daysToRest,
		firstDayOfRestHour:startRestHour, 
		lastDayOfRestHour: endRestHour,
		afterRest:afterRest,	 
		hourEnd: endHour,
		hourStart: month[i][u].startHour
	};
	workerList[workerName].especialSituation.push(conditionToAppend);
	//////------------------------------------------------------------------
	//////------------------------------------------------------------------
	}
	let valueReturn = {workerId, w};
	return (valueReturn);
}
function makeListToCheck(entries,listLessDay){
	let listCheck = [];
	listLessDay.forEach(el=>{
		listCheck.push(entries[el]);
	})
	return listCheck;
}
function searchLessDay(array){
	let element = Math.min.apply(Math, array)
	let indices = [];	
	let idx = array.indexOf(element);
	while (idx != -1) {
	indices.push(idx);
	idx = array.indexOf(element, idx + 1);
	}	
	return indices;	
}