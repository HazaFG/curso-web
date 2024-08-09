function sumar (a,b){
    return a + b
}

function restar (a,b){
    return a - b
}

// Podemos mandar ambas funciones por un objeto y ya no tenemos que meter cada una de las funciones individualmente si las queremos emplear
export const aritmetica = {
    sumar,
    restar
}


