
// Παράθυρο
const HEIGHT = window.innerHeight - window.innerHeight * 50 / 100;
const WIDTH = window.innerWidth;

// Αυτοκίνητο
const carSpeed = 30;
const car = new Car(0, HEIGHT / 2.3, carSpeed);
let moving = false;

// Φανάρι
const tlPlacement = WIDTH * 85 / 100;
tlColor = "Green";
const trafficLight = new TrafficLight(tlPlacement, HEIGHT * 0.10);

// Αρχική ταχύτητα
const percentageOfSpeed = 0;

function setup() {
    createCanvas(WIDTH, HEIGHT);
}

function draw() {
    clear();
    drawRoad();
    car.moveForward(fuzzyLogic(trafficLight.tick, tlPlacement - tlPlacement * 0.03, car.x));
    car.show();
    trafficLight.update();
    trafficLight.show();
}
