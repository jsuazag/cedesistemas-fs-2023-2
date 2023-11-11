-> post /booking/

params: idEvent
headers: token
return: success (200) / failed (40x)

failed: cuando no hay cupos en ese evento

1. Vamos a registrar el usuario al evento
2. Validar que si exista disponibilidad en ese evento

model: booking: {
    idEvent,
    idUser
}


// opciones para saber cantidad de entradas disponibles desde booking
1. x -> Usar el mismo modelo del modulo de Event
2. Duplicar el modelo (event)
3. x integración por un servicio web
