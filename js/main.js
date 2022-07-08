/* Llamado a elementos */

window.addEventListener("scroll", barraProductos);


function barraProductos(){
    let animacion = document.getElementById("barra-animacion");
    let obtenerPosition = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight; 

    if(obtenerPosition < tamañoPantalla){
        animacion.style.animation = "barra-animacion 2s"
    }
}