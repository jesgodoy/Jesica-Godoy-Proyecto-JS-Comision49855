const contenedorProductos = document.getElementById("contenedor-productos")

productos.forEach((producto)=>{
    
    
    let contenidoProducto = document.createElement("div")
    contenidoProducto.innerHTML=`
    <img src="${producto.img}" class="card-img-top" >
    <h3 class="card-title">${producto.nombre}</h3>
    <h3 class="card-text">$${producto.precio}</h3>
    <a href="#" class="btn btn-primary">Comprar</a>
        </div>
    </div>
    `
    contenedorProductos.appendChild(contenidoProducto)
})