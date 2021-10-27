/**Utilizando setTimeout() creo un contador hacía 
 * atrás de 60 segundos.
 */

// Primer caso
// setTimeout(muestra_seg, 1000);
// var segundos = 7;

// function muestra_seg(){
//     document.write(segundos-- + '<br>');

//     if (segundos >= 0) 
//         setTimeout(muestra_seg, 1000);
// }

// Segundo caso

// var segundos = 7;
// function muestra_seg(){
//     document.write(segundos + '<br>');
// }

// for (let i = segundos, j = 0; i >= 0; i--, j++)
//     setTimeout(muestra_seg, j*1000);

// Tercer  caso (usando setInterval, los anteriores
// también se pueden hacer con esta función)
var segundos = 5;
setInterval(()=>{document.write(segundos-- + '<br>')}, 1000);
