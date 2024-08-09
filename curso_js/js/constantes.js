export const PI = Math.PI;

export let usuario = "Haza"


const password = "yeya"
// CUANDO SE QUIERE HACER UNA EXPORTACION POR DEFECTO SE TIENE QUE PONER ABAJO DE DONDE SE DECLARA LA VARIABLE, NO PONER EL export default al momento de la declaracion de la variable

// export default password
//Esto significa que al momento donde se importe el archivo carga esa funcion por defecto

// Una funcion expresada se forma cuando a una variable le asignas el valor de una funcion anonima
const hello = () => console.log("HOla")

// Solo se puede tener una exportacion default, no se puede tener 2 o mas
export default function saludar (){
    console.log("Hola modulos ES6")
}

//LAS UNICAS QUE PERMITEN LA DECLARACION Y LUEGO HACERLAS DEFAULT SON LAS FUNCIONES Y TAMBIEN LAS CLASES AJAJAJA

export class Saludar{
    constructor(){
        console.log("Hola Clases ES6 ")
    }
}



