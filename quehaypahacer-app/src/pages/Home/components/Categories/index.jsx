import { styled } from "styled-components"
import { Category } from "../Category"
import { IoMusicalNotes, IoColorPalette, IoFastFood, IoLaptop } from 'react-icons/io5'

const CategoriesContainer = styled.section`
  display: flex;
  margin: 0 15px;
  justify-content: center;
`

const CATEGORY_LIST = [
  {
    id: 1,
    name: 'Arte',
    icon: <IoColorPalette />,
    color: 'yellow'
  },
  {
    id: 2,
    name: 'Gastronómico',
    icon: <IoFastFood />,
    color: 'orange'
  },
  {
    id: 3,
    name: 'Musica',
    icon: <IoMusicalNotes />,
    color: 'blue'
  },
  {
    id: 4,
    name: 'Geek',
    icon: <IoLaptop />,
    color: 'green'
  },
]

export const Categories = () => {

  return (
    <CategoriesContainer>
      {
        CATEGORY_LIST.map(item => <Category name={item.name} icon={item.icon} color={item.color} />)
      }
    </CategoriesContainer>
  )
}
