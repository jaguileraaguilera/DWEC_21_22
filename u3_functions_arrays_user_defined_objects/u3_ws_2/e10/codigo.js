/**Una pequeña aerolínea acaba de comprar un 
 * programa para su nuevo sistema de reservas. 
 * Diseña la web encargada de asignar asientos 
 * en cada vuelo de avión de la aerolínea 
 * (capacidad: 10 plazas). 
 * Se debe pedir en primer lugar el tipo de 
 * asiento: "First” (asientos 1 al 5) o 
 * "Turista" (resto). 
 * Una vez escogido un asiento libre, se debe 
 * poder imprimir una tarjeta de embarque 
 * que indique la persona, el número de asiento 
 * y clase de éste (en una nueva ventana). 
 * Deben utilizarse arrays para solucionar 
 * el problema */

function vueloVacio() {
    var vuelo = [];
    for (let i = 0; i < 10; i++){
        (i < 5) ? 
        vuelo.push({'clase' : 'First', 'pasajero' : undefined}) : 
        vuelo.push({'clase' : 'Turista', 'pasajero' : undefined});
    }
    return vuelo;
}


function asignarAsiento(vuelo, nom_pasajero, asiento) {
    if (!vuelo[asiento-1]['pasajero'])
        vuelo[asiento-1]['pasajero'] = nom_pasajero;
    else
        return "asiento ocupado";
}


function tarjetaEmbarque(vuelo, nom_pasajero) {
    let n_asiento = 0;
    for (let i = 0; i < vuelo.length; i++) // averiguamos asiento
        if (vuelo[i]['pasajero'] === nom_pasajero) 
            n_asiento = i + 1;

    if (n_asiento) 
        return [nom_pasajero, n_asiento, vuelo[n_asiento-1]['clase']];
    else 
        return "El pasajero no puede embarcar";
}

// Pruebas
let vuelo = vueloVacio();
asignarAsiento(vuelo, 'antonio', 5);
let billete = tarjetaEmbarque(vuelo, 'antonio');
let billete_erroneo = tarjetaEmbarque(vuelo, 'pepe');
