const iconoCarrito = document.getElementById("icono-carrito")




function abrirCarrito () {
    
    let contenidoModal = ``
    let totalCompra = carrito.reduce((total,producto)=> total + (producto.precio * producto.cantidad), 0)
        carrito.forEach((producto)=>{
                contenidoModal +=`
                <div class="contenido-modal">
                
                    <div>${producto.nombre}</div>
                    <div>
                    <img class="imagen-producto-carrito" src="${producto.img}" alt="${producto.nombre}">
                    </div>
                    <div>
                    <button class="boton-modal boton-restar"><i class="fas fa-minus" style="color: #c700b6;"></i></button>
                    <span class="cantidad">${producto.cantidad}</span>
                    <button class="boton-modal boton-sumar"><i class="fa-solid fa-plus" style="color: #c700b6;"></i></button>
                    </div>
                    <div>$${producto.precio * producto.cantidad}</div>
                    <button class="boton-modal boton-eliminar"><i class=" fa-solid fa-trash-can" style="color: #c700b6;"></i></button>
                </div>
               
                
               `

        })
        
        contenidoModal += `
        <div>
        <h3>Total de tu compra es </h3>
        <h3> ${totalCompra}</h3>
        </div>
        `
        
        if(carrito.length === 0){
            contenidoModal = `<h3>Tu carrito esta vacio</h3>`
        } 



    Swal.fire({
        title:'Tu Carrito',
        width: 800,
        position: "top-end",
        showCloseButton:true,
        showConfirmButton:false,
        html: `<div id="main-modal">${contenidoModal}</div>`,
    })
    //recorrer los botones para generar un evento
    const restar = document.querySelectorAll(".boton-restar")
    restar.forEach((resta,) =>{
        resta.addEventListener("click",restarCantidad)
    })
    
    const sumar = document.querySelectorAll(".boton-sumar")
    sumar.forEach((suma)=>{
        suma.addEventListener("click", sumarCantidad)
    })
    const eliminar =document.querySelectorAll(".boton-eliminar")
    eliminar.forEach((elimina)=>{
        elimina.addEventListener("click", eliminarProducto)
    })
    

}





//cree las funciones para ver si funciona
function restarCantidad(e){
    const productoEnCarrito = e.target.closest('.contenido-modal').querySelector('div').textContent
    const index =carrito.find(x => x.nombre === productoEnCarrito )
    
    index && index.cantidad > 1 ? index.cantidad-- :  carrito.splice(index, 1)
    
    abrirCarrito()
    guardarCarrito()
    cargarCarrito()
}

function sumarCantidad(e){
    
    const productoEnCarrito = e.target.closest('.contenido-modal').querySelector('div').textContent
    const index =carrito.find(x => x.nombre === productoEnCarrito )
    index && index.cantidad++
        abrirCarrito()
        guardarCarrito()
    cargarCarrito()

}


function eliminarProducto(e){
    const productoEnCarrito = e.target.closest('.contenido-modal').querySelector('div').textContent
    const index =carrito.findIndex (x => x.nombre === productoEnCarrito )
    //en vez de usar if use operadores avanzados
    index !==-1 && carrito.splice(index, 1)
    abrirCarrito()
    guardarCarrito()
    cargarCarrito()
}

document.addEventListener('DOMContentLoaded', ()=>{
    cargarCarrito()
})


iconoCarrito.addEventListener("click", abrirCarrito)
