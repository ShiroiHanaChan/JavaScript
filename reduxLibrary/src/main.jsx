import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux";
import bookStorage from "./app/bookStorage.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={bookStorage}>
        <App />
      </Provider>
  </StrictMode>,
)
