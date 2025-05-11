
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-revenuePrimary text-white py-4 px-4 md:px-8 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold">Revenue People</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-revenuePink transition-colors">Home</Link>
          <Link to="/services" className="hover:text-revenuePink transition-colors">Services</Link>
          <Link to="/about" className="hover:text-revenuePink transition-colors">About Us</Link>
          <Link to="/testimonials" className="hover:text-revenuePink transition-colors">Testimonials</Link>
          <Link to="/contact" className="hover:text-revenuePink transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-revenuePink hover:bg-revenueAccent text-white">
            Get in Touch
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
        <div className="md:hidden bg-revenuePrimary absolute top-16 left-0 right-0 p-4 shadow-md z-50 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-revenuePink transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="hover:text-revenuePink transition-colors" onClick={toggleMenu}>Services</Link>
            <Link to="/about" className="hover:text-revenuePink transition-colors" onClick={toggleMenu}>About Us</Link>
            <Link to="/testimonials" className="hover:text-revenuePink transition-colors" onClick={toggleMenu}>Testimonials</Link>
            <Link to="/contact" className="hover:text-revenuePink transition-colors" onClick={toggleMenu}>Contact</Link>
            <Button className="bg-revenuePink hover:bg-revenueAccent text-white w-full">
              Get in Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
