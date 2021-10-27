// salir = false;

// for (let i=0; i<10 && !salir; i++) {
//     console.log(i);
//     if (prompt('Deseas continuar?') == 'N')
//         salir = true;
// }

// while (!salir) {
//     if (prompt('Deseas continuar?' == 'N'))
//         salir = true;
// }

let arr = [3, 5, 7];

for (let i of arr) 
   console.log(i); // logs "0", "1", "2", "foo"


for (let i = 0; i < arr.length; i++)
    console.log(arr[i]);
