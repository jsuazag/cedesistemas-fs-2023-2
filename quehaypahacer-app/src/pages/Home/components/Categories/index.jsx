import { Category } from "../Category"

const CATEGORY_LIST = [
  {
    name: 'Arte',
    icon: 'art',
    color: 'yellow'
  },
  {
    name: 'Gastronómico',
    icon: 'food',
    color: 'orange'
  },
  {
    name: 'Musica',
    icon: 'music',
    color: 'blue'
  },
  {
    name: 'Tecnológico',
    icon: 'device',
    color: 'green'
  },
]

export const Categories = () => {

  return (
    <section>
      {
        CATEGORY_LIST.map(item => <Category name={item.name} icon={item.icon} color={item.color} />)
      }
    </section>
  )
}
