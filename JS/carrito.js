/*jshint esversion: 6 */


const carritoProductos = JSON.parse(localStorage.getItem("carrito")) || [];


const contenedorCarrito = document.createElement("div");
contenedorCarrito.className = "container contenedorCarrito";


const tituloCarrito = document.createElement("h1");
tituloCarrito.textContent = "Carrito de compras";


const tablaCarrito = document.createElement("table");
tablaCarrito.className = "table";


const theadCarrito = document.createElement("thead");


const trTheadCarrito = document.createElement("tr");


const thProducto = document.createElement("th");
thProducto.textContent = "Producto";


const thCantidad = document.createElement("th");
thCantidad.textContent = "Cantidad";


const thPrecio = document.createElement("th");
thPrecio.textContent = "Precio";


const thTotal = document.createElement("th");
thTotal.textContent = "Total";


const tbodyCarrito = document.createElement("tbody");

let totalCompra = 0;

carritoProductos.forEach((producto, indice) => {
    const trTbodyCarrito = document.createElement("tr");
    tbodyCarrito.appendChild(trTbodyCarrito);
    
    const tdProducto = document.createElement("td");
    tdProducto.textContent = producto.nombre;
    trTbodyCarrito.appendChild(tdProducto);

    const tdCantidad = document.createElement("td");
    tdCantidad.textContent = producto.cantidad;
    trTbodyCarrito.appendChild(tdCantidad);

    const tdPrecio = document.createElement("td");
    tdPrecio.textContent = `$${producto.precio}`;
    trTbodyCarrito.appendChild(tdPrecio);

    const tdTotal = document.createElement("td");
    tdTotal.textContent = `$${producto.precio * producto.cantidad}`;
    trTbodyCarrito.appendChild(tdTotal);

    totalCompra += producto.precio * producto.cantidad;

    const tdEliminar = document.createElement("td");
    const botonEliminar = document.createElement("button");
    botonEliminar.className = "btn btn-primary";
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => {
        eliminarProducto(indice);
    });
    tdEliminar.appendChild(botonEliminar);
    trTbodyCarrito.appendChild(tdEliminar);
});

const totalElement = document.createElement("p");
totalElement.className = "compraTotal";
totalElement.textContent = `Total de la Compra: $${totalCompra}`;

const botonComprar = document.createElement("button");
botonComprar.className = "btn btn-success botonComprar";
botonComprar.innerText = "Comprar";
botonComprar.addEventListener("click", () =>{
    swal.fire("Muchas gracias por su compra!");
    carritoProductos.splice(0, carritoProductos.length);
    localStorage.removeItem("carrito");
    setTimeout(() => {
    location.reload();
    }, 2000);
});
contenedorCarrito.appendChild(botonComprar);
document.body.appendChild(contenedorCarrito);

contenedorCarrito.appendChild(tituloCarrito);
contenedorCarrito.appendChild(tablaCarrito);
tablaCarrito.appendChild(theadCarrito);
theadCarrito.appendChild(trTheadCarrito);
trTheadCarrito.appendChild(thProducto);
trTheadCarrito.appendChild(thCantidad);
trTheadCarrito.appendChild(thPrecio);
trTheadCarrito.appendChild(thTotal);
tablaCarrito.appendChild(tbodyCarrito);
contenedorCarrito.appendChild(totalElement);


function actualizarNumeroCarrito(){
    const numeroCarrito = document.getElementById('numeroCarrito');
    let cantidadProductos = 0;
    carritoProductos.forEach(producto => {
        cantidadProductos += producto.cantidad;
    });
    numeroCarrito.textContent = cantidadProductos;
}

function eliminarProducto(indice) {
    Swal.fire({
        title: "Se eliminará el producto del carrito",
        text: "Está seguro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: " #e3e4fd",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar"
      }).then((result) => {
        if (result.isConfirmed) {     
          Swal.fire({
            title: "Producto eliminado",
            text: "El producto ha sido eliminado del carrito",
            icon: "success",
          });
          carritoProductos.splice(indice, 1);
    localStorage.setItem("carrito", JSON.stringify(carritoProductos));
        actualizarNumeroCarrito();
        location.reload();
        }
    });
    }
document.addEventListener("DOMContentLoaded", function(){
    actualizarNumeroCarrito();
});
    
    
    






