import { Layout } from '../../components/Layout'
import { Button, COLORS } from '../../globalStyles'

export const EventDetail = () => {

  return (
    <Layout>
      <h2>Titulo del evento</h2>
      <div>
        <img src="https://www.eltiempo.com/files/image_640_428/uploads/2022/07/29/62e3d34873715.jpeg" width="100%" />
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facere inventore, nihil laboriosam sint asperiores fugiat praesentium adipisci. Porro officia quia deleniti veniam beatae delectus. Consequatur optio ullam excepturi vero!</p>
        <p>Ubicación</p>
        <p>Fecha</p>
        <p>Categoría</p>
        <p>Precio</p>
      </div>
      <Button color={COLORS.secondary}>Quiero participar</Button>
    </Layout>
  )
}
