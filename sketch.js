var circulos=[],repeat;

function setup() {
  createCanvas(windowWidth, windowHeight);

  repeat=5;
  for (var i=0;i<200;i++) {//here we draw many circles 
    circulos[i]=new Circle(); //create object
    circulos[i].width= repeat;
    circulos[i].height= repeat;
    repeat=repeat+5;
    
  }
}

function draw() {
  background(0);
  noFill();
  stroke('white');
  
  for (var j =0; j<200; j++) {//we call in every cycle the functions 
    circulos[j].animate();
    circulos[j].display();
    circulos[j].alph = map(j,0,20,0,255);
    
  }

 
}


function Circle() {
  this.width = 10;
  this.height = 10;
  this.grow= 10;
  this.alph=250;
  

  this.animate = function move() {
    //grow n shrink
    this.width=this.width+this.grow;
    this.height=this.height+this.grow;

    if(this.width>=400){
      this.grow=this.grow*-1;
    }
    if(this.height<4){
      this.grow=this.grow*-1;
    }
  
  }

  this.display = function show (){
    stroke(255,255,255,this.alph);
    ellipse(width/2,height/2,  this.width, this.height);


  }
}