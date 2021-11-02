const btn = document.querySelector('button');
const division = document.querySelector('div');
const parrafo =  document.querySelector('p');
const imagen =  document.querySelector('img');
const encabezado_2 =  document.querySelector('h2');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function cambiaFondo(evt) { // evt (objeto evento, se le puede llamar como se quiera) es un parámetro por defecto que tiene informacion sobre el evento. 
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    evt.target.style.backgroundColor = rndCol;
}

// onclick
btn.addEventListener("click", cambiaFondo);
// btn.onclick = cambiaFondo;
division.onclick = cambiaFondo;
parrafo.onclick = cambiaFondo;
imagen.onclick = cambiaFondo;  
encabezado_2.onclick = cambiaFondo;

// onfocus
btn.onfocus = cambiaFondo;
btn.addEventListener("focus", cambiaFondo);

for (i=0; i<20; i++)
    document.body.innerHTML += "<h1>Esto se crea dinámicamente</h1>"
