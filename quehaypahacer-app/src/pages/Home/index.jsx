import { Layout } from "../../components/Layout"
import { CategoryContextStore } from "../../contexts/CategoryContext"
import { useCurrentPosition } from "../../hooks/useCurrentPosition"
import { Categories } from "./components/Categories"
import { TopEvents } from "./components/TopEvents"

export const Home = () => {

  const [latitude, longitude] = useCurrentPosition ()

  return (
    <Layout>
      <CategoryContextStore>
        <Categories />
        <TopEvents latitude={latitude} longitude={longitude} />
      </CategoryContextStore>
    </Layout>
  )
}
