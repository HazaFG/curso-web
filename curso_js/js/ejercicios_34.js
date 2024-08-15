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

console.log("\nSolucion de mircha:\n")

const recortarTexto = (chainText = " ", longitud = undefined) =>
    (!chainText)
    ? console.warn("No ingresaste ninguna cadena de texto")
    : console.info(chainText.slice(0, longitud))

recortarTexto("Hola mundo", 4)

// Las cadenas de texto tienen un metodo que se llama slice que tiene varias opciones, pero para esta ejemplo, recibe 2 parametros:

    // El primero es desde que caracter empieza, y el segundo es hasta donde se detiene:

    // Ejemplo: slice(inicio, final)


// ====================================================================================================================================================================================================================================================================================================================================================================================================================================

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

console.log("\nEjercicio 3:\n")

const separar = (texto, digitoSeparador) => {
    const [] = texto;
    console.log(texto.split(digitoSeparador))
}

separar("Hola que tal", ' ')

// SOLUCION DE MIRCHA: 

console.log("\nSolucion de mircha\n")

const separarTexto = (text, separador = undefined) => 
    (!text)
    ? console.warn("No has ingresado ninguna cadena de texto")
    : (separador === undefined) 
        ? console.warn("No ingresaste el caracter que separa jeje")
        : console.info(text.split(separador))

separarTexto("Hola que tal", ' ')


// ====================================================================================================================================================================================================================================================================================================================================================================================================================================


// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

console.log("\nEjercicio 4:\n")

const repetir = (letras, repeticiones) => {
    for(let i = 0; i < repeticiones; i++){
        console.info(`${i} ${letras}`);
    }
}

repetir("Hola Mundo", 5)

// SOLUCION DE MIRCHA

console.log("\nSolucion de Mircha: \n")

const repetirTexto = (textooo = "", veces = undefined) => {
    if(!textooo){
        //Recuerda que return hace que ahi termine la funcion
        return console.warn("No ingresaste ningun texto")
    }

    if(veces === undefined)
        return console.warn("No ingresaste el numero de veces a repetir el texto");

    if(veces === 0)
        return console.error("El numero de veces no puede ser de 0")

    if(Math.sign(veces) === -1) 
        return console.error("El numero no puede ser negativo")

    for(let y =1; y<=veces; y++){
        console.info(`${textooo}, ${y}`)
    }
}


repetirTexto("Hola mundo", 5)