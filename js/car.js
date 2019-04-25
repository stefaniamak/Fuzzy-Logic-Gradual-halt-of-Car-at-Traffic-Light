
class Car {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.carWidth = WIDTH*4/100;
        this.carHight = this.carWidth/1.5;
    }

    show() {
        stroke(0);
        fill(255, 0 , 0); 
        rect(this.x, this.y, this.carWidth, this.carHight);
    }

    moveForward() {
        this.x = this.x + 1;
        //document.write("hi from road file forward");
    }
}
