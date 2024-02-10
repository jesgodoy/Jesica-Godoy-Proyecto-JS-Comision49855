
let carrito = []

//traer por Id el contenedor creado en html
const contenedoProductos = document.getElementById("contenedor-productos")

productosFebrero.forEach((producto) =>{
    const tarjetaProducto = document.createElement("div")
    //le doy una clase al div creado
    tarjetaProducto.className = "tarjeta-producto"
        
    tarjetaProducto.innerHTML =`
    <img class="imagen-porducto" src ="${producto.img}">
    <h3 class="titulo-producto">${producto.nombre}</h3>
    <h3 class="precio-producto">$ ${producto.precio}</h3>
    <button class = "boton-comprar">Comprar</button>
        
    `
    contenedoProductos.append(tarjetaProducto)
    let comprar = document.querySelector(".boton-comprar")

    comprar.addEventListener("click", ()=>{
        carrito.push({
            nombre: producto.nombre,
            img: producto.img,
            precio: producto.precio,
        })
    console.log(carrito)
    })

})


// abrir el carrito de compras 
const abrirCarrito = document.querySelector(".compra");
const body = document.querySelector("body")

abrirCarrito.addEventListener("click", ()=>{
    body.classList.add("activar")
}) 

//cerrar el carrito de compras
const cerraCarrito = document.querySelector(".cerrar-carrito");
cerraCarrito.addEventListener("click", ()=>{
    body.classList.remove("activar")
})



/*
function cargarCarrito(){
    
}



const contenidoCarriro = document.querySelector(".contenido-carriro")
const productosCarrito =document.querySelector(".productos-carrito")
const precioTotal =document.querySelector(".precio-total")
//tot<l
function {
    productosCarrito.innerHTML = "";
    let compraTotal =0;
    productosCarrito.forEach ((valor, clave) =>{
        compraTotal = compraTotal + valor.precio
    })

}

function agregarAlCarrito (clave){
    if(productosCarrito[clave] == null ){
        productosCarrito[clave] = productosFebrero[clave]

    }
    cargarCarrito()
}*/


