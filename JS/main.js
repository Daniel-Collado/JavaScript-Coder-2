/*jshint esversion: 6 */

const contenedor = document.getElementsByClassName("row");

const arrayElementos = [
    {
        id: 1,
        imagen: "img1.jpeg",
        nombre: "Maceta Escalera I",
        precio: 7300,
        cantidad: {
            placeholder:'Cantidad'
        }
    },
    {
        id:2,
        imagen: "img2.jpeg",
        nombre: "Maceta Escalera II",
        precio: 7300,
        cantidad: {
            placeholder:'Cantidad'
        }    
    },
    {
        id:3,
        imagen: "img3.jpeg",
        nombre: "Maceta Caldero",
        precio: 8900,
        cantidad: {
            placeholder:'Cantidad'
        } 
    },
    {
        id:4,
        imagen: "img4.jpeg",
        nombre: "Maceta Penta",
        precio: 8900,
        cantidad: {
            placeholder:'Cantidad'
        }       
    },
];



const contenedorCards = document.createElement("div");
contenedorCards.setAttribute("id", "contenedorCards");
contenedorCards.className = "col-sm-12 col-md-6 col-lg-4 estiloCards";



/*const cards = [
    {
    imagen: "img1.jpeg",
    titulo: "Card title 1",
    precio: "2000",
    cantidad: "1",
},
    {
    imagen: "img2.jpeg",
    titulo: "Card title 1",
    precio: "2000",
    cantidad: "1",
},
];*/

fetch('JSON/imagenes.json')
.then(response => response.json())
.then(data => {
    const imagenes = data.imagenes;
    arrayElementos.forEach((producto, indice) => {
    
    const imagen = imagenes[indice];
    producto.imagen = imagen.ruta;
    crearCard(producto);
    });
})
.catch(error => console.log('Error al leer el archivo JSON:', error));

function crearCard(producto){
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

    const boton = document.createElement("a");
    boton.href = "#";
    boton.className = "btn btn-primary";
    boton.textContent = "Ir a algún lado";
    
    const inputCantidad = document.createElement("input");
    inputCantidad.type = "number";
    inputCantidad.placeholder = "cantidad";
    inputCantidad.className = "form-control";

    cardBody.appendChild(titulo);
    cardBody.appendChild(precio);
    cardBody.appendChild(boton);
    cardBody.appendChild(inputCantidad);
    cardElement.appendChild(imagen);
    cardElement.appendChild(cardBody);
    contenedorCards.appendChild(cardElement);
    contenedor[0].appendChild(contenedorCards);
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



if (JSON.parse(localStorage.getItem("carrito"))) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
    carrito = [];
}


//const contenedorCards = document.getElementById('contenedorCards');

