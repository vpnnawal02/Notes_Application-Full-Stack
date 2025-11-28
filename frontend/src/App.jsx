import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Form from "./components/Form";
import ProtectedRoute from "./components/ProtectedRoute";
import NavigationBar from "./components/NavigationBar";

// Logout clears tokens and redirects
function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function App() {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>

          {/* HOME (protected) */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          {/* LOGIN */}
          <Route
            path="/login"
            element={<Form route="/api/token/" method="login" />}
          />

          {/* REGISTER */}
          <Route
            path="/register"
            element={<Form route="/api/user/register/" method="register" />}
          />

          {/* LOGOUT */}
          <Route path="/logout" element={<Logout />} />

          {/* 404 PAGE */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
