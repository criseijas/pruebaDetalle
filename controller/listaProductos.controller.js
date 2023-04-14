import { productServices } from "../service/product-service.js";

const crearNuevaLinea = (nombre, imagen, precio, id) => {

    const linea = document.createElement("div");
    const contenido = `<img src="${imagen}" alt="imagen producto">
    <h2>${nombre}</h2>
    <p>$ ${precio}</p>
    <p></p>
    <a href="../screens/verProducto.html?id=${id}" class="ver_prod">Ver producto</a>`;

    linea.innerHTML = contenido;
    return linea;
}

const contenido = document.querySelector("[data-producto]");

productServices.listaProductos().then((data) => {

    data.forEach((producto) => {
        const nuevaLinea = crearNuevaLinea(producto.nombre, producto.imagen, producto.precio, producto.id);
        contenido.appendChild(nuevaLinea);
        
    });
})