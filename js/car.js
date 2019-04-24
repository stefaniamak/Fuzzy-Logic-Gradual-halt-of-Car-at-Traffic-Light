
class Car {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.carWidth = 80;
        this.carHight = 40;
    }

    show() {
        fill(255, 0 , 0);
        stroke(0) 
        rect(this.x, this.y, this.carWidth, this.carHight);
    }
}





/*
function setup() {
    createCanvas(WIDTH, HEIGHT);
    //document.write("hi from road file");
}

function draw() {
    RoadOutline();
    var linesNumber;
    var xLine = WIDTH;
    for (linesNumber = 0; linesNumber < 7; linesNumber++) {
        RoadLines(xLine,HEIGHT);
        xLine = xLine + WIDTH*2.5
    }     
}

function carStart(){
    
}

//let car;

//function Car(speed){
 //   
//}

//let carMove = {
//    carStart: function(){
//
//    }
//}
*/