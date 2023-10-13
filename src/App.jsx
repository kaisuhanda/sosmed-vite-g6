import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/sidebar'
import Rightbar from './components/rightbar'
import Timeline from './pages/timeline/timeline'

function App() {

  return (
    <div>
      <Timeline/>
    </div>
  )
}

export default App
