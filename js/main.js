

function setup() {
    

    car = new Car(0,HEIGHT/2)
    //document.write("Click car to start");
}

function draw() {
    setupRoad();
    drawRoad();
    car.moveForward();
    car.show();
    notLoop();
}

function mousePressed() {
    redraw();
}


