
const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then(respuesta => respuesta.json());
}




export const productServices = {
    listaProductos,
    detalleProducto,
}
