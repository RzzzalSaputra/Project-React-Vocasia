import { RouterProvider } from 'react-router-dom'
import { routes } from './config/routes'
import { DummyData } from './config/Dummydata'

function App() {

  return (
    <>
      <DummyData>
        <RouterProvider router={routes} />
      </DummyData>
    </>
  )
}

export default App
