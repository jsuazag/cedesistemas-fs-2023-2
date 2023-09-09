import { styled } from "styled-components"

/* styles */
const TopEventsContainer = styled.section`
  border: 1px solid red;
  margin: 25px 0;
`

const EventWrapper = styled.div`
  border: 1px solid red;
`

const EVENTS_DATA = [
  { id: 1,
    image: 'https://www.eltiempo.com/files/image_640_428/uploads/2022/07/29/62e3d34873715.jpeg',
    title: 'Desfile de silleteros',
    date: '10/09/2023', location: 'Medellín', is_free: true, price: 0, category: 1
  },
  { id: 2,
    image: 'https://lh5.googleusercontent.com/p/AF1QipMBFBeqhHIkgZRLA2s4FHCkXqy7bWNTYP5HBtq9',
    title: 'Encuentro de comida oriental',
    date: '10/09/2023', location: 'Poblado', is_free: false, price: 150000, category: 1
  },
  { id: 3,
    image: 'https://viajeronomada.com/wp-content/uploads/2020/01/quehacerenmedellin.jpg',
    title: 'Encuentro cultural',
    date: '10/09/2023', location: 'Parque Berrio', is_free: true, price: 0, category: 1
  },
  { id: 4,
    image: 'https://where.com.co/wp-content/uploads/2022/07/sIRVALO-PUES.jpg',
    title: 'Concierto de musica pa tomar',
    date: '09/09/2023', location: 'La macareran', is_free: false, price: 2400000, category: 1
  },
]

/* */
// each event component
const Event = () => {
  <EventWrapper>
    <i>imagen</i>
    <p>titulo del evento</p>
  </EventWrapper>
}

export const TopEvents = () => {

  return (
    <TopEventsContainer>
      <h3>Eventos Cercanos</h3>
    </TopEventsContainer>
  )
}
