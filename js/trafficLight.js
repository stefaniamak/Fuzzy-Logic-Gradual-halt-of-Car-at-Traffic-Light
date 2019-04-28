class TrafficLight {
    /*
      Traffic light has 3 stages: [Green, Yellow, Red]
      encoded as [0, 1, 2] respectively
      It takes:
      100 ticks = Green -> Yellow
      40 ticks = Yellow -> Red
      150 ticks = Red -> Green

      The method update() must be called every time during the drawing phase
      always before the show method.
    */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.tick = 1;
        this.stage = 0;
    }

    show() {
        translate(this.x, this.y);
        const GREY = '#636c70';
        const GREEN = '#00ff00';
        const RED = '#ff0000';
        const ORANGE = '#e1891b';

        //Border
        fill('#000000'); //black
        rect(0, 0, 70, 150);

        //Red Light
        fill(this.stage == 2 ? RED : GREY);
        circle(35, 30, 20);

        //Orange Light
        fill(this.stage == 1 ? ORANGE : GREY);
        circle(35, 75, 20);

        //Green Light
        fill(this.stage == 0 ? GREEN : GREY);
        circle(35, 120, 20);
    }

    update() {
        this.tick++;

        if (this.stage == 0 && this.tick == 100) {
            this.tick = 1;
            this.stage = 1;
        } else if (this.stage == 1 && this.tick == 40) {
            this.tick = 1;
            this.stage = 2;
        } else if (this.stage == 2 && this.tick == 150) {
            this.tick = 1;
            this.stage = 0;
        }
    }
}

