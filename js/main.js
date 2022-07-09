/* Llamado a elementos */
const productosMasculino = document.getElementById("masculino");
const productosFemenino = document.getElementById("femenino");
const productosNiños = document.getElementById("niños");


/* CargarEventListeners|Iniciar App :3 */
cargarEventListeners();
function cargarEventListeners(){
    /* Función Scroll Barra Productos */
    window.addEventListener("scroll", barraProductos);

}





function barraProductos(){
    let animacion = document.getElementById("barra-animacion");
    let obtenerPosition = animacion.getBoundingClientRect().top;
    console.log(obtenerPosition);
    let tamañoPantalla = window.innerHeight; 

    if(obtenerPosition < tamañoPantalla){
        animacion.style.animation = "barra-animacion 2s"
    }
}