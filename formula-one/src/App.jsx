import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import ComparisonPage from './pages/ComparisonPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has previously set a theme preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/teams" element={<TeamsPage />} />
                <Route path="/compare" element={<ComparisonPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
    </ThemeContext.Provider>
  );
}

export default App;