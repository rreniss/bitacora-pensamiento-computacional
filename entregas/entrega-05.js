//voy a crear la variable para la posición de mi ellipse
let posx = 200;
let posy = 200; 

//para cambiar el sentido del cirsulo usaré la variable
//let sentidox
//let sentidoy

let sentidox = 1;
let sentidoy = 1;

 //haré el diameto de mi circulo con 
 //let diametro = 50;
let diametro = 50; 

 //agregaré otr circulo con sus variables 
let posx2 = 100;
let posy2 = 100;

 //y sus variables de movimiento - segundo circulo

let sentidox2 = 1;
let sentidoy2 = 1;
 //agrego el tamaño del circulo
let diametro2 = 60; 

  //ocuparé let tinte para el color
let tinte = 0;


function setup() {
  createCanvas(400,400);
  colorMode(HSB,360,100,100);
  frameRate(30);
  
}

function draw() {
  
  //el color del fondo no cambiará
  background(200,50,100);
  //moveré el circulo con posx = posx + * sentidox;
  //y haré lo msimo con posy
  posx = posx + 5 * sentidox;
  posy = posy + 5 * sentidoy;
  
  //y haré que rebote en x con 
  //if (posx < width - diametro/
  if (posx > width - diametro/2) {
  //y cambio el sentido
  sentidox = -1;
  }
  
  if (posx < diametro/2) {
    sentidox = 1;
  }
    
  //y haré rebote en y
  if (posy > height - diametro/2) {
  }
  if (posy < diametro/2) {
    sentidoy = 1;
  }
      
    //cambiaré el tamaño con el tiempo 
    diametro = frameCount;
    //y no quiero que vaya creciendo
    if (diametro >150) { 
    diametro= 50; 
    } 
    
    //dibujaré mi circulo 
    
  push();
    translate(posx,posy);
    //quiero un color fijo para mi circulo
    fill(100,80,100);
    noStroke(); 
    ellipse(0,0,diametro,diametro);
  pop(); 
    
    //agrego texto de frame
    fill(0);
    //tamaño de texto
    textSize(10);
    //texto aliniado en
    textAlign(CENTER, CENTER); 
    text("frame" + frameCount, width/2,20); 
}
