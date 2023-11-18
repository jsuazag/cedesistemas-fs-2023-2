import { styled } from "styled-components"
import { COLORS } from "../../../../globalStyles"
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from "react"
import { CategoryContext } from "../../../../contexts/CategoryContext"
import { httpRequest, HTTP_METHODS } from '../../../../utils/HttpRequest'

/* styles */
const TopEventsContainer = styled.section`
  margin: 25px 0;
`

const EventWrapper = styled.div`
  border: 3px solid #ccc;
  border-radius: 10px;
  display: flex;
  margin: 10px 0;
  overflow: hidden;
  background-color: #ccc;

  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
`

const EventContent = styled.div`
  margin-left: 15px;
  h5 {
    font-size: 1.2em;
    line-height: 1.2em;
    margin: 10px 0;
    color: #222;
  }
  p {
    margin: 0;
    color: #222;
  }
`;

const FreeText = styled.p`
  background-color: ${COLORS.info};
  color: ${COLORS.primary};
  padding: 3px 4px;
  border-radius: 3px;
  display: inline;
`
/*
const EVENTS_DATA = [
  { id: 1,
    image: 'https://www.eltiempo.com/files/image_640_428/uploads/2022/07/29/62e3d34873715.jpeg',
    title: 'Desfile de silleteros',
    date: '10/09/2023', location: 'Medellín', is_free: true, price: 0, category: 1
  },
  { id: 2,
    image: 'https://lh5.googleusercontent.com/p/AF1QipMBFBeqhHIkgZRLA2s4FHCkXqy7bWNTYP5HBtq9',
    title: 'Encuentro de comida oriental',
    date: '10/09/2023', location: 'Poblado', is_free: false, price: 150000, category: 2
  },
  { id: 3,
    image: 'https://viajeronomada.com/wp-content/uploads/2020/01/quehacerenmedellin.jpg',
    title: 'Encuentro cultural',
    date: '10/09/2023', location: 'Parque Berrio', is_free: true, price: 0, category: 1
  },
  { id: 4,
    image: 'https://where.com.co/wp-content/uploads/2022/07/sIRVALO-PUES.jpg',
    title: 'Concierto de musica pa tomar',
    date: '09/09/2023', location: 'La macareran', is_free: false, price: 2400000, category: 3
  }
]
*/

/* */
// each event component
const Event = (props) => (
  <Link to={ `/detail/${props._id}` }>
    <EventWrapper>
      <img src={props.image} width="200px" />
      <EventContent>
        <h5>{props.name}</h5>
        <p>{props.date}</p>
        <p>{props.place}</p>
        {
          props.price === 0 ? <FreeText>Gratuito</FreeText> : <p>$ {props.price}</p>
        }
      </EventContent>
    </EventWrapper>
  </Link>
)

export const TopEvents = ({ latitude = null, longitude = null}) => {

  const { categoryState } = useContext(CategoryContext)
  const [events, setEvents] = useState([])

  useEffect(() => {
    loadEvents ()
  }, [latitude, longitude, categoryState]) // 1ra y única vez

  const loadEvents = async () => {
    try {

      let params = {}
      if (categoryState.categorySelected !== 0) {
        params.category = categoryState.categorySelected
      }

      if (latitude && longitude) {
        params.latitude = latitude
        params.longitude = longitude
      }

      const response = await httpRequest ({
        method: HTTP_METHODS.GET,
        endpoint: '/events',
        params
      })

      const {events: data} = response.data

      setEvents(data)

    } catch (error) {
      // TODO
    }
  }

  /*
  useEffect(() => {
    if (categoryState.categorySelected !== 0) {
      const eventsFilter = EVENTS_DATA.filter(
        item => item.category === categoryState.categorySelected
      )
      setEvents(eventsFilter)
    } else {
      setEvents(EVENTS_DATA)
    }
  }, [categoryState])
  */

  return (
    <TopEventsContainer>
      <h3>Eventos Cercanos</h3>
      <p>{latitude}, {longitude}</p>
      <section>
        {
          events.map((item, key) => <Event key={key} {...item} /> )
        }
      </section>
    </TopEventsContainer>
  )
}
