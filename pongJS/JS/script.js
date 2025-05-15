// TODO: - Use exports
//       - Make ball be held for a couples seconds to give AI a better chance ✅
//       - Replay button
//       - Make player paddle be AI controller and guided by mouse
//       - Randomize initial ball trajectory ✅
//       - Reset paddles on score

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

let width = canvas.width;
let height = canvas.height;

const BALL_SIZE = 5;
const MAX_COMPUTER_SPEED = 2;

let ballPosition;
let xSpeed;
let ySpeed;

function ballInit() {
    // Random method
    let Random = () => Math.floor(Math.random() * 2);
    // Init
    ballPosition = {
        x: width / 2,
        y: height / 2,
    }
    // Randomize initial ball trajectory
    if (Random() % 2 === 0) {
        xSpeed = Math.abs(4);
    } else {
        xSpeed = -Math.abs(4);
    }

    if (Random() % 2 === 0) {
        ySpeed = Math.abs(2);
    } else {
        ySpeed = -Math.abs(2);
    }
}

let leftScore = 0;
let rightScore = 0;
let gameOver = false;

const PADDLE_WIDTH = 5;
const PADDLE_HEIGHT = 20;
const PADDLE_OFFSET = 10;

let leftPaddleTop = width / 2;
let rightPaddleTop = width / 2;

function holdBall() {
    ballPosition = {
        x: width / 2,
        y: height / 2,
    }
    xSpeed = 0;
    ySpeed = 0;
    setTimeout(ballInit, 1200);
}

function draw() {
    // Creates a black rectangle within the canvas
    ctx.fillStyle = 'darkblue';
    ctx.fillRect(0, 0, width, height);

    // Create the ball!
    ctx.fillStyle = 'white';
    ctx.fillRect(ballPosition.x, ballPosition.y, BALL_SIZE, BALL_SIZE);

    ctx.fillStyle = 'white';
    ctx.fillRect(width / 2, 0, 3, height);

    // Draw paddles routine
    ctx.fillRect( // Left Paddle
      PADDLE_OFFSET, // Coordinates
      leftPaddleTop,
      PADDLE_WIDTH, // Paddle size
      PADDLE_HEIGHT
    );

    ctx.fillRect( // Right Paddle
      width - PADDLE_WIDTH - PADDLE_OFFSET,
      rightPaddleTop,
      PADDLE_WIDTH,
      PADDLE_HEIGHT
    );

    // Draw score routines
    ctx.font = '18px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(leftScore.toString(), 50, 50);
    ctx.textAlign = 'right';
    ctx.fillText(rightScore.toString(), width - 50, 50);
}

function followBall() {
    let ball = {
        top: ballPosition.y,
        bottom: ballPosition.x + BALL_SIZE,
    };

    let leftPaddle = {
        top: leftPaddleTop,
        bottom: leftPaddleTop + PADDLE_HEIGHT,
    };

    // Logic
    if (ball.top < leftPaddle.top) {
        leftPaddleTop -= MAX_COMPUTER_SPEED;
    } else {
        leftPaddleTop += MAX_COMPUTER_SPEED;
    }
}

function update() {
    ballPosition.x += xSpeed;
    ballPosition.y += ySpeed;
    followBall();
}

function gameLoop() {
    let gameDifficulty = 30;
    draw();
    update();
    checkCollision();
    if (gameOver) {
        draw()
        drawGameOver()
    } else {
        setTimeout(gameLoop, gameDifficulty);
    }
}

function checkPaddleCollision(ball, paddle) {
    return ( // Return true if the ball and paddles intercept
             // All four subexpressions must be true
        ball.left   < paddle.right  && // If first two expressions are true the ball intercepts the paddle horizontally
        ball.right  > paddle.left   &&
        ball.top    < paddle.bottom && // If last two expressions are true the ball intercepts the paddle vertically
        ball.bottom > paddle.top
    );
}

function adjustAngle(distanceFromTop, distanceFromBottom) {
    if (distanceFromTop < 0)
        ySpeed -= .5;

    if (distanceFromBottom < 0)
        ySpeed += .5;
}

function checkCollision() {
    let ball = {
        left: ballPosition.x,
        right: ballPosition.x + BALL_SIZE,
        top: ballPosition.y,
        bottom: ballPosition.y + BALL_SIZE,
    }

    let leftPaddle = {
        left: PADDLE_OFFSET,
        right: PADDLE_OFFSET + PADDLE_WIDTH,
        top: leftPaddleTop,
        bottom: leftPaddleTop + PADDLE_HEIGHT,
    }

    let rightPaddle = {
        left: width - PADDLE_WIDTH - PADDLE_OFFSET,
        right: width - PADDLE_OFFSET,
        top: rightPaddleTop,
        bottom: rightPaddleTop + PADDLE_HEIGHT,
    }

    if (checkPaddleCollision(ball, leftPaddle)) {
        let distanceFromTop = ball.top - leftPaddle.top;
        let distanceFromBottom = ball.bottom - leftPaddle.bottom;
        adjustAngle(distanceFromTop, distanceFromBottom);
        xSpeed = Math.abs(xSpeed); // Math.abs prevents the ball getting stuck inside a paddle and move it the next frame
    }

    if (checkPaddleCollision(ball, rightPaddle)) {
        let distanceFromTop = ball.top - rightPaddle.top;
        let distanceFromBottom = ball.bottom - rightPaddle.bottom;
        adjustAngle(distanceFromTop, distanceFromBottom);
        xSpeed = -Math.abs(xSpeed);
    }

    if (ball.left < 0) {
        rightScore++;
        holdBall();
        /*ballInit();*/
    }

    if (ball.right > width) {
        leftScore++;
        holdBall();
        /*ballInit();*/
    }

    if (leftScore > 2 || rightScore > 2)
        gameOver = true;

    if (ball.left < 0 || ball.right > width)
        xSpeed = -xSpeed;

    if (ball.top < 0 || ball.bottom > height)
        ySpeed = -ySpeed;
}

function drawGameOver() {
    ctx.fillStyle = 'white';
    ctx.font = '18px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over', width / 2, height / 2);
}

document.addEventListener('mousemove', (eventObj) => {
    rightPaddleTop = eventObj.y - canvas.offsetTop; // Subtracting by canvas.offsetTop makes sure the y calculated is based off the top of the canvas element and not the top of the .window
}, false)

ballInit();
gameLoop();