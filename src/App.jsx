/* eslint-disable*/
import React from "react"
import { Route, Routes } from "react-router-dom"

import "./index.css"

import LandingPage from "./page/LandingPage"
import CMS from "./page/CMS"

function App() {
  return (
    <div className="App text-inter bg-koni-dark" style={{ overflow : "hidden"}}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cms" element={<CMS />} />
      </Routes>
    </div>
  )
}

export default App
