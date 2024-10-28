//imports
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Layouts
import RootLayout from './layouts/RootLayout'
import ChatLayout from './layouts/ChatLayout'

// Pages
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import ChatWindow from './pages/ChatWindow'
import Settings from './components/chatComponents/Settings'
import FeatureCard from './components/FeatureCard'
import FeaturePage from './pages/FeaturePage'
// import Loader from './pages/Loader'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='feature' element={<FeaturePage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/chat" element={<ChatLayout />} >
          <Route index element={<ChatWindow />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
