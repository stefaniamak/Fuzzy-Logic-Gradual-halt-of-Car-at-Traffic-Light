const HEIGHT = window.innerHeight- window.innerHeight*50/100;
const WIDTH = window.innerWidth;

const carSpeed = 30;
const car = new Car(0, HEIGHT/2.3, carSpeed);
let moving = false;

const tlPlacement = WIDTH*85/100;
tlColor = "Green";
const trafficLight = new TrafficLight(tlPlacement, HEIGHT*0.10);

const percentageOfSpeed = 0;

function setup() {     
    createCanvas(WIDTH, HEIGHT);

    car.stop();
}

function draw() {
    clear();
    drawRoad();
    car.moveForward(fuzzyLogic(trafficLight.tick, tlPlacement, car.x));
    car.show();
    trafficLight.update();
    trafficLight.show();
}

function mousePressed() {
    moving ? car.stop() : car.start();
    moving ^= 1;
    //fuzzyLogic(tlColor, tlPlacement, carPlacement);
}

