

const productos = [
    {
        id: 1,
        nombre: "Brownie Clasico", 
        precio: 10000,
        img: "../assets/imagenes/productos/brownie-clasico.jpg"
    },
    {
        id: 2,
        nombre: "Brownie Frambuesa", 
        precio: 14000,
        img: "../assets/imagenes/productos/brownie-frutilla.jpg"
    },
    {
        id: 3,
        nombre: "Brownie Mix Frutos ",      
        precio: 15000,
        img: "../assets/imagenes/productos/brownie-frutosrojos.jpg"
    },
    {
        id: 4,
        nombre: "Brownie Moka", 
        precio: 11000,
        img: "../assets/imagenes/productos/brownie-moka.jpg"
    },
    {
        id: 5,
        nombre: "Brownie Oreo", 
        precio: 15000,
        img: "../assets/imagenes/productos/brownie-oreo.jpg"
    },
    {
        id: 6,
        nombre: "Chocooreo", 
        precio: 17000,
        img: "../assets/imagenes/productos/chocoreo.jpg"
    },
        
    {
        id: 7,
        nombre: "Chocotorta", 
        precio: 18300,
        img: "../assets/imagenes/productos/choco-torta.jpg"
    },
    {
        id: 8,
        nombre: "Lemon Pie", 
        precio: 10800,
        img: "../assets/imagenes/productos/lemon-pie.jpg"
    },
    {
        id: 9,
        nombre: "Tiramisú", 
        precio: 9000,
        img: "../assets/imagenes/productos/tiramisu.jpg"
    },
    {
        id: 10,
        nombre: "Rogel", 
        precio: 8000,
        img: "../assets/imagenes/productos/rogel.jpg"
    },
    {
        id: 11,
        nombre: "Tarta Frutos del bosque", 
        precio: 10000,
        img: "../assets/imagenes/productos/tarta-frutos-rojos.jpg"
    },
    {
        id: 12,
        nombre: "Cupcakes", 
        precio: 510,
        img: "../assets/imagenes/productos/cupcakes.jpg"
    },
    {
        id: 13,
        nombre:"Shot Dulce", 
        precio: 1210,
        img: "../assets/imagenes/productos/shot-dulce.jpg"
    },
    {
        id: 14,
        nombre:"Torta de Vainilla", 
        precio: 8510,
        img: "../assets/imagenes/productos/torta-vainilla.jpg"
    },
    {
        id: 15,
        nombre:"Torta de Chocolate", 
        precio: 10600,
        img: "../assets/imagenes/productos/torta-chocolate.jpg"
    },
];

//uso JSON convertir mi array de objetos en una cadena de texto
let stringProductos = JSON.stringify(productos);
//almaceno la variable stringProductos para amacenarlo en el localStorade
localStorage.setItem(`productos`, stringProductos);

//creo objetos atravez de una funcion constructorasa
const SanValentin =  function(id, nombre, precio, img){
    this.id = id
    this.nombre = nombre
    this.precio= precio
    this.img = img
};
let sanValentin1 = new SanValentin (16, "Box Love", 15000 ,"../assets/imagenes/productos/box-sanvalentin.jpg");
let sanValentin2 = new SanValentin (17, "Brownie LOVE", 21200, "../assets/imagenes/productos/brownie-love.jpg");
let sanValentin3 = new SanValentin (18, "Cupcakes de Amor", 700, "../assets/imagenes/productos/cupcakes-love.jpg");
let sanValentin4 = new SanValentin (19, "Torta Corazón", 15500, "../assets/imagenes/productos/torta-corazon.jpg");

//convierto en array los objeros creados
let  productoSanValentin = [sanValentin1, sanValentin2, sanValentin3, sanValentin4];

// combino los 2 array creados
const listaProductos = productos.concat(productoSanValentin);

//  creo una copia de array original "listadeproductos" para hacer descuento para productos < $12000 
const descuento = 0.15

const productosFebrero = listaProductos.map(producto =>{
    if(producto.precio < 12000){
        return{
            id: producto.id,
            nombre: producto.nombre,
            precio:  Math.round(producto.precio *(1- descuento)),
            img: producto.img,
        }
    }else{
        return producto
    }
});

//traer por Id el contenedor creado en html
let contenedoProductos = document.getElementById("contenedor-productos");
let contenedorFiltros = document.getElementById("contenedor-filtros")
// variable carrito 
let carrito = [];


productosFebrero.forEach((producto)=>{
    //creo variable para crear un div  a travez de javascript
    let contenido = document.createElement("div");

    //le doy una clase al div creado
    contenido.className = "card"
    
    contenido.innerHTML = `
        <img class="imagen-porducto" src ="${producto.img}">
        <h3 class="titulo-producto">${producto.nombre}</h3>
        <h3 class="precio-producto">$ ${producto.precio}</h3>
        <button class = "boton-comprar" >Comprar</button>
        `;

    contenedoProductos.append(contenido); 
    const botonComprar = contenido.querySelector(".boton-comprar");
    botonComprar.addEventListener("click", ()=>{
        carrito.push({
            nombre: producto.nombre,
            img: producto.img,
            precio: producto.precio

        })
        console.log(carrito)
    } )
    
});
/*
let contenidoDeFiltros = document.createElement("div");
contenidoDeFiltros.className = "filtros";
contenidoDeFiltros.innerHTML =`
<h3>Precio</h3>
<>
    <li> <input type="checkbox" class"filtro precio1">De $0 a $10.000</li>
    <li> <input type="checkbox" class"filtro precio2">De $10.000 a $15.000</li>
    <li> <input type="checkbox" class"filtro precio3">De $15.000 a $20.000</li>
     <input type="checkbox" class"filtro precio4">Mayor $20.000</li>


`;

/*
//trae por Id el contenedor creado en html
const verCarrito = document.getElementById("carrito")
verCarrito.addEventListener("click", () => {
    const contenidoCarrito = document.createElement("div")
    verCarrito.className "ver-carrito"
    verCarrito.innerHTML =`
        
    `
})*/


