import { useParams } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { Button, COLORS } from '../../globalStyles'
import { useContext, useEffect, useState } from 'react'
import { httpRequest, HTTP_METHODS } from '../../utils/HttpRequest'
import { currencyFormat } from '../../utils/CurrencyFormat'
import { dateFormat } from '../../utils/DateFormat'
import { UserContext } from '../../contexts/UserContext'
import { Alert } from '../../components/Alert'

export const EventDetail = () => {

  const { id } = useParams()
  const [event, setEvent] = useState({})
  const { user } = useContext(UserContext)

  useEffect (() => {
    loadEvent()
  }, [id])

  const loadEvent = async () => {
    try {
      const response = await httpRequest({
        method: HTTP_METHODS.GET,
        endpoint: `/events/${id}`
      })

      const {data} = response
      setEvent(data)

    } catch (error) {
      // TODO
    }
  }

  const joinToEvent = () => {
    if (user.isAuth) { // puede unirse al evento
      // TODO: taller final :D
      // registrarlo al evento
      // si sale bien: redireccionarlo a confirmation-screen
      // si sale mal: mostrar una alerta con la restricción
    } else {
      Alert ({
        title: 'Autenticación requerida',
        text: 'Para unirte al evento debes estar autenticado'
      })
    }
  }

  return (
    <Layout>
      <h2>{event.name}</h2>
      <div>
        <img src={event.image} width="100%" />
      </div>
      <div>
        <p>{event.description}</p>
        <p>{event.place}</p>
        <p>{dateFormat(event.date)}</p>
        <p>{event.idCategory}</p>
        <p>{event.price === 0 ? 'Gratuito': currencyFormat(event.price)}</p>
      </div>
      <Button onClick={joinToEvent} color={COLORS.secondary}>Quiero participar</Button>
    </Layout>
  )
}
