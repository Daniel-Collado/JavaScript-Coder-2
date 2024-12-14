/*jshint esversion: 6 */

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

console.log(arrayElementos[3]);


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




if (JSON.parse(localStorage.getItem("carrito"))) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
    carrito = [];
}


const contenedorCards = document.getElementById('contenedorCards');

