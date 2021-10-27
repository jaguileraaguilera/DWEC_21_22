function volumenEsfera(radio) {
    return (4/3)*areaCirculo(radio)*radio;
}

function areaCirculo(radio) {
    return Math.PI*(radio**2);
}