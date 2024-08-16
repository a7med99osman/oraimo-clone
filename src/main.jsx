import "./App.scss"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { IsMobileProvider  } from "./utils/IsMobileContext"
import { AllProductsProvider } from "./utils/AllProductsContext.jsx"
import { store } from "./utils/store.js"
import { Provider } from "react-redux"


ReactDOM.createRoot(document.getElementById('root')).render(

  // <React.StrictMode>
    <AllProductsProvider>
      <Provider store={store}>
          <IsMobileProvider>
            <App />
          </IsMobileProvider>
      </Provider>
    </AllProductsProvider>
  // </React.StrictMode>,
)
