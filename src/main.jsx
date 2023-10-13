import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { globalState } from './redux/reducer/index.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={globalState}>
      <BrowserRouter>
        <App />
     </BrowserRouter>,
  </Provider>

)
