let x=0;
let y=0;
let chance= 0.5;
let offset=10;

function setup() {
    createCanvas(400,400);
    background(0);    
}

function draw() {
    stroke(255);
    if (random(1)<chance){
        line(x, y ,x+offset ,y+offset);
    } else{
        line(x, y+offset, x+offset, y);
    }
    x=x+offset;
    if(x>width) {
        x=0;
        y=y+offset;
    }    
}
