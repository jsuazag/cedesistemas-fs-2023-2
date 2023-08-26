const nombres = ['luis', 'martin', 'leo', 'maria', 'juliana']

console.log(nombres[1])

// agregar nuevo nombre
nombres.push('alex')

// buscar
// (params) => 
const personaEncontrada = nombres.find( cadaNombre => cadaNombre === 'alex' )
console.log('personaEncontrada', personaEncontrada)

// old way
const personaEncontradaTradicional = nombres.find( function (item) {
    return item === 'alex'
})

// ejemplo
const buscarPersona = (arreglo, nombreABuscar) => {
    return arreglo.findIndex( item => item === nombreABuscar )
}
const index = buscarPersona(nombres, 'alex')
console.log(nombres[index])


// filtrar
const nuevaListaNombres = nombres.filter( item => item !== 'leo' )
console.log(nuevaListaNombres)

const empiezanPorM = nombres.filter( item => item.charAt(0) === 'm')
console.log(empiezanPorM)

// recorrer
nombres.map(item => console.log('item', item))
