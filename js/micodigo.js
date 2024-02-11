//traer por Id el contenedor creado en html para los procuctos
const tarjetasDeProductos = document.getElementById("tarjetas-productos")
let carrito = []
function cargarProductos(){
    productosFebrero.forEach((producto) =>{
        const tarjeta = document.createElement("div")
        //le doy una clase al div creado
        tarjeta.className = "tarjeta"
            
        tarjeta.innerHTML =`
        <img class="imagen-porducto" src ="${producto.img}">
        <h3 class="titulo-producto">${producto.nombre}</h3>
        <h3 class="precio-producto">$ ${producto.precio}</h3>    
        `
        tarjetasDeProductos.append(tarjeta)
        let botonComprar = document.createElement("button")
        botonComprar.innerText="Comprar"
    
        tarjeta.append(botonComprar)
    
        botonComprar.addEventListener("click", ()=>{
        const productoRepetido = carrito.some((x)=>x.id === producto.id) 
            if (productoRepetido === true){
            carrito.forEach((repetido)=>{
                if(repetido.id === producto.id){
                    repetido.cantidad++
                }
            } ) 
            }else{
                carrito.push({
                    id: producto.id,
                    nombre: producto.nombre, 
                    img: producto.img,
                    cantidad: producto.cantidad,
                    precio: producto.precio
                })
            }
            
         
            console.log(carrito)
        })
    })
    
} 


cargarProductos()

//-----------carrito de compras
//abrir el carrito de compras 
const abrirCarrito = document.querySelector(".compra");

const contenedorCarrito =document.getElementById("contenedor-carrito")
abrirCarrito.addEventListener("click", ()=>{
    contenedorCarrito.innerHTML=""
    contenedorCarrito.style.display= "block"
    const carritoHeader = document.createElement("div")
    carritoHeader.className ="carrito-header"
    carritoHeader.innerHTML=`
    <h2>Tu Compra</h2>
    <h2 class="cerrar-carrito">Cerrar</h2>
    `
    contenedorCarrito.append(carritoHeader);
    botoncerrar = document.querySelector(".cerrar-carrito")
    botoncerrar.addEventListener("click", ()=> {
        contenedorCarrito.style.display= "none"
    })

    carrito.forEach((producto)=>{
        let carritoContenido =document.createElement("div")
        carritoContenido.className ="carrito-contenido"
        carritoContenido.innerHTML =`
        <h3>${producto.nombre}</h3>
        <h3>$ ${producto.precio}</h3>
        <h3>${producto.cantidad}</h3>
        <h3>${producto.precio*producto.cantidad}</h3>
        <button class="eliminar-carrito">X</button>
        `
        contenedorCarrito.append(carritoContenido)
        eliminarCarrito = document.querySelectorAll(".eliminar-carrito")
        
        
    })

    const total = 0
    for (let producto of carrito){
        total +=producto.precio * producto.cantidad
    }
    totalCompra = document.createElement ("div")
    totalCompra.className ="total-compra"
    totalCompra.innerHTML= `
    <h2>Su Compra Total Es:</h2>
    <h2>$ ${total}</h2>` 
    contenedorCarrito.append(totalCompra)
    
}) 






