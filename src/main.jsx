import { createRoot } from 'react-dom/client'
import '../src/index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/index.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
