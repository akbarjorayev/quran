import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './css/App.css'

const Signup = React.lazy(() => import('./components/Account/Signup/Signup'))
const Login = React.lazy(() => import('./components/Account/Login/Login'))

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/account/signup" element={<Signup />} />
          <Route path="/account/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
