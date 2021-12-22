
function main() {
    const onScroll = () => {
        if (document.body.scrollHeight - window.innerHeight >= window.scrollY - 200) {
          // AQUI PODEMOS LANZAR LA PETICIÓN AJAX
          console.log('estoy en el final del scroll');
       
    }}
    
    window.addEventListener('scroll', onScroll) // llamamos a onScroll cuando el usuario hace scroll
}

window.addEventListener("load", main);

