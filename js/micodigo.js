
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
        