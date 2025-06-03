import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <footer 
      className="py-4 mt-auto"
      style={{
        backgroundColor: darkMode ? '#030000' : '#030000',
        color: darkMode ? '#ffffff' : '#f3f4f6', 
        transition: 'background-color 0.3s ease, color 0.3s ease' 
      }}
    >
      <p 
        className="text-center"
        style={{
          color: darkMode ? '#ffffff' : '#f3f4f6',
          transition: 'color 0.3s ease'
        }}
      >
        2024 Formula 1 Stats
      </p>
    </footer>
  );
};

export default Footer;