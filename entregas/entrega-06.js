# entrega línea de codigo solemne-1, que exporta mi sketch en una imagen cuando hago click

https://editor.p5js.org/renata.danyan/sketches/NfrrdCoe2

function setup() {
  createCanvas(400, 450);
  //afiche constructivismo ruso
  //trabajar con HSB - colorMode(HSB);
  //tono-saturación-brillo
  colorMode(HSB,360,100,100,100);
  //para trabajar en grados ocupamos angleMode(DEGREES);
  angleMode(DEGREES);
  
}

function draw() {
  background(0,90,60);
  //voy a empezar agregando figuras geométricas para empezar a definir la 
 //composición del afiche
 //comenzaré con líneas y agregaré grosores
  //line(); - strokeWeight();
  strokeWeight(80);
line(0,100,400,0);
  strokeWeight(80);
  line(0,300,400,200);
  line(0,450,460,400);
  //agregaré circulos Y rellenaré con colores fill();
  //ellipse();
strokeWeight(0);
  fill(240,100,50);
  ellipse(100,300,80);
  //agrego color con fill();
  fill(60,100,75);
  ellipse(300,120,120);
  //agregaré un rectángulo 
  
  //rotaré el rectángulo con - rotate(); para rotar el eje de coordenadas
  //también ocuaré el codigo traslate(); para mover elpunto de origen
  translate(100,40);
  rotate(-60);
  rectMode(CENTER);
  rect(0,50,220,60);
 
  ellipse(220,400,100);
  
  //agregaré texto, especificamente el manifisto de Dieter Rams 
  //agrego texto con el comando text(""); siempre debe ir entre doble comillas
  //también ocuparé el comando textSize(); para el tamaño del texto 
  //ocuparé push(); y pop(); para aislar las líneas de código 
  
  push()
  //ocupo trasnlate para posicionar el texto
  translate(width*0,75, height/2);
  //ocupo el comando rotate(); para ajustar el texto en la misma dirección     de las franjas negras
  //ocupo el comando rotate(); para rotar el texto
  rotate(60);
  //aquí ocurrió un error que no supe corregir:( 
  //debía ir el texto de 'EL BUEN DISEÑO'
  //pero al cerrar con pop(); se distorciona todo el afiche 
  
  
  //ocupo fill(); para rellenar el texto
  //ocuparé el comando textFont(); para definir la tipografía 
  
  //cita original del manifiesto "Less, but better – because it concentrates   on the essential aspects, and the products are not burdened with non-       essentials.
  //Back to purity, back to simplicity."
  
  //repito para los siguientes textos
  
  push();
  translate(width*0.20, height*0.31);
  rotate(-14);
  fill(0,0,100);
  textSize(40);
  textAlign(CENTER,CENTER)
  textFont('bold');
  text("ES LO MENOS",0,0);
  pop();
  
  push(); 
  textSize(45);
  translate(width/10, height/2.3);
  rotate(-14);
  fill(0,0,100);
  textAlign(CENTER,CENTER)
  textFont('bold');
  text("DISEÑO POSIBLE",0,0);
  pop();
  
  
  
  push();
  stroke(0,0,100)
  strokeWeight(3);
  line(0,0,200,20);
  
  stroke(0,0,100)
  strokeWeight(3);
  line(10,10,200,20);
  
  stroke(0,0,100)
  strokeWeight(3);
  line(20,20,200,20);
  
  stroke(0,0,100)
  strokeWeight(3);
  line(30,30,200,20);
  
  stroke(0,0,100)
  strokeWeight(3);
  line(40,40,200,20);
  
  stroke(0,0,100)
  strokeWeight(3);
  line(-10,-10,190,20);
  
   stroke(0,0,100)
  strokeWeight(3);
  line(-20,-20,180,20);
  
  pop(); 
  
  //agregaré el primer texto aquí ya que más arriba cometí un error que no     supe resolver
  
  push(); 
  rotate(-14);
  fill(0,0,100);
  textAlign(CENTER,CENTER)
  textSize(25);
  textFont('bold');
  text("EL BUEN DISEÑO",70,120);
  pop();
  
  
  push();
  translate(60,250)
  rotate(-15);
  fill(150,90,25);
  square(30,50,100);
  pop();
  
  push();
  fill(0,0,80);
  translate(10,220);
  rotate(-10);
  triangle(60, 100, 116, 40, 172,150);
  pop(); 
  
  //agregaré la funcion de vértices - vertex();
  //esta función si o si debe estar encerrada entre beginShape(); y            endShape(); 
  //vertex(posVerticeX, posVérticeY)
   push();
  beginShape();
  fill(150,90,25);
   vertex(-250,-100);
   vertex(-50,-240);
   vertex(-30,-10);
  endShape(CLOSE);
  pop();
}
  //traté de posicionar el triángulo hechi con vertex(); cerca de la esquina
  //al parecer mi error más arriba es el (*0,75)
  // puse una coma en vez de un punto y eso ha estado alterando todo mi lienzo
  function mousePressed(){
    saveCanvas('solemne01-danyan-renata' , 'png');
}
