
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const RevenueApproach = () => {
  return (
    <section className="py-20 bg-revealLight">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-revealDark">The Revenue People Approach</h2>
            <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
            <p className="text-lg text-revealBlue">
              We bring real-world revenue leadership experience to help businesses optimise their go-to-market
              strategies and build high-performing revenue teams. Our consultancy approach combines practical
              expertise with proven methodologies to deliver tangible results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 bg-revealTeal w-full"></div>
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-revealLight text-revealTeal flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-revealDark text-center">Strategy Development</h3>
                <p className="text-revealBlue mb-4 text-center">
                  Crafting effective go-to-market strategies that align with your business goals and market opportunities.
                </p>
                <div className="text-center">
                  <Link to="/services" className="inline-flex items-center text-revealTeal hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 bg-revealTeal w-full"></div>
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-revealLight text-revealTeal flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-revealDark text-center">Team Building</h3>
                <p className="text-revealBlue mb-4 text-center">
                  Building high-performing teams aligned with your business objectives through strategic consultancy and leadership development.
                </p>
                <div className="text-center">
                  <Link to="/services" className="inline-flex items-center text-revealTeal hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 bg-revealTeal w-full"></div>
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-revealLight text-revealTeal flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-revealDark text-center">Process Optimisation</h3>
                <p className="text-revealBlue mb-4 text-center">
                  Reviewing and enhancing your revenue operations processes to improve efficiency and drive better results.
                </p>
                <div className="text-center">
                  <Link to="/services" className="inline-flex items-center text-revealTeal hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueApproach;
