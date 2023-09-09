import { styled } from "styled-components"
import { Category } from "../Category"
import { IoMusicalNotes, IoColorPalette, IoFastFood, IoLaptop } from 'react-icons/io5'

const CategoriesContainer = styled.section`
  display: flex;
  margin: 0 15px;
`

const CATEGORY_LIST = [
  {
    name: 'Arte',
    icon: <IoColorPalette />,
    color: 'yellow'
  },
  {
    name: 'Gastronómico',
    icon: <IoFastFood />,
    color: 'orange'
  },
  {
    name: 'Musica',
    icon: <IoMusicalNotes />,
    color: 'blue'
  },
  {
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
