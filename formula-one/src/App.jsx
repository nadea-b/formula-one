import { useEffect, useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-f1-light dark:bg-f1-black text-f1-black dark:text-white transition-colors duration-300">
      <Header />

      <main className="flex-grow p-6">
        <button
          onClick={() => setDarkMode(prev => !prev)}
          className="bg-f1-red text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Toggle Theme
        </button>
        <h2 className="mt-6 text-2xl font-formula">Welcome to F1 Stats</h2>
      </main>

      <Footer />
    </div>
  );
}

export default App;
