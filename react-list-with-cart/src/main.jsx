import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.jsx";

createRoot(document.getElementById('productList')).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)