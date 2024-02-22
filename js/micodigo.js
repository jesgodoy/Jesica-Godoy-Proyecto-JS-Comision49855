const contenedorProductos = document.getElementById("contenedor-productos")
const botonesFiltro = document.querySelectorAll(".botones-filtro")



function cargarProducto(filtro){
    
    contenedorProductos.innerHTML="",
    filtro.forEach((producto)=>{
    
    let contenidoProducto = document.createElement("div")
    contenidoProducto.innerHTML=`
    
    <div class="card">
        <div class="img-body container pt-3">
        <img src="${producto.img}" class="card-img-top">
        </div>
        <div class="card-body">
            <h4 class="card-title text-center">${producto.nombre}</h4>
            <h4 class="card-text text-center">$${producto.precio}</h4>
            <div class="text-center">
            <button type="button" class="btn btn-primary" id="boton-comprar" >Comprar</button>
            </div>
        </div>
    </div>
    `
    contenedorProductos.appendChild(contenidoProducto)
})
}
cargarProducto(productosFebrero);


botonesFiltro.forEach(boton =>{
    boton.addEventListener("click", (e)=>{

        botonesFiltro.forEach(boton=>boton.classList.remove("active"))
        e.currentTarget.classList.add("active")
        if(e.currentTarget.id !="productos"){
            const botonesCategorias= productosFebrero.filter(producto=> producto.categoria === e.currentTarget.id)
        cargarProducto(botonesCategorias);
        }else{
            cargarProducto(productosFebrero)
        }
        
    } )
})
















/*productosFebrero.forEach((producto)=>{
    
    
    let contenidoProducto = document.createElement("div")
    contenidoProducto.innerHTML=`
    
    <div class="card">
        <div class="img-body container pt-3">
        <img src="${producto.img}" class="card-img-top">
        </div>
        <div class="card-body">
            <h4 class="card-title text-center">${producto.nombre}</h4>
            <h4 class="card-text text-center">$${producto.precio}</h4>
            <div class="text-center">
            <button type="button" class="btn btn-primary">Comprar</button>
            </div>
        </div>
    </div>
    `
    contenedorProductos.appendChild(contenidoProducto)
})*/