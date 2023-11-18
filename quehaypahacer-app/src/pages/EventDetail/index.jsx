import { useParams } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { Button, COLORS } from '../../globalStyles'
import { useEffect, useState } from 'react'
import { httpRequest, HTTP_METHODS } from '../../utils/HttpRequest'

export const EventDetail = () => {

  const { id } = useParams()
  const [event, setEvent] = useState({})

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

  return (
    <Layout>
      <h2>{event.name}</h2>
      <div>
        <img src={event.image} width="100%" />
      </div>
      <div>
        <p>{event.description}</p>
        <p>{event.place}</p>
        <p>{event.date}</p>
        <p>{event.idCategory}</p>
        <p>{event.price === 0 ? 'Gratuito': event.price}</p>
      </div>
      <Button color={COLORS.secondary}>Quiero participar</Button>
    </Layout>
  )
}
