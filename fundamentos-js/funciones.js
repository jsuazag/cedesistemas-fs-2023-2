function saludar (nombre) {
    console.log('Hola!! ', nombre)
}

saludar('Juan')

// sumar
function sumar (n1, n2) {
    //let suma = n1 + n2
    //return suma
    return n1 + n2
}

sumar(10, 7) // 17

// arrow function
const restar = (n1, n2) => {
    //
    //
    return n1 - n2
}

//
export const multiplicar = (n1, n2) => n1 * n2

let n1 = 8
let n2 = 10
multiplicar(n1, n2)


// var / let
const scope = () => {
    if (true) {
        let var1 = 'variable 1'
        var var2 = 'variable 2'
    }
    console.log('var2', var2)
    console.log('var1', var1)
}

const scope2 = () => {
    let var1
    if (true) {
        var1 = 'variable 1'
        var var2 = 'variable 2'
    }
    console.log('var2', var2)
    console.log('var1', var1)
}