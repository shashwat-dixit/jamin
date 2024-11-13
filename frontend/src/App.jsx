//imports
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Toaster } from 'react-hot-toast';

// Layouts
import RootLayout from './layouts/RootLayout'
import ChatLayout from './layouts/ChatLayout'

// Pages
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import ChatWindow from './pages/ChatWindow'
import Settings from './pages/Settings'
import FeaturePage from './pages/FeaturePage'

// create react-query client
const queryClient = new QueryClient()


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

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" />
      <ReactQueryDevtools initialIsOpen={false} />
      <Analytics />
      <SpeedInsights />
    </QueryClientProvider>
  )
}

export default App
