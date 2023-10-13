
import './App.css'
import InfoUser from './pages/InfoUser/InfoUser'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (

    <Routes>
      <Route path='/info-user' element={<InfoUser />} />

    </Routes>

  )
}

export default App
