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
function convertMatrizShift(){
    convertedShift = [];
    let dayC = [];
    headerConvertedShift= [];

    //// loop para ver todos os turnos e pegar onde tem o maior valor

    /// usar no codigo abaixo
    let sizeMonth = monthShift.length;
    let sizeShift = monthShift[0].length;
    let amountPerShift = [];
    let amountTotal = [];
    for(let b=0; b<sizeShift;b++){
        amountPerShift = [];
        for(let a = 0 ; a<sizeMonth;a++){
            amountPerShift.push(monthShift[a][b].minWorkers)
        }
        amountTotal.push(Math.max.apply(Math, amountPerShift));
        
    }
    for(let w=0;w<amountTotal.length;w++){
        
            for(let a=0;a<amountTotal[w];a++){
                headerConvertedShift.push(monthShift[0][w].shift);
                
            }
            headerConvertedShift.push(" ");
    }
    for(let c=0;c<monthShift.length;c++){
        dayC = [];
        for(let w=0;w<amountTotal.length;w++){
            
            for(let a=0;a<amountTotal[w];a++){
                let worker = monthShift[c][w].workers[a];
                if(worker==""){
                    dayC.push(" ");
                }else{
                    dayC.push(worker);                    
                }
                
            }
            dayC.push(" ");
        }
        convertedShift.push(dayC);
    }
    
    updateVue();
   

    myTimeout = setTimeout(refreshShift, 100);
    let typesDaysIdShift = {Normal:[],Friday:[],Saturday:[],Sunday:[],Holiday:[]}
    function refreshShift(){
        let listOfTittleShift = [];

        for(let p = 0; p<shiftModelWeek.length;p++){
            listOfTittleShift.push(shiftModelWeek[p].shift);
        }
        
        document.querySelectorAll(".everyshift").forEach(el=>{
            if(listOfTittleShift.includes(el.innerHTML) || el.innerHTML==''){
                el.classList.remove('especialShift');
            }else{
                el.classList.add('especialShift');
            }
         });

        document.querySelectorAll(".Normal").forEach(el=>{
            typesDaysIdShift.Normal.push((el.innerHTML));
        })
        document.querySelectorAll(".Friday").forEach(el=>{
            typesDaysIdShift.Friday.push((el.innerHTML));
        })
        document.querySelectorAll(".Saturday").forEach(el=>{
            typesDaysIdShift.Saturday.push((el.innerHTML));
        })
        document.querySelectorAll(".Sunday").forEach(el=>{
            typesDaysIdShift.Sunday.push((el.innerHTML));
        })
        document.querySelectorAll(".Holiday").forEach(el=>{
            typesDaysIdShift.Holiday.push((el.innerHTML));
        })
        console.log(typesDaysIdShift);

        let tableId = document.querySelector('.idShift');
        tableId.querySelectorAll('th').forEach(el=>{
            if((typesDaysIdShift.Normal).includes((el.innerHTML))){
                el.classList.add('Normal');
            }
            if((typesDaysIdShift.Friday).includes((el.innerHTML))){
                el.classList.add('Friday');
            }
            if((typesDaysIdShift.Saturday).includes((el.innerHTML))){
                el.classList.add('Saturday');
            }
            if((typesDaysIdShift.Sunday).includes((el.innerHTML))){
                el.classList.add('Sunday');
            }
            if((typesDaysIdShift.Holiday).includes((el.innerHTML))){
                el.classList.add('Holiday');
            }
        })

    }

}