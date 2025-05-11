
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-revenuePrimary text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Revenue People</h3>
            <p className="mb-4 text-sm opacity-80">
              Elevating business growth through strategic consultancy and expert guidance.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-revenuePink transition-colors">Strategic Consultancy</Link></li>
              <li><Link to="/services" className="hover:text-revenuePink transition-colors">Business Development</Link></li>
              <li><Link to="/services" className="hover:text-revenuePink transition-colors">Revenue Growth</Link></li>
              <li><Link to="/services" className="hover:text-revenuePink transition-colors">Market Analysis</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-revenuePink transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-revenuePink transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-revenuePink transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-revenuePink transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-sm">
              <p className="mb-2">London, United Kingdom</p>
              <p className="mb-2">info@revenuepeople.io</p>
              <p>+44 (0) 123 456 7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} Revenue People. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-revenuePink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-revenuePink transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
