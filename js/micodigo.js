let saludo = prompt(`Hola bienvenido a "DELICIAS" ¿Como es tu nombe?`)
alert ("Hola "+saludo+" estoy aqui para ayudarte a realizar tu compra")

// defino variables de los precios de los productos
const vainilla = 175.50
const coco = 230
const limon = 260.80
const chocolate = 350

//defino funcion
const compraTotal= (producto, cantidad) => {return parseFloat(producto)* parseInt(cantidad)}

let ayudaCompra = true

do{ // comiezo el bcle para compra
    let elegirProducto = parseInt(prompt("elegi el sabor de Cupcakes preferido: 1) Vainilla, 2) Coco, 3)Limon, 4)Chocolate 5)otro producto"))
    if(elegirProducto == 1 || elegirProducto == 2 || elegirProducto ==3 || elegirProducto == 4){
        let cantidad = parseInt(prompt("Ingresa aqui la cantidad de cupcakes que quieres Comprar"))
        switch (parseFloat(elegirProducto)){
            case 1:
                resultado = compraTotal(vainilla, cantidad)
                alert(`El monto de tu compra es $ ${resultado}` )
                break
            case 2:
                resultado = compraTotal(coco, cantidad)
                alert(`El monto de tu compra es $ ${resultado}` )
                break
            case 3:
                resultado = compraTotal(limon, cantidad)
                alert(`El monto de tu compra es $ ${resultado}` )
                break
            case 4:
                resultado = compraTotal(chocolate, cantidad)
                alert(`El monto de tu compra es $ ${resultado}` )
                break 
        }
    }else if (elegirProducto == 5){
        let presupuesto = parseInt(prompt("¿ cuanto dinero tenes para pagar?"))
        if(presupuesto >= 175.5 && presupuesto < 5000 ){
            alert("tu presupuesto para compra esta un poco limitado, lo unico que puedo ofrecerte son cupcakes")
            break
        }else if(presupuesto >= 5000 && presupuesto < 6500){
            alert ("puedo ofrecerte una tota de vainilla")
            break
        }else if(presupuesto >= 6500 && presupuesto < 3500){
            alert ("puedo ofrecerte una tota de vainilla o una tarta de frutilla")
            break
        }if(presupuesto >= 3500 ){
            alert ("puedo ofrecerte una tota de vainilla, una tarta de frutilla o una chocotorta")
            break
        }else{
            alert ("lo siento, no disponemos de productos para ofrecerte.")
            break
        }
    }else{
        alert("no ingresaste una opcion valida")
    }

}while(ayudaCompra)