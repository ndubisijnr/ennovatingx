import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'


function App() {
    // basename={__BASE_PATH__}
  return (
    <BrowserRouter >
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App