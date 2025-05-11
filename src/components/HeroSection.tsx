
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-revenuePrimary to-revenueAccent text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-center md:text-left">
              Unlock Your Revenue Potential:
              <span className="block mt-2">
                Expert GTM Talent Acquisition & 
                <span className="relative">
                  <span className="absolute -bottom-2 left-0 w-3/4 h-1 bg-teal-400"></span>
                </span>
              </span>
              <span className="block mt-2">
                Consultancy, Building Teams
              </span>
              <span className="block mt-2">
                Primed For Success.
              </span>
            </h1>
            <div className="h-12"></div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center md:text-left">
              Backed by Real-World Revenue
              <span className="block relative">
                Leadership Experience.
                <span className="absolute -bottom-2 left-0 w-3/4 h-1 bg-teal-400"></span>
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild className="bg-revenuePink hover:bg-opacity-90 text-white font-medium py-2 px-6 rounded-md transition-colors text-lg">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-revenuePrimary font-medium py-2 px-6 rounded-md transition-colors text-lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-xl bg-white p-1 shadow-2xl transform rotate-2">
              <div className="bg-revenueGray rounded-lg p-8 transform -rotate-2">
                <div className="text-revenuePrimary">
                  <h3 className="text-xl font-bold mb-4">Why Choose Revenue People?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-revenuePink font-bold mr-2">✓</span>
                      <span>Expert consultancy focused on tangible results</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-revenuePink font-bold mr-2">✓</span>
                      <span>Leadership expertise from industry veterans</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-revenuePink font-bold mr-2">✓</span>
                      <span>Go-to-market strategy development and execution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-revenuePink font-bold mr-2">✓</span>
                      <span>Revenue-focused talent acquisition</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
