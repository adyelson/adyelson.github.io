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
document.querySelector('.exportButton').addEventListener('click',()=>{
	exportData();
});

document.querySelector('.escalarButton').addEventListener('click',()=>{
		holidays = (document.querySelector('.holidays').value).split(',');
		
		setDays();
		
		document.querySelector('.exportExcel').classList.remove('hide');	
		document.querySelector('.shiftList').classList.remove('hide');	
		document.querySelector('.workIdshiftList').classList.remove('hide');	
});

document.querySelector('.buttonAddWorker').addEventListener('click', ()=>{
	indexLane++;
	document.querySelector('.countWorker').innerHTML = indexLane;
	let workerInputLane = document.querySelector('.worker').cloneNode(true);
	workerInputLane.setAttribute('id',indexLane);	
	workerInputLane.querySelector('#id').value = indexLane;
	workerInputLane.classList.add('include');	

	workerInputLane.querySelector('.buttonRemove').addEventListener('click', ()=>{
		workerInputLane.remove();
		indexLane--;
		document.querySelector('.countWorker').innerHTML = indexLane;	
	});

	

	workerInputLane.querySelector('.buttonPlus').addEventListener('click', ()=>{
		let conditionInputLane = workerInputLane.querySelector('.condition').cloneNode(true);
		conditionInputLane.classList.add('include');
		workerInputLane.querySelector('.especialSituation').append(conditionInputLane);
		conditionInputLane.querySelector('.buttonRemoveCondition').addEventListener('click',()=>{
			conditionInputLane.remove();
		})
	});
	document.querySelector('.workers').append(workerInputLane);
});

document.querySelector('.buttonAddShift').addEventListener('click', ()=>{
	indexLaneShift++
	let shiftInputLane = document.querySelector('.shift').cloneNode(true);
	shiftInputLane.setAttribute('id',indexLaneShift);	
	shiftInputLane.classList.add('include');	
	shiftInputLane.querySelector('.buttonRemove').addEventListener('click', ()=>{		
		shiftInputLane.remove();
		indexLaneShift--;		
	})
	document.querySelector('.shifts').append(shiftInputLane);
});