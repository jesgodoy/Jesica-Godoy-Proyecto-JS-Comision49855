
document.addEventListener("DOMContentLoaded", function(){

const contenedorFormularioCompra = document.getElementById("contenedor-formulario-compra")
const carrito = JSON.parse(localStorage.getItem('carrito'))

if(contenedorFormularioCompra && carrito){
    let contenidoFormulario = document.createElement("div")
    contenidoFormulario.className="formularioC"
    contenidoFormulario.innerHTML=`
    <form id="form-compra">
        <div class="d-flex mt-5">
            <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" required>
            </div>
            <div class="mb-3">
            <label for="apellido" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="apellido" required>
            </div>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" required>
            </div>
        </div>
        <div class="mb-3">
            <label for="telefono" class="form-label">Telefono</label>
            <input type="tel" class="form-control" id="telefono" requided>
        </div>
        <div class="mb-3">
            <label for="direccion" class="form-label">Dirección</label>
            <input type="text" class="form-control" id="direccion" required>
        </div>
        <div class="mb-3">
            <label for="fecha" class="form-label">Fecha de retiro</label>
            <input type="date" class="form-control" id="fecha" requide>
        </div>
        <div class="mb-3">
        <select name="pago" id="pago" required>
            <option value="">seleccionar</option>
            <option value="efectivo">Efectivo</option>
            <option value="efectivo">Tarjeta</option>
        </select>
        </div>
        <div>
        <h3>Detalle de tu compra</h3>
        <div id="detalles-compra">${pedido(carrito)}</div>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
    
        <button type="submit" class="btn btn-primary">Comprar/button></button>
        `
    contenedorFormularioCompra.appendChild(contenidoFormulario)
    
    
    const formularioCompra = document.getElementById("form-compra")
    const detalleCompra = document.getElementById("detalles-compra")

    if(formularioCompra){

        formularioCompra.addEventListener("submit", function(e){
            e.preventDefault()
            const nombre = document.getElementById("nombre").value.trim()
            const apellido = document.getElementById("apellido").value.trim()
            const email = document.getElementById("email").value.trim()
            const telefono = document.getElementById("telefono").value.trim()
            const direccion = document.getElementById("direccion").value.trim()
        
        
            const guardarDatosCompra ={
                cliente: {nombre, apellido, email, telefono, direccion},
                detallePedido: carrito
            }
        
            localStorage.setItem("guardarDatosCompra", JSON.stringify(guardarDatosCompra))
        
            localStorage.removeItem("carrito")
        
            Swal.fire({
                title: "Compra Realizada",
                text: "Tu compra ha sido exitosa",
                icon: "success"
              }).then((result) =>{
                if(result.isConfirmed){
                    formularioCompra.reset()
                    detalleCompra. innerHTML =``
                    window.location.href = "../index.html"
                }
              })
            
             
            
              
              
        })
        
        }


}

function pedido(carrito){

    let detallePedido=""
    let totalCompra = carrito.reduce((total,producto)=> total + (producto.precio * producto.cantidad), 0)
        carrito.forEach((producto)=>{
                detallePedido +=`
                <div class="contenido-pedido">
                
                    <div class="text-center">${producto.nombre}</div>
                    <span class="text-center">${producto.cantidad}</span>
                    <div class="text-center">$ ${producto.precio * producto.cantidad}</div>
                    
                </div>

            `

        })
        
        detallePedido += `
        <div class="text-center">
        <h3class="text-center" >Total de tu compra es: $ ${totalCompra} </h3class=>
        </div>
        
        `
    return detallePedido


}



})








