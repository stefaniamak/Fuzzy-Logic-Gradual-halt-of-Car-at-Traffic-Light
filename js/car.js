class Car {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.width = WIDTH*7/100;
        this.height = this.width/1.5;
        this.speed = speed;
        this.lightColorGrey = 180;
        this.lightColorRed = 180;
        this.precSP = 0;
    }

    show() {
        stroke(0);
        fill( 173, 173, 173 );
        rect(this.x, this.y, this.width, this.height, 3);

        fill( 197, 233, 227 );
        rect(this.x+WIDTH*0.01, this.y+WIDTH*0.008, this.width*0.7, this.height*0.6, 5);

        fill( 173, 173, 173 );
        rect(this.x+WIDTH*0.015, this.y+WIDTH*0.008, this.width*0.5, this.height*0.6, 5);

        fill( this.lightColorRed, this.lightColorGrey, this.lightColorGrey );
        rect(this.x, this.y, this.width*0.1, this.height*0.2, 10);
        rect(this.x, this.y+WIDTH*0.037, this.width*0.1, this.height*0.2, 10);
        
    }
    
    start() {
        this.speed = 3;
    }

    stop() {
        this.speed = 0 ;
    }
    /*
    fast() {
        this.speed = 10;
    }
    */
    
    moveForward(sP) {
        this.x += carSpeed*sP;

        if ( sP >= this.prevSP) {
            this.lightColorGrey = 100;
            this.lightColorRed = 100;
        } else {
            this.lightColorGrey = 0;
            this.lightColorRed = 255;
        }
        this.prevSP = sP;

        document.getElementById("distanceShow").value =  trafficLight.tlDistance;
        document.getElementById("carDistance").value = trafficLight.x - this.x;
        
        if (this.x > WIDTH*0.9) {
            this.x = 0;
        }

        //percent = sP;
        //percent = parseInt(sP);
        document.getElementById("totalPercentage").value = parseInt(sP*100) + "%";
    }
}

