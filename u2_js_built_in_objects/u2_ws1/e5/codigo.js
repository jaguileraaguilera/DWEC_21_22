/**Usando el objeto Date, sus métodos getHours,
 * getMinutes y getSeconds y el método setTimeout()
 * crea un reloj que se actualiza cada segundo.
*/

function clock(){
    let hoy = new Date();
    document.body.innerHTML = `${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}<br>`;
    setTimeout(clock, 1000);
}

setTimeout(clock, 1000);