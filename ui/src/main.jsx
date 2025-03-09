import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import config from './config'
import './assets/scss/style.scss'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={config?.basename || '/'}>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
