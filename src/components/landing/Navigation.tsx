
import { Link } from "react-router-dom";
import { Menu, X, BookOpen, Brain, Target, FileText } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 px-[100px] py-4 max-md:px-5 border-b">
      <div className="flex w-full max-w-[1440px] mx-auto items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-[#8B5CF6]">Skillify</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-base text-gray-700">
          <Link to="/features" className="hover:text-[#8B5CF6] transition-colors flex items-center gap-2">
            <FileText size={20} />
            Features
          </Link>
          <Link to="/assessments" className="hover:text-[#8B5CF6] transition-colors flex items-center gap-2">
            <Brain size={20} />
            Assessments
          </Link>
          <Link to="/career-paths" className="hover:text-[#8B5CF6] transition-colors flex items-center gap-2">
            <Target size={20} />
            Career Paths
          </Link>
          <Link to="/pricing" className="hover:text-[#8B5CF6] transition-colors flex items-center gap-2">
            <BookOpen size={20} />
            Pricing
          </Link>
          <button className="bg-[#8B5CF6] text-white px-5 py-2 rounded-lg hover:bg-[#7c3aed] transition-colors text-sm font-medium">
            Get Started
          </button>
          <button className="border border-[#8B5CF6] text-[#8B5CF6] px-5 py-2 rounded-lg hover:bg-[#8B5CF6] hover:text-white transition-colors text-sm font-medium">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
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
          <div className="absolute top-full left-0 right-0 bg-white border-t md:hidden">
            <div className="flex flex-col p-5 gap-4">
              <Link to="/features" className="text-base hover:text-[#8B5CF6] flex items-center gap-2">
                <FileText size={20} />
                Features
              </Link>
              <Link to="/assessments" className="text-base hover:text-[#8B5CF6] flex items-center gap-2">
                <Brain size={20} />
                Assessments
              </Link>
              <Link to="/career-paths" className="text-base hover:text-[#8B5CF6] flex items-center gap-2">
                <Target size={20} />
                Career Paths
              </Link>
              <Link to="/pricing" className="text-base hover:text-[#8B5CF6] flex items-center gap-2">
                <BookOpen size={20} />
                Pricing
              </Link>
              <button className="bg-[#8B5CF6] text-white px-5 py-2 rounded-lg hover:bg-[#7c3aed] transition-colors text-sm font-medium w-full">
                Get Started
              </button>
              <button className="border border-[#8B5CF6] text-[#8B5CF6] px-5 py-2 rounded-lg hover:bg-[#8B5CF6] hover:text-white transition-colors text-sm font-medium w-full">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
