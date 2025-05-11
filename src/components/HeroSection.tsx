
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-revenuePrimary to-revenueAccent text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Driving Growth Through <span className="text-revenuePink">Strategic Consultancy</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              We help businesses elevate their revenue potential through expert consultancy, 
              strategic insights, and proven methodologies tailored to your unique challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
                      <span>Proven strategies tailored to your business</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-revenuePink font-bold mr-2">✓</span>
                      <span>Comprehensive analysis of revenue opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-revenuePink font-bold mr-2">✓</span>
                      <span>Sustainable growth methodologies</span>
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
