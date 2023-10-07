import { createContext, useState } from "react"

const defaultState = {
  isAuth: false,
  name: '',
  email: '',
  phone: '',
  document: '',
}

export const UserContext = createContext(defaultState)

export const UserContextStore = (props) => {

  const [user, setUser] = useState(defaultState)

  const setAuthorization = (userData) => {
    setUser({ ...userData, isAuth: true })
  }

  const logout = () => {
    setUser(defaultState)
  }

  return (
    <UserContext.Provider value={{ user, setAuthorization, logout }}>
      { props.children }
    </UserContext.Provider>
  )
}
