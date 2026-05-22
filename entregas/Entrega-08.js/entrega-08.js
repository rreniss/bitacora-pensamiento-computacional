# entrega akrilla rebota
(https://editor.p5js.org/renata.danyan/sketches/9GTVELpVQ)

let akri;
 //voy a cambiar la posición de akri
let posX = 150;
let posY = 0;
 //dirección vertical
let dirY = 1;
 //velocidad
let velocidad = 3;
 //y color de fondo
let colorFondo;

 //implementar rebote en el eje vertical
 //que cambie de velocidad aleatoriamente
 //que cambie el color de fondo
 //con una nueva imagen
 //(opcional) poner una imagen de fondo

function setup() {
  createCanvas(400, 400);
  akri = loadImage ("./akri.webp");
  //agrego color inicial de fondo
  colorFondo = color(220);
    
}

function draw() {
  background(colorFondo);
  image(akri, posX, posY, 100, 100);
  
  //dirY es hacia abajo si es 1
  //y hacia arriba si es -1
  posY = posY + velocidad * dirY;
  
  //rebote vertical
  //para que rebote abaho
  if (posY > height - 100){
    
  //para que cambie la dirección hacia arriba 
    dirY = -1;
    //ahora hacemos que cambie el color de fondo 
    //aleatoriamente - uso random
    colorFondo = color(random(255), random(255), random(255));
    
  //y para que cambie la velocidad aleatoriamente 
    velocidad = random(1,10);
    
  }
  
  //para cuando toque arriba
  if (posY < 0){
  //cambio de dirección hacia abajo
  dirY = 1;
  //cambio nuevamente el color de fondo
  colorFondo = color(random(255), random(255), random(255));
  //y cambio la velocidad aleatoriamente
  velocidad = random(1,10); 
  }
  
}
