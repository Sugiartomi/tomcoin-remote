/* eslint-disable*/
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change unregister() to register() below.
serviceWorkerRegistration.unregister()
reportWebVitals()
