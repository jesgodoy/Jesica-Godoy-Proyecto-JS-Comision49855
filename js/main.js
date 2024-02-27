
const contenedorDestacados = document.getElementById("contenedor-productos-destacados");
const contenedorComentarios = document.getElementById("contenedor-comentarios")
const contenedorEmpleados = document.getElementById("contenedor-empleados")

function productosDestacados(seccion){
        const titulo = document.createElement("h1")
        titulo.className="titulo"
        titulo.innerText =`Porductos Destacados de Febrero`
        contenedorDestacados.appendChild(titulo)

        const parrafo = document.createElement("p")
        parrafo.className="parrafo"
        parrafo.innerText =`conoce los nuevos productos creados para que disfrutes el mes del AMORs`
        contenedorDestacados.appendChild(parrafo)

        const destacadosDiv = document.createElement("div")
        destacadosDiv.className="div-index"
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
        destacadosDiv.appendChild(contenidoDestacado);
        }
        
        )
        contenedorDestacados.appendChild(destacadosDiv) 
    comprar() 
}
productosDestacados("sanvalentin")




const urlComentarios = 'https://jsonplaceholder.typicode.com//comments?_limit=4';

fetch(urlComentarios)
    .then(response =>response.json())
    .then(data =>{
        const titulo = document.createElement("h2")
        titulo.className="titulo"
        titulo.innerText =`Comentarios`
        contenedorComentarios.appendChild(titulo)

        const parrafo = document.createElement("p")
        parrafo.className="parrafo"
        parrafo.innerText =`aqui algunos comentarios de lo que piensan nuestros clientes`
        contenedorComentarios.appendChild(parrafo)

        const comentariosDiv = document.createElement("div")
        comentariosDiv.className = "div-index"
        data.forEach(comments=>{
            const comentario = document.createElement("div")
            comentario.innerHTML=`
            <div class="card " style="width: 18rem;">
            <div class="card-body card-comentarios">
                <h5 class="card-title">${comments.email}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${comments.body}</h6>
                
            </div>
            </div>
            `
        comentariosDiv.appendChild(comentario)   
        })
        contenedorComentarios.appendChild(comentariosDiv)
    })
    .catch(error => console.error('Se produjo un error al obtener los usuarios:', error));


const urlTrabajadore = 'https://api.escuelajs.co/api/v1/users?limit=4';
fetch(urlTrabajadore)
    .then(response =>response.json())
    .then(data =>{
        const titulo = document.createElement("h2")
        titulo.className="titulo"
        titulo.innerText =`Porductos Destacados de Febrero`
        contenedorEmpleados.appendChild(titulo)

        const parrafo = document.createElement("p")
        parrafo.className="parrafo"
        parrafo.innerText =``
        contenedorEmpleados.appendChild(parrafo)

        const trabajadoresDiv = document.createElement("div")
        trabajadoresDiv.className = "div-index"
        data.forEach(usuario=>{
            const trabajador = document.createElement("div")
            trabajador.innerHTML=`
            <div class="card" style="width: 18rem;">
                <div class= text-center>
                <img src="${usuario.avatar}" class="rounded-circle w-50" >
                </div>
                <div class="card-body card-empleados">
                    <h5 class="card-title">${usuario.name}</h5>
                    <p class="card-text">${usuario.email}</p>
        
                </div>
            </div>
            `

        trabajadoresDiv.appendChild(trabajador)   
        })
        contenedorEmpleados.appendChild(trabajadoresDiv)
    })
    .catch(error => console.error('Se produjo un error al obtener los usuarios:', error));




