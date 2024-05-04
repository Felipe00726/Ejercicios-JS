
// Ejercicio 1

function alertas(texto) {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: texto,

    });
}






let form = document.querySelector("#sum")
form.addEventListener("submit", function (evento) {
    evento.preventDefault()

    let numUsuario = parseInt(evento.target.cajon.value)
    let resultado = 0


    for (x = 1; x <= numUsuario; x++) {
        resultado = resultado + x
    }

    document.querySelector("#resultado-suma").innerHTML = `Respuesta = ${resultado}`





})

/* 2*/




let numparoimpar = document.querySelector("#poi")
numparoimpar.addEventListener("submit", function (evento) {
    evento.preventDefault()

    let numpoi = parseInt(evento.target.poiCajon.value)


    if (isNaN(numpoi)) {

        alertas("Ingrese un número")

    } else {
        if (numpoi % 2 == 0) {
            document.querySelector("#paroimpar").innerHTML = "El número ingresado es par"
        } else {

            document.querySelector("#paroimpar").innerHTML = "El número ingresado es impar"
        }

    }
})


/* 3 */

let pizza = document.querySelector("#pizzeria")
pizza.addEventListener("submit", (ingresar) => {
    ingresar.preventDefault()

    let edad = parseInt(ingresar.target.ingresarEdad.value)
    let genero = ingresar.target.menu.value

    if (edad <= 10) {
        if (genero == "hombre") {

            document.querySelector("#respuesta").innerHTML = "Su premio es un jugo y una porción de pizza tres carnes"

        } else if (genero == "mujer") {
            document.querySelector("#respuesta").innerHTML = "Su premio es un jugo y una porción de pizza Hawaiana"
        }
    } else if (edad >= 18) {
        if (genero == "hombre") {

            document.querySelector("#respuesta").innerHTML = "Su premio es una cerveza y una porción de pizza tres carnes"

        } else if (genero == "mujer") {

            document.querySelector("#respuesta").innerHTML = "Su premio es una cerveza y una porción de pizza Hawaiana"
        }

    } else {

        alertas("No recibes ningún premio, lo sentimos😢")
    }




})




/* 4*/

let precioOrden = []

let menu = document.querySelector("#menu-productos")
menu.addEventListener("submit", e => {
    e.preventDefault()

    let productos = ["hamburguesa", "hot dog", "pizza", "burrito"]
    let precio = [8000, 7000, 5000, 7500]

    let inputProducto = e.target.ingProducto.value.toLowerCase()

    if (inputProducto == "pagar") {
        let resultado = 0
        precioOrden.forEach(precioFinal => {
            resultado = resultado + precioFinal
        });

        document.querySelector("#answer").innerHTML = `Debe cancelar : ${resultado}`
        precioOrden = []
    } else {

        let indiceProducto = productos.indexOf(inputProducto)
        if (indiceProducto == -1) {
            alertas("Ingrese un producto")
        } else {
            precioOrden.push(precio[indiceProducto])
        }
    }
})










/* 5 */


let multiplicacion = document.querySelector("#form-multiplicacion")
multiplicacion.addEventListener("submit", (ingresarNum) => {
    ingresarNum.preventDefault()

    let numero = (ingresarNum.target.numMulti.value)
    let veces = (ingresarNum.target.numVeces.value)

    if (veces >= 99) {
        document.querySelector("#resultado3").innerHTML = "Rango no disponible"
        return
    } 

    document.querySelector("#resultado3").innerHTML = ""

    for (let x = 1; x <= veces; x++) {

        let resultadoMul = numero * x


        document.querySelector("#resultado3").innerHTML += ` ${resultadoMul} `
    }

})


/* 6 */

let prom = document.querySelector("#formUsuario")
prom.addEventListener("submit", (ingresarProm) => {
    ingresarProm.preventDefault()

    let valMatricula = 1000000
    let promEstudiante = parseFloat(ingresarProm.target.promUsuario.value)
    let desMatricula = 0


    if (promEstudiante < 3) {
        document.querySelector("#resultPromedio").innerHTML = "No aplica para el descuento de matricula"
    } else if (promEstudiante >= 3 && promEstudiante <= 4) {
        desMatricula = valMatricula * 0.05
        document.querySelector("#resultPromedio").innerHTML = `Tu descuento del 5% es ${desMatricula} `
    } else if (promEstudiante > 4.1 && promEstudiante <= 5) {
        desMatricula = valMatricula * 0.5
        document.querySelector("#resultPromedio").innerHTML = `Felicitaciones tu descuento del 50% es ${desMatricula}`
    } else {
        alertas("Ingrese una nota para validar su descuento de matrícula")
    }

})