
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-revealDark to-revealBlue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-revealLight">Unlock Your Revenue Potential:</span>
              <span className="block mt-4">Expert Consultancy, Building Teams</span>
              <span className="block mt-2">Primed For Success.</span>
            </h1>
            <div className="h-1 w-24 bg-revealTeal my-6 mx-auto lg:mx-0"></div>
            <p className="text-xl lg:text-2xl mb-8 text-revealLight">
              Backed by Real-World Revenue Leadership Experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild className="bg-revealTeal hover:bg-opacity-90 text-white font-medium py-2 px-6 rounded-md transition-colors text-lg border-none">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-2 border-revealLight text-white hover:bg-white hover:text-revealDark font-medium py-2 px-6 rounded-md transition-colors text-lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative mt-10 lg:mt-0">
            <div className="absolute -inset-4 bg-revealTeal/20 rounded-lg transform rotate-3"></div>
            <div className="bg-white rounded-lg shadow-xl p-8 relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-revealDark text-center">Why Choose Revenue People?</h3>
              <div className="space-y-4">
                <div className="flex items-start bg-revealLight p-4 rounded-md">
                  <div className="bg-revealTeal rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-revealDark">Expert Consultancy</h4>
                    <p className="text-revealBlue">Focused on tangible business results</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-revealLight p-4 rounded-md">
                  <div className="bg-revealTeal rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-revealDark">Proven Track Record</h4>
                    <p className="text-revealBlue">15+ years of SaaS success stories</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-revealLight p-4 rounded-md">
                  <div className="bg-revealTeal rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-revealDark">Revenue Focus</h4>
                    <p className="text-revealBlue">A scalable revenue operating system</p>
                  </div>
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
