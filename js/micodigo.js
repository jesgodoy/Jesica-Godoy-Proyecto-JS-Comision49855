
const contenedorProductos = document.getElementById("contenedor-productos")
const botonesFiltro = document.querySelectorAll(".botones-filtro")
let botonesComprar 



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
            <button class="btn btn-primary boton-comprar" id="${producto.id}">Comprar</button>
            </div>
        </div>
    </div>
    `
    contenedorProductos.append(contenidoProducto)
    })
    comprar()
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





function comprar(){
    botonesComprar = document.querySelectorAll(".boton-comprar")
    //recorro los botones para que en cada uno al hacer click agregue el producto al carrito
    botonesComprar.forEach(botonComprar =>{
        botonComprar.addEventListener("click",cargarProductoAlCarrito )
    })

}
let carrito=[]
function guardarCarrito(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function cargarCarrito(){
    const carritoLS = JSON.parse(localStorage.getItem("carrito"))
    if(carritoLS){
        carrito =carritoLS
    }
}
function cargarProductoAlCarrito(e){
    
    Swal.fire({
        title: 'El producto se agrego al carrito',
        icon: 'success',
        width: 400,
        padding: "2em",
        color: "#716add",
        background: "#fffs",
        backdrop: `
        rgba(45, 16, 33, 0.395)
        `
      });

    const idBoton= e.currentTarget.id
    let productoAgregadoAlCarrito=productosFebrero.find(producto => producto.id === parseInt(idBoton))
    const productoRepetido = carrito.some((x)=> x.id === parseInt(productoAgregadoAlCarrito.id))
    if(productoRepetido){
        carrito.map((pochoclo)=>{
            if(pochoclo.id === productoAgregadoAlCarrito.id){
                pochoclo.cantidad++
            }
        })
        }else{
        carrito.push({
            id: productoAgregadoAlCarrito.id,
            nombre: productoAgregadoAlCarrito.nombre,
            precio: productoAgregadoAlCarrito.precio,
            cantidad: productoAgregadoAlCarrito.cantidad,
            img: productoAgregadoAlCarrito.img,
    })
    guardarCarrito()
    cargarCarrito()
}
    console.log(carrito)
}
        
    





















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