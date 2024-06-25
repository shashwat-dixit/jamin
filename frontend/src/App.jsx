//imports
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Layouts
import RootLayout from './layouts/RootLayout'
import ChatLayout from './layouts/ChatLayout'

// Pages
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import ChatWindow from './components/chatComponents/ChatWindow'
import Profile from './components/userComponents/Profile'
import Settings from './components/userComponents/Settings'
// import Loader from './pages/Loader'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          {/* protected route */}
          <Route path="/chat" element={<ChatLayout />} >
            <Route index element={<ChatWindow />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        {/* <Route path='/loader' element={<Loader />} /> */}
        <Route path='*' element={<NotFound />} />
      </>
    )
  )

  return <RouterProvider router={router} />
}

export default App
