//initial data
let canDraw = false;
let currentColor = 'black';

let screen = document.querySelectorAll('.tela');

screen.forEach(screen => {
    let ctx = screen.getContext('2d');

    let mouseX = 0;
    let mouseY = 0;

    //events

    document.querySelectorAll('.colorArea .color').forEach(item => {
        item.addEventListener('click', colorClickEvent);
    });

    screen.addEventListener('mousedown', mouseDownEvent);
    screen.addEventListener('mousemove', mouseMoveEvent);
    screen.addEventListener('mouseup', mouseUpEvent);

    screen.addEventListener('touchstart', touchStartEvent);
    screen.addEventListener('touchmove', touchMoveEvent);
    screen.addEventListener('touchend', touchEndEvent);

    document.querySelector('.clear').addEventListener('click', clearScreen)

    //functions

    function colorClickEvent(e) {
        let color = e.target.getAttribute('data-color');
        currentColor = color;
        document.querySelector('.color.active').classList.remove('active');
        e.target.classList.add('active');
    }

    function mouseDownEvent(e) {
        canDraw = true;
        mouseX = e.pageX - screen.offsetLeft;
        mouseY = e.pageY - screen.offsetTop;
    }

    function mouseMoveEvent(e) {
        if (canDraw) {
            draw(e.pageX - screen.offsetLeft, e.pageY - screen.offsetTop);
        }
    }

    function mouseUpEvent() {
        canDraw = false;
    }

    function touchStartEvent(e) {
        canDraw = true;
        mouseX = e.touches[0].pageX - screen.offsetLeft;
        mouseY = e.touches[0].pageY - screen.offsetTop;
    }

    function touchMoveEvent(e) {
        if (canDraw) {
            draw(e.touches[0].pageX - screen.offsetLeft, e.touches[0].pageY - screen.offsetTop);
        }
    }

    function touchEndEvent() {
        canDraw = false;
    }

    function draw(x, y) {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.lineJoin = "round";
        ctx.moveTo(mouseX, mouseY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.strokeStyle = currentColor;
        ctx.stroke();

        mouseX = x;
        mouseY = y;
    }

    function clearScreen() {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

})

// let screen = document.querySelector('.tela');
// let ctx  = screen.getContext('2d');


// let mouseX = 0;
// let mouseY = 0;

// //events

// document.querySelectorAll('.colorArea .color').forEach(item =>{
//     item.addEventListener('click', colorClickEvent);
// });

// screen.addEventListener('mousedown',mouseDownEvent);
// screen.addEventListener('mousemove',mouseMoveEvent);
// screen.addEventListener('mouseup',mouseUpEvent);

// screen.addEventListener('touchstart', touchStartEvent);
// screen.addEventListener('touchmove', touchMoveEvent);
// screen.addEventListener('touchend', touchEndEvent);

// document.querySelector('.clear').addEventListener('click',clearScreen)

// //functions

// function colorClickEvent(e){
//     let color = e.target.getAttribute('data-color');
//     currentColor = color;
//     document.querySelector('.color.active').classList.remove('active');
//     e.target.classList.add('active');
// }

// function mouseDownEvent(e){
//     canDraw = true;
//     mouseX = e.pageX - screen.offsetLeft;
//     mouseY = e.pageY - screen.offsetTop;
// }

// function mouseMoveEvent(e){
//     if(canDraw){
//         draw(e.pageX - screen.offsetLeft, e.pageY - screen.offsetTop);
//     }
// }

// function mouseUpEvent(){
//     canDraw = false;
// }

// function touchStartEvent(e){
//     canDraw = true;
//     mouseX = e.touches[0].pageX - screen.offsetLeft;
//     mouseY = e.touches[0].pageY - screen.offsetTop;
// }

// function touchMoveEvent(e){
//     if(canDraw){
//         draw(e.touches[0].pageX - screen.offsetLeft, e.touches[0].pageY - screen.offsetTop);
//     }
// }

// function touchEndEvent(){
//     canDraw = false;
// }

// function draw(x,y){
//     ctx.beginPath();
//     ctx.lineWidth = 5;
//     ctx.lineJoin = "round";
//     ctx.moveTo(mouseX, mouseY);
//     ctx.lineTo(x, y);
//     ctx.closePath();
//     ctx.strokeStyle = currentColor;
//     ctx.stroke();

//     mouseX = x;
//     mouseY = y;
// }

// function clearScreen(){
//     ctx.setTransform(1,0,0,1,0,0);
//     ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
// }