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
function startShift(){
    monthShift = [];    
    for (let i=0; i<monthDays;i++){
        let actualDay = [];
        month[i].reverse(); 
        for (let u=0; u < month[i].length; u++){   
            
            let reqLevel = month[i][u].reqLevel; 
            let shiftTagSep = month[i][u].shift; 
            let typeOfDay = month[i][u].typeOfDay
            let shiftWorks = [];		
            for (let w = 0; w < month[i][u].minWorkers; w++){				
                valueReturn = add(i,u,w,reqLevel,shiftTagSep,typeOfDay);
                w = valueReturn.w;
                shiftWorks.push(valueReturn.workerId); 
            }	
            let shiftObject = {
                dia: i+1,
                shift: month[i][u].shift,
                minWorkers:month[i][u].minWorkers,
                workers: shiftWorks
            }    
            actualDay.push(shiftObject);
        }
        monthShift.push(actualDay);
    }    

    
  


    completeEmpty();
}

