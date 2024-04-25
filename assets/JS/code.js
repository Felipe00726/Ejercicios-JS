
let form = document.querySelector("#sum")
form.addEventListener("submit", function (evento) {
    evento.preventDefault()

    let numUsuario = parseInt(evento.target.cajon.value)
    let resultado = 0

    for (x = 1; x <= numUsuario; x++) {
        resultado = resultado + x

    }

    document.querySelector("#resultado-suma").innerHTML = resultado

})

/* 2*/




let numparoimpar = document.querySelector("#poi")
numparoimpar.addEventListener("submit", function (evento) {
    evento.preventDefault()

    let numpoi = parseInt(evento.target.poiCajon.value)


    if (numpoi % 2 == 0) {
        document.querySelector("#paroimpar").innerHTML = "El numero ingresado es par"
    } else if (numpoi % 2 != 0) {

        document.querySelector("#paroimpar").innerHTML = "El numero ingresado es impar"
    } else {
        document.querySelector("#paroimpar").innerHTML = "Ingrese un numero"
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

        } else if ( genero == "mujer") {
            document.querySelector("#respuesta").innerHTML = "Su premio es un jugo y una porción de pizza Hawaiana"
        }
    }else if(edad >= 18){
        if (genero == "hombre") {

            document.querySelector("#respuesta").innerHTML = "Su premio es una cerveza y una porción de pizza tres carnes"

        } else if (genero == "mujer") {

            document.querySelector("#respuesta").innerHTML = "Su premio es una cerveza y una porción de pizza Hawaiana"
        }

    }else{
        document.querySelector("#respuesta").innerHTML = "no"
    }




})


/* 4 */


let multiplicacion = document.querySelector("#form-multiplicación")
multiplicacion.addEventListener("submit", (ingresarNum) =>{
    ingresarNum.preventDefault

    let numero = parseInt(ingresarNum.target.numMulti.value)  
    let veces = parseInt(ingresarNum.target.numVeces.value)
    let resultadoMul = 0

    for ( X= 0;  ; index++) {
       
        
    }


})