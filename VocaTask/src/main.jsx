import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './config/routes'
import { DummyData } from './config/Dummydata'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <DummyData>
        <RouterProvider router={routes} />
      </DummyData>
  </StrictMode>,
)
