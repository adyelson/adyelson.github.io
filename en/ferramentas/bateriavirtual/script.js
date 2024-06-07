let composition = document.querySelector('#input')

document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
    // console.log(event.code);
    // let compositionNote = event.code.toLowerCase().split('key')[1]
    // composition.append(compositionNote);
});
document.querySelector('.composer .play').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;
    if (song !==''){
        let songArray = song.split('');
        playComposition(songArray);
    }
});

document.querySelector('.composer .reset').addEventListener('click', ()=>{
    composition.innerHTML = '';
});


document.querySelectorAll('.key').forEach(item=>{
    item.addEventListener('click', (event)=>{
        let noteKey = event.target.getAttribute('data-key')
        playSound(noteKey);
        

        let compositionNote = noteKey.split('key')[1]
        
        composition.append(compositionNote);
    })
});



function playComposition (songArray){
    let wait = 0;

    for (let songItem of songArray){
        setTimeout(()=>{
        playSound(`key${songItem}`); 
        }, wait)
        
        wait+=250;
    }
}

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    if (audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active');
        setTimeout(()=>{
            keyElement.classList.remove('active');
        },300)
    }
}