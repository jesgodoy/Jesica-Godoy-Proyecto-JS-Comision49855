const formulario = document.getElementById("formulario-compra")




let contenidoFormulario= document.createElement("div")
contenidoFormulario.innerHTML=`
<form id="formulario-compra">
    <div class="d-flex mt-5">
        <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" requeride>
        </div>
        <div class="mb-3">
        <label for="apellido" class="form-label">Apellido</label>
        <input type="text" class="form-control" id="apellido" requeride>
        </div>
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" requeride>
        </div>
    </div>
    <div class="mb-3">
        <label for="direccion" class="form-label">Dirección</label>
        <input type="" class="form-control" id="direccion" requeride>
    </div>
    <div class="mb-3">
        <label for="fecha" class="form-label">Fecha de retiro</label>
        <input type="date" class="form-control" id="fecha" requeride>
    </div>
    <div class="mb-3">
    <select name="pago" id="pago" requeride>
        <option value="">seleccionar</option>
        <option value="efectivo">Efectivo</option>
        <option value="efectivo">Tarjeta</option>
    </select>
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>

`
formulario.append(contenidoFormulario)
