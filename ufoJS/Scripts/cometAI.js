export let cometImg = new Image();
cometImg.src = '../comet.png';

export class Comet {
    constructor(width, height, x, y, acceleration) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.acceleration = acceleration;
    }
}