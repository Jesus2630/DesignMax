/* Llamado a elementos */

/* CargarEventListeners|Iniciar App :3 */
cargarEventListeners();
function cargarEventListeners(){
    /* Función Scroll Barra Productos */
    window.addEventListener("scroll", barraProductos);
    window.addEventListener("scroll", scrollFunction);
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

/* Boton Top */
const botonvolverArriba = document.getElementById("boton-top");


function scrollFunction() {
    if(window.pageYOffset > 600){
        if(!botonvolverArriba.classList.contains("botonEntrada")) {
        botonvolverArriba.classList.remove("botonSalida");
        botonvolverArriba.classList.add("botonEntrada");
        botonvolverArriba.style.display = "block";
        }
    }
    else {
        if(botonvolverArriba.classList.contains("botonEntrada")){
        botonvolverArriba.classList.remove("botonEntrada");
        botonvolverArriba.classList.add("botonSalida");
        setTimeout(function() {
        botonvolverArriba.style.display = "none";
        }, 250)
        }
    }
}

botonvolverArriba.addEventListener("click", backtoTop);

function backtoTop(){
    window.scrollTo(0,0);
}