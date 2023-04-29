import React, { useEffect } from 'react';
import './App.scss';
import { Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home/Home"
import { SignIn } from './pages/sign-in';
import { useLocation } from "react-router";

const App = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') {
      navigate('/home')
    }
  }, [pathname])
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;