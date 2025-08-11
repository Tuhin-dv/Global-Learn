import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './route/Router.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import ScrollProvider from './components/ScrollProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollProvider>
      <Toaster />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ScrollProvider>
  </StrictMode>,
)
