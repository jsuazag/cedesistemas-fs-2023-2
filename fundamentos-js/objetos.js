const carro = {
    marca: 'chevrolet',
    modelo: 2023,
    color: 'azul',
    nombre: 'onix',
    obtenerOdometro: (tipo) => {
        const kilometros = 15000
        return tipo === 'millas' ? kilometros / 1.6 : kilometros
    }
}

console.log(carro.nombre)
console.log(carro.obtenerOdometro('millas'))