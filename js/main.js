let mensajePrecio = ""
let continuar = true

const mensajeInicial = "Bienvenid@, ingresá el número correspondiente al producto que quieras adquirir: \n" +
                        "1) Producto 1 \n" +
                        "2) Producto 2 \n" +
                        "3) Producto 3"
function consultarPrecios() {
    let seleccion = prompt(mensajeInicial).trim()
    if(seleccion !== "1" && seleccion !== "2" && seleccion !== "3") {
        alert("Por favor, ingresá un número válido")
        return
    } 
    else{
         switch(seleccion){
        case "1":
            mensajePrecio = "El Producto 1 cuesta $100.00"
            break
        case "2":
            mensajePrecio = "El productao 2 cuesta $50.00"
            break
        case "3":
            mensajePrecio = "El producto 3 cuesta $75.00"
            break
        default:
            console.error("Algo salió mal, este mensaje no debería ser visible")
    }
    alert(mensajePrecio)
    }
}

function preguntarPrecios() {
    while(continuar){
        consultarPrecios()
        continuar = confirm("¿Deseas conocer el valor de otro producto?")
    }
}