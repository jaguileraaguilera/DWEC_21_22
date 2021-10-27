var mes = prompt('Introduzca un mes [primera letra en mayúscula]: ');

switch (mes) {
    case 'Enero':
        console.log('31');
        break;
    case 'Febrero':
        console.log('28 o 29');
        break;
    case 'Marzo':
        console.log('31');
        break;
    case 'Abril':
        console.log('30');
        break;
    case 'Mayo':
        console.log('31');
        break;
    case 'Junio':
        console.log('30');
        break;
    case 'Julio':
        console.log('31');
        break;
    case 'Agosto':
        console.log('31');
        break;
    case 'Septiembre':
        console.log('30');
        break;
    case 'Octubre':
        console.log('31');
        break;
    case 'Noviembre':
        console.log('30');
        break;
    case 'Diciembre':
        console.log('31');
        break;
    default :
        console.log('Ha escrito mal el mes o no existe.');

}