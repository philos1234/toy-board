import React, { useEffect } from 'react';
import './App.scss';
import { Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom';
import Home from "./Home"
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
      <h1 className="text-3xl font-bold text-blue-600"> TOY 게시판 </h1>
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
