console.log("Ejercicios de Logica de programación")
console.log("\n")

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

console.log("Ejercicio 5: \n")

const invertirTexto = (str) => {
    return str.split("").reverse().join("");
}

console.log(invertirTexto("Hola")); // "aloH"


invertirTexto("Hola")


// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contar = (cadena, palabra) => {
    const regex = new RegExp(palabra, "ig"); // "ig" para búsqueda global e insensible a mayúsculas
    const coincidencias = cadena.match(regex); // Obtén todas las coincidencias

    let cuenta;
    if (coincidencias) {
        cuenta = coincidencias.length;
    } else {
        cuenta = 0;
    }
    
    console.log(`La cantidad de veces que apareció "${palabra}" es: ${cuenta}`);
}

contar("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at mi ullamcorper, semper dolor justo in, accumsan ex. Proin lorem rutrum ligula, in vestibulum quam malesuada et. Maecenas ut faucibus enim. Fusce consequat arcu felis, quis semper leo posuere at", "dolor");



// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (fr) =>{
    let fraseVolteada = fr.split("").reverse().join("")

    if(fraseVolteada.toLowerCase() === fr.toLowerCase()){
        console.log("La Palabra es palindromo")
    }else{
        console.log("La palabra no es palindromo")
    }
}

palindromo("anallevaalosolaavellana")

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.