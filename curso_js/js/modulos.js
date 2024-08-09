import saludar, { PI, Saludar, usuario } from "./constantes.js"
import {aritmetica as calculos} from "./aritmetica.js"

console.log("Archivo modulos.js")
console.log(PI, usuario)

// console.log(aritmetica.sumar(5,5))
// console.log(aritmetica.sumar(5,5))
console.log(calculos.sumar(5,5))
console.log(calculos.restar(25,5))

saludar() //Si quieres usar esa funcion la tienes que mandar a llamar desde constantes, es una funcion por default

let saludo = new Saludar()
saludo