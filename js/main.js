
const contenedorDestacados = document.getElementById("contenedor-productos-destacados");


const iconoCarrito = document.getElementById("icono-carrito")  
abrirCarrito ()  
iconoCarrito.addEventListener("click", abrirCarrito)
function productosDestacados(seccion){
    productosFebrero.filter((producto)=> producto.seccion === seccion).forEach((producto)=>{
        const contenidoDestacado = document.createElement("div");
        
        contenidoDestacado.innerHTML=`
        
        <div class="card">
        <div class="img-body container pt-3">
        <img src="${producto.img}" class="card-img-top">
        </div>
        <div class="card-body">
            <h4 class="card-title text-center">${producto.nombre}</h4>
            <h4 class="card-text text-center">$${producto.precio}</h4>
            <div class="text-center">
            <button class="btn btn-primary boton-comprar" id="${producto.id}">Comprar</button>
            </div>
        </div>
    </div>
        `
        contenedorDestacados.appendChild(contenidoDestacado);
       }
    
    ) 
    comprar()
    
    

}
productosDestacados("sanvalentin")


fetch



