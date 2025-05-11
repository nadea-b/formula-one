import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply or remove dark class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-f1-light text-f1-black dark:bg-f1-black dark:text-white p-4 transition-colors duration-300">
      <button
        onClick={() => setDarkMode(prev => !prev)}
        className="bg-f1-red text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Toggle Theme
      </button>

      <h1 className="mt-6 text-2xl font-formula">
        Formula One Theme Toggle Example
      </h1>
    </div>
  );
}

export default App;
