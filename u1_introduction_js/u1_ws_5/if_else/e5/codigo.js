nota_1 = Number(prompt('Introduzca una nota'));
nota_2 = nota_1 = Number(prompt('Introduzca otra nota'));

trabajo_1 = Number(prompt('Introduzca calificación trabajo'));
trabajo_2 = Number(prompt('Introduzca calificación trabajo'));

media_notas = (nota_1 + nota_2) / 2;
media_trabajos = (trabajo_1 + trabajo_2) / 2;

if ((media_notas >= 4.5) && (media_trabajos >= 4.5)) {
    nota_final = 0.75 * media_notas + 0.25 * media_trabajos;
    if (nota_final >= 5) {
        alert('El alumno está aprobado con un ' + nota_final);
    }
    else {
        alert('el alumno está suspenso con un ' + nota_final);
    }
}
else {
    alert('El alumno no tiene notas lo suficiente elevadas como para hacer medias.')
}

