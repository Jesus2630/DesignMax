fetch("/json/productos.json")
.then(response => response.json())
.then(data => {
    console.log(data)
    const masculino = document.getElementById("productos-container");

    data.forEach(element => {
        masculino.innerHTML += `
        <article class="producto">
                    <img src=${element.Imagen} class="img-producto"alt="">
                    <div class="producto__info" id="producto-info">
                        <h3 class="producto__heading">${element.Producto}</h3>
                        <div class="producto__calif">
                            <div>
                                <i class='bx bxs-star' style="color:#cac736"></i>
                                <i class='bx bxs-star' style="color:#cac736"></i>
                                <i class='bx bxs-star' style="color:#cac736"></i>
                                <i class='bx bxs-star' style="color:#cac736"></i>
                                <i class='bx bx-star'></i>
                            </div>
                            <p class="producto__precio">${element.Precio}</p>
                        </div>
                        <button class="producto__btn">Agregar al Carrito</button>
                    </div>
                </article>
        `
    });
});