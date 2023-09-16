import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalStyles } from "./globalStyles"
import { Home } from "./pages/Home"
import { EventDetail } from "./pages/EventDetail"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/detail/:id', //detail/
    element: <EventDetail />
  }
])

export const App = () => {

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}
