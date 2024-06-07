//initial data
let currentQuestion = 0;
let correctAnswers = 0;
showQuestion();
//event
document.querySelector('.scoreArea button').addEventListener('click', resetEvent);


//functions 
function showQuestion(){
    if(questions[currentQuestion]){

        let pct = Math.floor(currentQuestion/questions.length*100);
        
        document.querySelector('.progress--bar').style.width = `${pct}%`;

        let q = questions[currentQuestion];
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;
        document.querySelector('.options').innerHTML = q.question;

        let optionsHtml = '';
        for(let i in q.options){
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item=>{
            item.addEventListener('click', optionClickEvent);
        })
    }else{
       finishQuiz();
    }
}

function optionClickEvent(e){
    let clickedOption = parseInt(e.target.getAttribute('data-op'));
    if(questions[currentQuestion].answer === clickedOption){
        correctAnswers++;
    }
    currentQuestion++;
    showQuestion();
};

function finishQuiz(){
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = '100%';
    let points = Math.floor(correctAnswers/questions.length*100);

    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}`;
    let textResult = '';
    let colorResult = '';
    if (points<40){
        textResult = "Tá ruim...";
        colorResult = 'red';
    }else if(points>=40 && points<=90){
        textResult = "Tá mais ou menos...";
        colorResult = 'orange';
    }else{
        textResult = "Parabéns!";
        colorResult= 'green';
        

    }
    document.querySelector('.scorePct').style.color = colorResult;

    document.querySelector('.scoreText1').innerHTML = textResult;

}

function resetEvent(){
    correctAnswers = 0;
    currentQuestion = 0;
    showQuestion();
}