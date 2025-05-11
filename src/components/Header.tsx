
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`py-4 px-4 md:px-8 fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-revealDark shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/21237008-c7e9-4cde-96a1-9f28bec3a6f7.png" 
              alt="Revenue People Logo" 
              className="h-10 mr-2"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-revealTeal transition-colors">Home</Link>
          <Link to="/services" className="text-white hover:text-revealTeal transition-colors">Services</Link>
          <Link to="/about" className="text-white hover:text-revealTeal transition-colors">About Us</Link>
          <Link to="/testimonials" className="text-white hover:text-revealTeal transition-colors">Testimonials</Link>
          <Link to="/contact" className="text-white hover:text-revealTeal transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-revealTeal hover:bg-opacity-90 text-white border-none">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-revealDark absolute top-16 left-0 right-0 p-4 shadow-md z-50 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-revealTeal transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="text-white hover:text-revealTeal transition-colors" onClick={toggleMenu}>Services</Link>
            <Link to="/about" className="text-white hover:text-revealTeal transition-colors" onClick={toggleMenu}>About Us</Link>
            <Link to="/testimonials" className="text-white hover:text-revealTeal transition-colors" onClick={toggleMenu}>Testimonials</Link>
            <Link to="/contact" className="text-white hover:text-revealTeal transition-colors" onClick={toggleMenu}>Contact</Link>
            <Button asChild className="bg-revealTeal hover:bg-opacity-90 text-white w-full border-none">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
