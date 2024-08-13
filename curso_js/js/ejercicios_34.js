console.log("Ejercicios de Logica de programación")
console.log("\n")

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

console.log("Ejercicio 1:\n")

const contar = (cadenaDeTexto) => {
    let cantidad = cadenaDeTexto.length
    console.log(`La cantidad de caracteres de esa cadena es: ${cantidad}`, cantidad) //podemos ponerlo como interpolacion de variable o como cantidad de numero
}

contar("Hola mundooo")

// SOLUCION DE MIRCHA: 

console.log("Solucion de mircha:\n")

const contarCaracteres = (cadenaLetras = "") => 
    (!cadenaLetras) 
    ? console.warn(`No escribiste nada bro`) 
    : console.info(`La cadena tiene ${cadenaLetras.length} caracteres`)

contarCaracteres("Hola mundo")

// ====================================================================================================================================================================================================================================================================================================================================================================================================================================

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

console.log("\nEjercicio 2:\n")

const recortar = (cadena, cantidad) => {
    console.log("\n")
    const [] = cadena;
    
    for(let i = 0; i<cantidad; i++){
        console.log(cadena[i])
    }

}

recortar("Hola mundo", 4)

// SOLUCION DE MIRCHA: 






// ====================================================================================================================================================================================================================================================================================================================================================================================================================================

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

console.log("\nEjercicio 3:\n")

const separar = (texto) => {
    const [] = texto;
    console.log(texto.split(" "))
}

separar("Hola que tal")

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

console.log("\nEjercicio 4:\n")

const repetir = (letras, repeticiones) =>{
    for(let i = 0; i<repeticiones; i++){
        console.log(letras)
    }
}

repetir("PEPO", 5)