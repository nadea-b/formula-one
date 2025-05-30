import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => (
  <header className="bg-gray-900 text-white py-4"> {/* Changed from bg-f1-black */}
    <div className="container mx-auto px-4 flex justify-between items-center">
      <h1 className="text-3xl">
        <Link
          to="/"
          className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Formula 1 Stats
        </Link>
      </h1>
      <ThemeToggle />
    </div>
  </header>
);

export default Header;