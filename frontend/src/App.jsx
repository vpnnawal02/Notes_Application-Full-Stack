import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Form } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from './pages/Home'
import NotFound from './pages/NotFound'
// import Form from './components/Form'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/NavigationBar'

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />

}

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          {/* <Route path='/login' element={<Login />} /> */}
          <Route path="/login" element={<Form route="/api/token/" method="login" />} />

          <Route path='/logout' element={<Logout />} />

          {/* <Route path='/register' element={<RegisterAndLogout />} /> */}
          <Route path="/register" element={<Form route="/api/user/register/" method="register" />} />

          <Route path='*' element={<NotFound />} />

          {/* testing */}
          {/* <Route path='/form' element={<Form />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
