// Obtener los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const urlImage = params.get("urlImage");
const nombre = params.get("nombre");
const brand = params.get("brand");
const id = params.get("id")
const estado = params.get("status")
const price = params.get("price")
const pricePe = params.get("pricePe")

// Mostrar los detalles en la página
const contenedorDetalles = document.getElementById("product-containers");

if (nombre && brand && id && estado && price) {
    contenedorDetalles.innerHTML = `
        <div class="product-contenedor">
            <img class="imagen" src="${urlImage}" alt="Producto imagen">

            <div class="description">
                <h1>${nombre}</h1>
                <p>Brand: ${brand}</p>
                <p>Nº Id: ${id}</p>
                <p>Status: ${estado}</p>

                <div class="tarjeta-venta">
                <p class="precio">${price} <span>${pricePe}</span></p>
                <p>Include taxes</p>
                <a class="btn pagar" href="/week06/form.html">Go To Pay</a>
            </div>
        </div>
    `;
} else {
    contenedorDetalles.innerHTML = "<p>No se encontró información del producto.</p>";
}