class Pacman {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = directionRight;
        this.currentFrame = 1;
        this.frameCount = 7;

        setInterval(() => {
            this.changeAnimation();
        }, 100)

    };

    moveProcess() {
        this.changeDirection();
        this.moveForwards();
        if (this.checkCollision()) {
            this.moveBackwards();
        }

    };

    eat() {

    };

    moveBackwards() {
        switch(this.direction) {
            case directionRight:
                this.x -= this.speed
                break
            case directionUp:
                this.y += this.speed
                break
            case directionLeft:
                this.x += this.speed
                break
            case directionDown:
                this.y -= this.speed
                break
        }

    };

    moveForwards() {
        switch(this.direction) {
            case directionRight:
                this.x += this.speed
                break
            case directionUp:
                this.y -= this.speed
                break
            case directionLeft:
                this.x -= this.speed
                break
            case directionDown:
                this.y += this.speed
                break
        }

    };

    checkCollision() {
        if (
            map[this.getMapY()][this.getMapX()] == 1 ||
            map[this.getMapYRightSide()][this.getMapX()] == 1 ||
            map[this.getMapY()][this.getMapXRightSide()] == 1 ||
            map[this.getMapYRightSide()][this.getMapXRightSide()] == 1
        ) {
            return true;
        };
        return false;
    };

    checkGhostCollision() {

    };

    changeDirection() {

    };

    changeAnimation() {
        this.currentFrame = this.currentFrame == this.frameCount ? 1: this.currentFrame + 1;

    };

    draw() {
        canvasContext.save()
        canvasContext.translate(
            this.x + oneBlockSize / 2, 
            this.y + oneBlockSize / 2
            );
        
        canvasContext.rotate((this.direction * 90 * Math.PI) / 180);

        canvasContext.translate(
            -this.x - oneBlockSize / 2, 
            -this.y - oneBlockSize / 2
            );

        canvasContext.drawImage(
            pacmanFrames,
            (this.currentFrame - 1) / oneBlockSize,
            0,
            oneBlockSize,
            oneBlockSize,
            this.x,
            this.y,
            this.width,
            this.height
        );

        canvasContext.restore();
    };

// NEED TO FIX!

/* caught DOMException: Failed to execute 'drawImage' on 'CanvasRenderingContext2D': The HTMLImageElement provided is in the 'broken' state.
    at Pacman.draw (http://127.0.0.1:5500/pacman.js:106:23)
    at draw (http://127.0.0.1:5500/game.js:71:12)
    at gameLoop (http://127.0.0.1:5500/game.js:58:5)d */

    getMapX() {
        return parseInt(this.x / oneBlockSize)
    };

    getMapY() {
        return parseInt(this.y / oneBlockSize)
    };
    
    getMapXRightSide() {
        return parseInt((this.x + 0.9999 * oneBlockSize) / oneBlockSize)
    };
    
    getMapYRightSide() {
        return parseInt((this.y + 0.9999 * oneBlockSize) / oneBlockSize)
    };
}