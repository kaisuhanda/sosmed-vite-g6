import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/Auth'
import DashboardPage from './pages/dasboard/index'
import { Container } from '@chakra-ui/react'
import Register from './pages/Register/index'


function App() {

  return (
    <Container padding={"unset"} shadow={"md"} bg={"gray.100"} overflow={"hidden"} maxW={"6xl"} height={"100vh"}>
      <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/dash' element={<DashboardPage />} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
    </Container>
  )
}

export default App






















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App