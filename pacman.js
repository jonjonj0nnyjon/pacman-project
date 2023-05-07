class Pacman {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = directionRight;

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

    };

    draw() {

    };

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