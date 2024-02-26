const iconoCarrito = document.getElementById("icono-carrito")




const abrirCarrito = ()=> {
    
    let contenidoModal = ``
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
                    <div >${producto.precio * producto.cantidad}</div>
                    <button class="boton-modal boton-eliminar"><i class=" fa-solid fa-trash-can" style="color: #c700b6;"></i></button>
                </div>

               `

        })
        
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
iconoCarrito.addEventListener("click", abrirCarrito)


function restarCantidad(event) {
    const productoDiv = event.target.closest('.contenido-modal');
    const nombreProducto = productoDiv.querySelector('div').textContent;

    // Encontrar el producto en el carrito
    const producto = carrito.find(item => item.nombre === nombreProducto);
    if (producto && producto.cantidad > 1) {
        producto.cantidad--;
        abrirCarrito();
    }
}

function sumarCantidad(event) {
    const productoDiv = event.target.closest('.contenido-modal');
    const nombreProducto = productoDiv.querySelector('div').textContent;

    // Encontrar el producto en el carrito
    const producto = carrito.find(item => item.nombre === nombreProducto);
    if (producto) {
        producto.cantidad++;
        abrirCarrito();
    }
}

function eliminarProducto(event) {
    const productoDiv = event.target.closest('.contenido-modal');
    const nombreProducto = productoDiv.querySelector('div').textContent;

    // Encontrar el índice del producto en el carrito
    const index = carrito.findIndex(item => item.nombre === nombreProducto);
    if (index !== -1) {
        carrito.splice(index, 1);
        abrirCarrito();
    }
}
/*
//cree las funciones para ver si funciona
function restarCantidad(){
    
}
function sumarCantidad(){
    
    
}


function eliminarProducto(id){
    const idAgregadoCarrito = carrito.findIndex((x)=>x.id === id)
    console.log(idAgregadoCarrit)
    
}
*/
