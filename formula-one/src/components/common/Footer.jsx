const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-white dark:bg-f1-gray shadow-inner">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-f1-red" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M15 6H9v12h2V8h4V6z"/>
                </svg>
                <span className="text-lg font-formula font-bold text-f1-black dark:text-white">F1 Stats</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                All Formula 1 data for educational purposes only.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                &copy; {currentYear} F1 Stats App
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Not affiliated with Formula 1 or FIA
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;