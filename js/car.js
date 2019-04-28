class Car {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = WIDTH*4/100;
        this.height = this.width/1.5;
        this.speed = 1;
    }

    start() {
        this.speed = 1;
    }

    stop() {
        this.speed = 0;
    }

    show() {
        stroke(0);
        fill(255, 0, 0);
        rect(this.x, this.y, this.width, this.height);
    }

    moveForward() {
        this.x += this.speed;
        if (this.x > WIDTH*0.9) {
            this.x = 0;
        }
    }
}

