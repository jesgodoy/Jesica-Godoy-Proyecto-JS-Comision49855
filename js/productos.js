const productos = [
    {
        id: 1,
        nombre: "Brownie Clasico", 
        precio: 10000,
        img: "./assets/imagenes/productos/brownie-clasico.jpg",
        cantidad: 1,
        categoria: "brownie",
        seccion: "general"
    },
    {
        id: 2,
        nombre: "Brownie Frambuesa", 
        precio: 14000,
        img: "./assets/imagenes/productos/brownie-frutilla.jpg",
        cantidad: 1,
        categoria: "brownie",
        seccion: "general"
    },
    {
        id: 3,
        nombre: "Brownie Mix Frutos ",      
        precio: 15000,
        img: "./assets/imagenes/productos/brownie-frutosrojos.jpg",
        cantidad: 1,
        categoria: "brownie",
        seccion: "general"
    },
    {
        id: 4,
        nombre: "Brownie Moka", 
        precio: 11000,
        img: "./assets/imagenes/productos/brownie-moka.jpg",
        cantidad: 1,
        categoria: "brownie",
        seccion: "general"
    },
    {
        id: 5,
        nombre: "Brownie Oreo", 
        precio: 15000,
        img: "./assets/imagenes/productos/brownie-oreo.jpg",
        cantidad: 1,
        categoria: "brownie",
        seccion: "general"
    },
    {
        id: 6,
        nombre: "Chocooreo", 
        precio: 17000,
        img: "./assets/imagenes/productos/chocoreo.jpg",
        cantidad: 1,
        categoria: "torta",
        seccion: "general"
    },
        
    {
        id: 7,
        nombre: "Chocotorta", 
        precio: 18300,
        img: "./assets/imagenes/productos/choco-torta.jpg",
        cantidad: 1,
        categoria: "torta",
        seccion: "general"
    },
    {
        id: 8,
        nombre: "Lemon Pie", 
        precio: 10800,
        img: "./assets/imagenes/productos/lemon-pie.jpg",
        cantidad: 1,
        categoria: "tartas",
        seccion: "general"
    },
    {
        id: 9,
        nombre: "Tiramisú", 
        precio: 9000,
        img: "./assets/imagenes/productos/tiramisu.jpg",
        cantidad: 1,
        categoria: "tartas",
        seccion: "general"
    },
    {
        id: 10,
        nombre: "Rogel", 
        precio: 8000,
        img: "./assets/imagenes/productos/rogel.jpg",
        cantidad: 1,
        categoria: "tartas",
        seccion: "general"
    },
    {
        id: 11,
        nombre: "Tarta Frutos del bosque", 
        precio: 10000,
        img: "./assets/imagenes/productos/tarta-frutos-rojos.jpg",
        cantidad: 1,
        categoria: "tartas",
        seccion: "general"
    },
    {
        id: 12,
        nombre: "Cupcakes", 
        precio: 510,
        img: "./assets/imagenes/productos/cupcakes.jpg",
        cantidad: 1,
        categoria: "bocaditos y postres",
        seccion: "general"
    },
    {
        id: 13,
        nombre:"Shot Dulce", 
        precio: 1210,
        img: "./assets/imagenes/productos/shot-dulce.jpg",
        cantidad: 1,
        categoria: "bocaditos y postres",
        seccion: "general"
    },
    {
        id: 14,
        nombre:"Torta de Vainilla", 
        precio: 8510,
        img: "./assets/imagenes/productos/torta-vainilla.jpg",
        cantidad: 1,
        categoria: "torta",
        seccion: "general"
    },
    {
        id: 15,
        nombre:"Torta de Chocolate", 
        precio: 10600,
        img: "./assets/imagenes/productos/torta-chocolate.jpg",
        cantidad: 1,
        categoria: "torta",
        seccion: "general"
    },
];

//creo objetos atravez de una funcion constructorasa
const SanValentin =  function(id, nombre, precio, img, cantidad, categoria, seccion,){
    this.id = id
    this.nombre = nombre
    this.precio= precio
    this.img = img
    this.cantidad = cantidad
    this.categoria = categoria
    this.seccion = seccion
};
let sanValentin1 = new SanValentin (16, "Box Love", 15000 ,"./assets/imagenes/productos/box-sanvalentin.jpg", 1, "bocaditos y postres", "sanvalentin" );
let sanValentin2 = new SanValentin (17, "Brownie LOVE", 21200, "./assets/imagenes/productos/brownie-love.jpg", 1, "brownie", "sanvalentin");
let sanValentin3 = new SanValentin (18, "Cupcakes de Amor", 700, "./assets/imagenes/productos/cupcakes-love.jpg", 1, "bocaditos y postres", "sanvalentin");
let sanValentin4 = new SanValentin (19, "Torta Corazón", 15500, "./assets/imagenes/productos/torta-corazon.jpg", 1, "torta", "sanvalentin");

//convierto en array los objeros creados
let  productoSanValentin = [sanValentin1, sanValentin2, sanValentin3, sanValentin4];

// combino los 2 array creados
const listaProductos = productos.concat(productoSanValentin);

 
let listaProductosJSON = JSON.stringify(listaProductos)
localStorage.setItem("datos", listaProductosJSON )



//  creo una copia de array original "listadeproductos" para hacer descuento para productos < $12000 
const descuento = 0.15

const productosFebrero = listaProductos.map((producto) =>{
    if(producto.precio < 12000){
        return{
            id: producto.id,
            nombre: producto.nombre,
            precio:  Math.round(producto.precio *(1- descuento)),
            img: producto.img,
            cantidad: producto.cantidad,
            categoria: producto.categoria,
            seccion: producto.seccion
        }
    }else{
        return producto
    }
});


