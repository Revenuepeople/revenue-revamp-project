
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-revealDark text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/21237008-c7e9-4cde-96a1-9f28bec3a6f7.png`} 
                alt="Revenue People Logo" 
                className="h-12"
              />
            </div>
            <p className="mb-4 text-sm opacity-80">
              Expert consultancy and building teams primed for success.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-revealTeal/20 hover:bg-revealTeal/40 p-2 rounded-full transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.23 0H1.77C0.8 0 0 0.8 0 1.77v20.46C0 23.2 0.8 24 1.77 24h20.46c0.97 0 1.77-0.8 1.77-1.77V1.77C24 0.8 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76c-1.17 0-2.1-0.9-2.1-2.1 0-1.17 0.9-2.1 2.1-2.1 1.17 0 2.1 0.9 2.1 2.1 0 1.2-0.93 2.1-2.1 2.1zm14.63 12.34h-3.62v-5.6c0-1.33-0.03-3.07-1.87-3.07-1.87 0-2.15 1.47-2.15 2.97v5.7H8.84V9.24h3.47v1.6h0.05c0.5-0.9 1.6-1.87 3.3-1.87 3.53 0 4.18 2.33 4.18 5.53v5.6z"/>
                </svg>
              </a>
              <a href="#" className="bg-revealTeal/20 hover:bg-revealTeal/40 p-2 rounded-full transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-revealTeal">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/go-to-market-strategy" className="hover:text-revealTeal transition-colors opacity-80 hover:opacity-100">Go-to-Market Strategy</Link></li>
              <li><Link to="/services/sales-operations" className="hover:text-revealTeal transition-colors opacity-80 hover:opacity-100">Sales Operations</Link></li>
              <li><Link to="/services/revenue-consultancy" className="hover:text-revealTeal transition-colors opacity-80 hover:opacity-100">Revenue Consultancy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-revealTeal">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-revealTeal transition-colors opacity-80 hover:opacity-100">Home</Link></li>
              <li><Link to="/about" className="hover:text-revealTeal transition-colors opacity-80 hover:opacity-100">About Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-revealTeal transition-colors opacity-80 hover:opacity-100">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-revealTeal transition-colors opacity-80 hover:opacity-100">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-revealTeal">Contact Us</h4>
            <address className="not-italic text-sm space-y-3 opacity-80">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-revealTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                London, United Kingdom
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-revealTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                info@revenuepeople.io
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-revealTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                +44 (0) 123 456 7890
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-revealBlue/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-60">&copy; {new Date().getFullYear()} Revenue People. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm opacity-60">
            <a href="#" className="hover:text-revealTeal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-revealTeal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
