import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


import './App.css'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import RootLayout from './layouts/RootLayout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </>
    )
  )

  return <RouterProvider router={router} />
}

export default App
