
let contenidoHtml = "";
  
    carrito.forEach((producto)=> {
      contenidoHtml += `
        <div class="producto">
          <img src="${producto.img}" alt="${producto.nombre}" />
          <h3>${producto.nombre}</h3>
          <p>Precio: $${producto.precio}</p>
          <p>Cantidad: ${producto.cantidad}</p>
        </div>
      `;
    })

