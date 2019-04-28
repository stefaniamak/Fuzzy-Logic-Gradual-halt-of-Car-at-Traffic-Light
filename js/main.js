const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;

const car = new Car(0, HEIGHT/2);
const trafficLight = new TrafficLight(50, 50);
let moving = false;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    car.stop();
}

function draw() {
    clear();
    drawRoad();
    car.moveForward();
    car.show();
    trafficLight.update();
    trafficLight.show();
}

function mousePressed() {
    moving ? car.stop() : car.start();
    moving ^= 1;
}

