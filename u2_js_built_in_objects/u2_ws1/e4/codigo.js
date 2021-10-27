/**Utilizando el programa anterior haz que al llegar
 * a 0 se cargue la página de google, para ello
 * puedes utilizar el objeto location
 */
// location.href="https://google.es";

setTimeout(muestra_seg, 1000);
var segundos = 7;

function muestra_seg(){
    document.write(segundos-- + '<br>');

    if (segundos >= 0) 
        setTimeout(muestra_seg, 1000);
    else {
        location.href="https://google.es";
    }
}