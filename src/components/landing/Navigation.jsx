
import { Link } from "react-router-dom";
import { Menu, X, BookOpen, Brain, Target, FileText, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-[100px] py-4 max-md:px-5 border-b transition-all duration-300 ${
      darkMode 
        ? 'glass-dark border-gray-800 text-white' 
        : 'glass-light border-gray-200 text-gray-900'
    }`}>
      <div className="flex w-full max-w-[1440px] mx-auto items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <span className={`${darkMode ? 'text-violet-400' : 'text-violet-600'}`}>
            Skillify
          </span>
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full ${
            darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-800'
          }`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-base">
          <Link to="/features" className={`hover:text-violet-500 transition-colors flex items-center gap-2 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <FileText size={20} />
            Features
          </Link>
          <Link to="/assessments" className={`hover:text-violet-500 transition-colors flex items-center gap-2 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <Brain size={20} />
            Assessments
          </Link>
          <Link to="/career-paths" className={`hover:text-violet-500 transition-colors flex items-center gap-2 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <Target size={20} />
            Career Paths
          </Link>
          <Link to="/pricing" className={`hover:text-violet-500 transition-colors flex items-center gap-2 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <BookOpen size={20} />
            Pricing
          </Link>
          <button className={`${
            darkMode 
              ? 'bg-violet-600 hover:bg-violet-700' 
              : 'bg-violet-500 hover:bg-violet-600'
          } text-white px-5 py-2 rounded-lg transition-colors text-sm font-medium`}>
            Get Started
          </button>
          <button className={`border ${
            darkMode 
              ? 'border-violet-600 text-violet-400 hover:bg-violet-600' 
              : 'border-violet-500 text-violet-600 hover:bg-violet-500'
          } px-5 py-2 rounded-lg hover:text-white transition-colors text-sm font-medium`}>
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`absolute top-full left-0 right-0 border-t md:hidden ${
            darkMode 
              ? 'glass-dark border-gray-800' 
              : 'glass-light border-gray-200'
          }`}>
            <div className="flex flex-col p-5 gap-4">
              <Link to="/features" className="text-base hover:text-violet-500 flex items-center gap-2">
                <FileText size={20} />
                Features
              </Link>
              <Link to="/assessments" className="text-base hover:text-violet-500 flex items-center gap-2">
                <Brain size={20} />
                Assessments
              </Link>
              <Link to="/career-paths" className="text-base hover:text-violet-500 flex items-center gap-2">
                <Target size={20} />
                Career Paths
              </Link>
              <Link to="/pricing" className="text-base hover:text-violet-500 flex items-center gap-2">
                <BookOpen size={20} />
                Pricing
              </Link>
              <button className={`${
                darkMode 
                  ? 'bg-violet-600 hover:bg-violet-700' 
                  : 'bg-violet-500 hover:bg-violet-600'
              } text-white px-5 py-2 rounded-lg transition-colors text-sm font-medium w-full`}>
                Get Started
              </button>
              <button className={`border ${
                darkMode 
                  ? 'border-violet-600 text-violet-400 hover:bg-violet-600' 
                  : 'border-violet-500 text-violet-600 hover:bg-violet-500'
              } px-5 py-2 rounded-lg hover:text-white transition-colors text-sm font-medium w-full`}>
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
