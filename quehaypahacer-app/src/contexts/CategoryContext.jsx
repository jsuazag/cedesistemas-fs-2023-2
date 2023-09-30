import { createContext, useState } from "react";

const ALL_CATEGORIES = 0

const defaultState = {
  categorySelected: ALL_CATEGORIES
}

export const CategoryContext = createContext(defaultState)

export const CategoryContextStore = props => {

  const [categoryState, setCategoryState] = useState(defaultState)

  const onChangeCategory = (idNewCategory) => {
    const newCategory = categoryState.categorySelected === idNewCategory
      ? ALL_CATEGORIES
      : idNewCategory
    setCategoryState({ ...categoryState, categorySelected: newCategory })
  }

  return (
    <CategoryContext.Provider value={{ categoryState, onChangeCategory }}>
      { props.children }
    </CategoryContext.Provider>
  )
}
