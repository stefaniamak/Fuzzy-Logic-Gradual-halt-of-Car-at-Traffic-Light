
function setupRoad() {
    createCanvas(WIDTH, HEIGHT);
}

function drawRoad() {
    RoadOutline();
    var linesNumber;
    var xLine = WIDTH;
    for (linesNumber = 0; linesNumber < 7; linesNumber++) {
        RoadLines(xLine,HEIGHT);
        xLine = xLine + WIDTH*2.5
    }     
}

function RoadOutline(){  
    rect(0, HEIGHT/3, WIDTH-(WIDTH*10/100), HEIGHT/3);
}

function RoadLines(x,y) {
    rect(x*5/100, HEIGHT/2, WIDTH*4/100, HEIGHT/50);
}
