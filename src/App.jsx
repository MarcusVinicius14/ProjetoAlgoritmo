import Cadastro from './Container/Cadastro'
import Home from './Container/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Receber from './Container/Receber'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
  {
    path: '/receber',
    element: <Receber />,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
