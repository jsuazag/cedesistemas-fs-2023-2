import { createContext, useState } from "react"
import { getToken, removeToken } from "../utils/TokenLocalStorage"
import { httpRequest } from "../utils/HttpRequest"

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

  const validateSession = () => {
    const token = getToken()
    if (token && !user.isAuth) { // que exista el token pero NO tengamos el isAuth en verdadero
      requestUser()
    }
  }

  const requestUser = async () => {
    try {
      const response = await httpRequest ({
        endpoint: '/users/info',
        token: getToken()
      })
      const {data} = response
      setAuthorization(data)
    } catch (error) {
      logout()
    }
  }

  const logout = () => {
    setUser(defaultState)
    removeToken()
  }

  return (
    <UserContext.Provider value={{ user, validateSession, logout }}>
      { props.children }
    </UserContext.Provider>
  )
}
