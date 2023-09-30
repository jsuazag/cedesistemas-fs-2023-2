import { Layout } from "../../components/Layout"
import { CategoryContextStore } from "../../contexts/CategoryContext"
import { Categories } from "./components/Categories"
import { TopEvents } from "./components/TopEvents"

export const Home = () => {

  return (
    <Layout>
      <CategoryContextStore>
        <Categories />
        <TopEvents />
      </CategoryContextStore>
    </Layout>
  )
}
