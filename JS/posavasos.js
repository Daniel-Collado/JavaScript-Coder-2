/*jshint esversion: 6 */



const contenedorPosavasos = document.getElementsByClassName("contenedorProductosPosavasos");


let carrito = [];

if (JSON.parse(localStorage.getItem("carrito"))) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
    carrito = [];
}

const arrayElementosPosavasos = [
    {
        id: "posavasos-1",
        imagen: "posavasos1.jpeg",
        nombre: "Set de posavasos",
        precio: 9300,
        cantidad: {
            placeholder:'Cantidad'
        }
    },
    {
        id:"posavasos-2",
        imagen: "posavasos2.jpeg",
        nombre: "Set de posavasos",
        precio: 9300,
        cantidad: {
            placeholder:'Cantidad'
        }    
    },
    
];




fetch('../JSON/imagenesPosavasos.json')
.then(response => response.json())
.then(data => {
    const imagenes = data.imagenesPosavasos;
    arrayElementosPosavasos.forEach((producto, indice) => {
    
    const imagen = imagenes[indice];
    producto.imagen = imagen.ruta;
    crearCard(producto);
    });
})
.catch(error => console.log('Error al leer el archivo JSON:', error));


function actualizarNumeroCarrito(){
    const numeroCarrito = document.getElementById('numeroCarrito');
    let cantidadProductos = 0;
    carrito.forEach(producto => {
        cantidadProductos += producto.cantidad;
    });
    numeroCarrito.textContent = cantidadProductos;
}


function agregarCarrito(producto){
    const inputCantidad = document.querySelector(`#inputCantidad${(producto.id)}`);
    const cantidad = parseInt(inputCantidad.value);
    
    if(isNaN(cantidad) || cantidad <= 0){
        swal.fire("Por favor, ingrese una cantidad válida");
        return;
    }

    const productoExistente = carrito.find((p) => (producto.id) == (p.id));
    if(productoExistente){
        productoExistente.cantidad += cantidad;
    } 
    else{
    producto.cantidad = cantidad;
    carrito.push(producto);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarNumeroCarrito();
    Toastify({
        text: `Agregaste el producto ${producto.nombre} al carrito`,
        offset: {
          x: 95, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 20 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
    }).showToast();
    console.log(carrito);
}

document.addEventListener("DOMContentLoaded", function()
{
    actualizarNumeroCarrito();
});

//localStorage.clear();

function crearCard(producto){

    const contenedorCards = document.createElement("div");
    //contenedorCards.setAttribute("id", "contenedorCards");
    contenedorCards.className = "col-sm-12 col-md-6 estiloCards";

    const cardElement = document.createElement("div");
    cardElement.className = "card";  
    
    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.className = "card-img-top";
    imagen.alt = "foto producto";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const titulo = document.createElement("h5");
    titulo.className = "card-title";
    titulo.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.className = "card-text";
    precio.textContent = `$${producto.precio}`;


    const inputCantidad = document.createElement("input");
    inputCantidad.type = "number";
    inputCantidad.placeholder = "Cantidad";
    inputCantidad.className = "form-control";
    inputCantidad.id = `inputCantidad${(producto.id)}`;


    const botonAgregar = document.createElement("button");
    //boton.href = "#";
    botonAgregar.className = "btn btn-color";
    botonAgregar.textContent = "Agregar al carrito";
    botonAgregar.addEventListener("click", () => agregarCarrito(producto));
    

    cardBody.appendChild(titulo);
    cardBody.appendChild(precio);
    cardBody.appendChild(inputCantidad);
    cardBody.appendChild(botonAgregar);
    cardElement.appendChild(imagen);
    cardElement.appendChild(cardBody);
    contenedorCards.appendChild(cardElement);
    contenedorPosavasos[0].appendChild(contenedorCards);
}



/*arrayElementos.forEach((el) => {
    crearCard(el);
    
    
});
    */












/*
const cards = document.querySelectorAll('.card');
arrayElementos.forEach((el, indice) => {
    const card = cards[indice];
    card.querySelector('.card-img-top').src = el.imagen;
    card.querySelector('.card-title').textContent = el.nombre;
    card.querySelector('.card-text').textContent = `$${el.precio}`;
    const inputCantidad = document.createElement('input');
    inputCantidad.type = 'number';
    inputCantidad.placeholder = 'Cantidad';
    card.appendChild(inputCantidad);
});

fetch('JSON/imagenes.json')
.then(response => response.json())
.then(data => {
    const imagenes = data.imagenes;
    const cards = document.querySelectorAll('.card');
    imagenes.forEach((imagen, indice) =>{
        const card = cards[indice];
        card.querySelector('.card-img-top').src = imagen.ruta;
    });
})
.catch(error => console.log('Error al leer el archivo JSON:', error));
*/





//const contenedorCards = document.getElementById('contenedorCards');

