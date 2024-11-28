import { useState } from 'react'
import './index.css'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Approuters from './routes'
import AuthProvider from './AuthContext'
import { useTranslation } from 'react-i18next'

//redux
import store from './store'
import { Provider } from 'react-redux'
function App() {

  const { t, i18n } = useTranslation()
  const direction = i18n.language === 'en' ? 'ltr' : 'rtl'

  return (
    <Provider store={store}>
      <AuthProvider>
        <div dir={direction}>
          <Router>

            <Approuters />
          </Router>
        </div>

      </AuthProvider>

    </Provider>

  )
}

export default App
