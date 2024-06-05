
let printtxt='';
let rumo;

document.querySelector('.calc').addEventListener('click',()=>{
    printtxt ='';
    rumo = document.querySelector('.rumo').value;
    let lat = document.querySelector('.lat').value.split('');
    let long = document.querySelector('.long').value.split('');
    let raio = document.querySelector('.raio').value;
    let precisaoAngulo = parseInt(document.querySelector('.precisaoangulo').value);
    let distancia = raio/60;

    let secondsY = parseInt(([lat[lat.length-2],lat[lat.length-1]]).join(''));
    let secondsX = parseInt(([long[long.length-2],long[long.length-1]]).join(''));
    lat.pop();lat.pop();
    long.pop();long.pop();
    let minutesY = parseInt(([lat[lat.length-2],lat[lat.length-1]]).join(''));
    let minutesX = parseInt(([long[long.length-2],long[long.length-1]]).join(''));
    lat.pop();lat.pop();
    long.pop();long.pop();
    let degreesY = parseInt(([lat[lat.length-2],lat[lat.length-1]]).join(''));
    let degreesX = parseInt(([long[long.length-3],long[long.length-2],long[long.length-1]]).join(''));
    if(degreesX>179 || degreesY>89 || minutesX>59 || minutesY>59 || secondsX>59 || secondsY>59){
        console.log('erro')
    }
    let valorX = (degreesX+(minutesX+secondsX/60)/60);
    let valorY = (degreesY+(minutesY+secondsY/60)/60);
    document.querySelector('.coord').innerHTML = criarPontos(precisaoAngulo,valorX,valorY,distancia);

})

//////////////////////////////////////////////////


function findPoints(valorX,valorY,angulo,distancia){
    let coord =[];
    let a=-90-rumo;
    let radian1 = ((angulo+a)*Math.PI)/180;
    let radian2 = (((angulo+a)*Math.PI)/180);
    let resultX, resultY;
   
    if(angulo+a==90){
        resultX = Math.floor(Math.cos(radian1));
    }else if(angulo+a == 270){
        resultX = Math.ceil(Math.cos(radian1))*-1;
    }else{
        resultX = (Math.cos(radian1));
    }
    if((angulo+a)==0 || (angulo+a) == 180){
        resultY = Math.floor(Math.sin(radian2));
    }else{
        resultY = (Math.sin(radian2));
    }
     coord[1] = valorX+((distancia*1.077)*resultX);//*sinalX;
     coord[0] = valorY+((distancia*1.006)*resultY);//*sinalY;  
    return convertcoord(coord);
}
function convertcoord(coord){    
    let minX = parseInt(60*(-parseInt(coord[1])+coord[1]));
    let restoX = (60*(-parseInt(coord[1])+coord[1]));    
    if (minX<10){
        minX = '0'+minX;
    }    
    let minY = parseInt(60*(-parseInt(coord[0])+coord[0]));
    let restoY = (60*(-parseInt(coord[0])+coord[0]));
    if (minY<10){
        minY = '0'+minY;
    }
    let paramArredon = 0.5;
    let secX = (60*(-parseInt(restoX)+restoX)); 
    if((-parseInt(secX)+secX)>paramArredon && secX<59){
        secX = Math.ceil(secX);
    }else{
        secX = Math.floor(secX);
    }   
    if (secX<10){
        secX = '0'+secX;
    }    
    let secY = (60*(-parseInt(restoY)+restoY));
    if((-parseInt(secY)+secY)>paramArredon && secY<59){
        secY = Math.ceil(secY);
    }else{
        secY = Math.floor(secY);
    }
    if (secY<10){
        secY = '0'+secY;
    }    
    let coordX = [parseInt(coord[1]),(minX),(secX) ];
    let coordY = [parseInt(coord[0]),(minY),(secY) ];   
    let coordenadas = [coordX, coordY];
    return coordenadas;
}


function criarPontos(precisaoAngulo,valorX,valorY,distancia){

    for(angulo=0;angulo<=360;angulo+=precisaoAngulo){
        let coordenadas = (findPoints(valorX,valorY,angulo,distancia));
        printtxt=printtxt.concat(`${coordenadas[1][0]}${coordenadas[1][1]}${coordenadas[1][2]}s0${coordenadas[0][0]}${coordenadas[0][1]}${coordenadas[0][2]}w,`)
    }
    return printtxt;
}


