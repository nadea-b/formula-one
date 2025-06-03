import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext'; // Adjust path as needed
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <header 
      className="text-white py-4"
      style={{
        backgroundColor: darkMode ? '#dc0000' : '#1f2937',
        color: darkMode ? '#ffffff' : '#f3f4f6', 
        transition: 'background-color 0.3s ease, color 0.3s ease'
      
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl">
          <Link
            to="/"
            className="relative inline-block text-red after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Formula 1 Stats
          </Link>
        </h1>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;