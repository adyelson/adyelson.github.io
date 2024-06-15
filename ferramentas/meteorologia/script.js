const style = styler(); 

document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault();
    let input = document.querySelector('#searchInput').value;
    

    if (input!==''){
        clearInfo();
        showWarning('Carregando...');
        let cityName = encodeURI(input);
        let apiKey = style.replaceAll(codeClass,'');
        let units = 'metric';
        let language = 'pt_br';
        let link = 'https://api.openweathermap.org/data/2.5/weather?';
        let url = `${link}q=${cityName}&appid=${apiKey}&units=${units}&lang=${language}`;
        console.log(url);
        let results = await fetch(url);
        let json = await results.json();

        if (json.cod === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            })
        }else{
            clearInfo();
            showWarning('Não encontramos esta localização.')
        }
    }else{
        clearInfo();
    }
});

function showInfo(json){
    showWarning('');
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>°C</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;

    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`;

    document.querySelector('.resultado').style.display = 'block';
}

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}

function clearInfo(){
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';

}

function styler(){
   let set1 = document.querySelector('head').classList;
   let set2 = document.querySelector('body').classList;
   let set3 = document.querySelector('footer').classList;

   return set1+set2+set3;
}


const codeClass = 'class';