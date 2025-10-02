import { createRoot } from 'react-dom/client'
import { router } from './routes/index.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
