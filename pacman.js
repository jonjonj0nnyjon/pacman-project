class Pacman {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;

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

    };

    moveForwards() {

    };

    checkCollision() {

    };

    checkGhostCollision() {

    };

    changeDirection() {

    };

    changeAnimation() {

    };

    draw() {

    };
}