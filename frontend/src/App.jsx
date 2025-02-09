import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import CartPage from "./pages/CartPage.jsx";

import Navbar from "./components/Navbar.jsx";
import { useUserStore } from "./stores/useUserStore.js";
import { use } from "react";

function App() {
  const {user, checkAuth} = useUserStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </div>
      <Toaster />
    </>
  );
}

export default App;
