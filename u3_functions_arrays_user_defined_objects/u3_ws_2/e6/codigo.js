/**Utiliza Arrays para resolver el siguiente problema: Una 
 * empresa paga a sus vendedores en base a comisiones. 
 * Los vendedores reciben $ 200 por semana, 
 * más el 9% de sus ventas brutas de esa semana. 
 * Por ejemplo, un vendedor que gana en total $ 5000 
 * en ventas en una semana recibe $ 200 más el 9 por 
 * ciento de $ 5000, o sea un total de $ 650. 
 * Diseña una web que permita dar de alta a vendedores, 
 * introducir sus ventas e indique cual sería su 
 * sueldo final. */

// nombre : {s_base, ventas, s_total}
var vendedores = []; 

function altaVendedor(nombre) {
    if (!vendedores[nombre])
        vendedores[nombre] = {
            's_base' : 200, 
            'ventas' : 0, 
            's_final' : 200
            } 
}

function calcularSueldoFinal(nombre) {
    vendedores[nombre]['s_final'] = 
        vendedores[nombre]['s_base'] 
        + vendedores[nombre]['ventas']*0.09;
}

function introducirVentas(nombre, importe) {
    vendedores[nombre]['ventas'] = importe;
    calcularSueldoFinal(nombre);
}

altaVendedor('pepe');
//introducirVentas('pepe', 5000);
