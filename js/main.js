/* Llamado a elementos */
const imagenesProductos = document.querySelectorAll(".img-producto");

/* CargarEventListeners|Iniciar App :3 */
cargarEventListeners();
function cargarEventListeners(){
    /* Función Scroll Barra Productos */
    window.addEventListener("scroll", barraProductos);

    /* Mostrar imagen en grande */
    imagenesProductos.addEventListener("click", mostrarImagen);
}




/* Funciones */
function barraProductos(){
    let animacion = document.getElementById("barra-animacion");
    let obtenerPosition = animacion.getBoundingClientRect().top;
    console.log(obtenerPosition);
    let tamañoPantalla = window.innerHeight; 

    if(obtenerPosition < tamañoPantalla){
        animacion.style.animation = "barra-animacion 2s"
    }
}

function mostrarImagen(){
    console.log("Hooola?");
}
