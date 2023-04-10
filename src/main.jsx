import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { Store } from './Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
const persistor = persistStore(Store)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
      {/* <ThemeProvider> */}
        <PersistGate persistor={persistor} >
          <App />
        </PersistGate>
      {/* </ThemeProvider> */}
    </Provider>
)
