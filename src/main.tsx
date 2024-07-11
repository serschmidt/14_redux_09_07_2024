import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import storeRTK from './reduxRTK/storeRTK.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(

  // 4. Repository anschließen
  <Provider store={storeRTK}>
    <App />
  </Provider>
)
