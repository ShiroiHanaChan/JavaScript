import {ufo, ufoImg} from "./spaceshipAI.js";

export let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

let Random = () => Math.floor(Math.random() * 2);

document.addEventListener('keydown', (eventObj) => {

}, false);

/*----------------------------------------------*/

function gameLoop() {
    drawBackground();
    ctx.drawImage(ufoImg, ufo.x, ufo.y);
    ufo.x += ufo.speed;
    console.log(ufo);
    if (ufo.x > 301) {
        ufo.x = -160;
        ufo.y = (Math.random() * 250) + 12;
    }
}

function drawBackground(){ // passar código no don't pad céu
    let lineGrad = ctx.createLinearGradient(0, 0, 0, 300);
    lineGrad.addColorStop(0, 'black');
    lineGrad.addColorStop(1, '#5498d1');
    ctx.fillStyle = lineGrad;
    ctx.fillRect(0, 0, 300, 300);

    //estrelas
    ctx.fillStyle = 'white';

    ctx.beginPath();
    ctx.arc(55, 58, 3, 0, Math.PI*2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(227, 128, 2, 0, Math.PI*2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(214, 50, 1, 0, Math.PI*2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(138, 117, 1, 0, Math.PI*2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(43, 195, 1, 0, Math.PI*2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(294, 15, 2, 0, Math.PI*2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(185, 223, 1, 0, Math.PI*2, false);
    ctx.fill();
}


setInterval(gameLoop, 10000);