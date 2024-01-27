// creo array de los productoas con objetos dentro de el 
const productos = [
    {nombre: "Brownie Clasico", precio: 10000},
    {nombre: "Brownie Frambuesa", precio: 14000},
    {nombre: "Brownie Mix Frutos rojos", precio: 15000},
    {nombre: "Brownie Moca", precio: 11000},
    {nombre: "Brownie Oreo", precio: 15000},
    {nombre: "Chocooreo", precio: 17000},
    {nombre: "Chocotorta", precio: 18300},
    {nombre: "lemon pie", precio: 10800},
    {nombre: "Tiramisú", precio: 9000},
    {nombre: "Rogel", precio: 8000},
    {nombre: "Tarta Frutos del bosque", precio: 10000},
    {nombre: "Cupcakes", precio: 510},
    {nombre:"Shot dulce", precio: 1210},
    {nombre:"Torta de Vainilla", precio: 8510},
    {nombre:"torta de chocolate", precio: 10600},
];
//creo objetos atravez de una funcion constructorasa
const SanValentin =  function(nombre, precio){
    this.nombre = nombre
    this.precio= precio
};
let sanValentin1 = new SanValentin ("Box Love Sorpresa ",15000);
let sanValentin2 = new SanValentin ("Brownie LOVE",21200);
let sanValentin3 = new SanValentin ("Cupcakes de Amor",700);
let sanValentin4 = new SanValentin ("Torta Corazón",15500);

//convierto en array los objeros creados
let  productoSanValentin = [sanValentin1, sanValentin2, sanValentin3, sanValentin4];

// combino los 2 array creados
const listaProductos = productos.concat(productoSanValentin);

//  creo una copia de array original "listadeproductos" para hacer descuento para productos < $12000 
const descuento = 0.15
const productosFebrero = listaProductos.map(producto =>{
    if(producto.precio < 12000){
        return{
            nombre: producto.nombre,
            precio:  Math.round(producto.precio *(1- descuento))
        }
    }else{
        return producto
    }
})

let saludo = prompt(`Hola bienvenido a "DELICIAS" ¿Como es tu nombe?`);

let opciones
do {
    opciones = prompt(`Hola ${saludo}, eligue la opcion por la cual quieres filtrar:\n1-Precio\n2- Producto\n3-Producto y Precio\n4-Salir`)
    switch(parseInt(opciones)){
        case 1: 
        function filtrarPorPrecio(){
            let precioSugerido= parseFloat(prompt("ingrese el precio maximo que espera pagar"));
            let resultadoPorPrecio = productosFebrero.filter((x) => x.precio <= precioSugerido);
            if (resultadoPorPrecio.length > 0){
                console.table(resultadoPorPrecio);
            }else{
                alert(`Lo Sentimos mucho, no dosponemos de productos con precios menores a ${precioSugerido}`);
            }
        }
        filtrarPorPrecio()
        break
        case 2: 
        function filtrarPorProductos(){
            let productoBuscado = prompt(`Ingresa el nombre del productos que quieres comprar`).toUpperCase().trim()
            let resultadoPorProducto = productosFebrero.filter((x) => x.nombre.toUpperCase().includes(productoBuscado))
            if (resultadoPorProducto.length > 0){
                console.table(resultadoPorProducto)
            }else{
                alert(`Lo sentimos, no tenemos el producto que buscas`)
            }
        }
        filtrarPorProductos()
        break
        case 3: 
        function filtrarPorPrecioProducto(){
            let productoBuscado = prompt(`Ingresa el nombre del productos que quieres comprar`).toUpperCase().trim();
            let precioSugerido = parseFloat(prompt("ingrese el precio maximo que espera pagar"));
            const primerFiltro = productosFebrero.filter((x) => x.nombre.toUpperCase().includes(productoBuscado))
            const segundoFiltro = primerFiltro.filter((x) => x.precio <= precioSugerido);
            if (segundoFiltro.length > 0){
                console.table(segundoFiltro)
            }else if (primerFiltro.length > 0){
                alert(`Tenemos ${productoBuscado}, pero su percio es mayor`)
            }
            else{
                alert("No contacmos lo que estas buscando ")
            }
        }
        filtrarPorPrecioProducto()
        case 4: 
            console.log("terminar simulador")
            break
        default:
            alert(`La opcion ingresado no es valida`)

    }
}while ( opciones != 4)
