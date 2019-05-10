const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;

const carSpeed = 3;
const car = new Car(0, HEIGHT/2, carSpeed);
let moving = false;

const tlPlacement = WIDTH*70/100;
tlColor = "Green";
const trafficLight = new TrafficLight(tlPlacement, HEIGHT*0.10);


function setup() {
    createCanvas(WIDTH, HEIGHT);
    car.stop();
}

function draw() {
    clear();
    drawRoad();
    fuzzyLogic(trafficLight.color, tlPlacement, car.x);
    car.moveForward();
    car.show();
    trafficLight.update();
    trafficLight.show();
}

function mousePressed() {
    moving ? car.stop() : car.start();
    moving ^= 1;
    //fuzzyLogic(tlColor, tlPlacement, carPlacement);
}

