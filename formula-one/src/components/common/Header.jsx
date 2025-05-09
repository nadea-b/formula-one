import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className="bg-white dark:bg-f1-gray shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-f1-red" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <path d="M15 6H9v12h2V8h4V6z" />
            </svg>
            <span className="text-xl font-formula font-bold text-f1-black dark:text-white">F1 Stats</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/drivers" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Drivers
            </NavLink>
            <NavLink 
              to="/teams" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Teams
            </NavLink>
            <NavLink 
              to="/favorites" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Favorites
            </NavLink>
            <NavLink 
              to="/compare" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Compare
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-f1-black transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu - would be controlled by state in a real implementation */}
        <div className="hidden md:hidden py-2 pb-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "block py-2 px-4 bg-f1-red text-white" : "block py-2 px-4"
            }
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/drivers" 
            className={({ isActive }) => 
              isActive ? "block py-2 px-4 bg-f1-red text-white" : "block py-2 px-4"
            }
          >
            Drivers
          </NavLink>
          <NavLink 
            to="/teams" 
            className={({ isActive }) => 
              isActive ? "block py-2 px-4 bg-f1-red text-white" : "block py-2 px-4"
            }
          >
            Teams
          </NavLink>
          <NavLink 
            to="/favorites" 
            className={({ isActive }) => 
              isActive ? "block py-2 px-4 bg-f1-red text-white" : "block py-2 px-4"
            }
          >
            Favorites
          </NavLink>
          <NavLink 
            to="/compare" 
            className={({ isActive }) => 
              isActive ? "block py-2 px-4 bg-f1-red text-white" : "block py-2 px-4"
            }
          >
            Compare
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
