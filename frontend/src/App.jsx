//imports
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Styles
import './App.css'

// Layouts
import RootLayout from './layouts/RootLayout'
import ChatLayout from './layouts/ChatLayout'

// Pages
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat" element={<ChatLayout />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </>
    )
  )

  return <RouterProvider router={router} />
}

export default App
