import { productServices } from "../service/product-service.js";


const obtenerInfo = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    
    const crearNuevaLinea = (nombre, imagen, descripcion) => {

        const linea = document.createElement("div");
        const contenido = `<img src="${imagen}" alt="imagen producto">
        <h2>${nombre}</h2>
        <p>${descripcion}</p>
        <a href="../screens/index.html">Volver</a>`;
    
        linea.innerHTML = contenido;
        return linea;
    }
    
    const contenido = document.querySelector("[data-desc]");

    
    productServices.detalleProducto(id).then(producto => {
        const nuevaLinea = crearNuevaLinea(producto.nombre, producto.imagen, producto.descripcion);
        contenido.appendChild(nuevaLinea);
        
    });
}

obtenerInfo();