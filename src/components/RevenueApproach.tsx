
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const RevenueApproach = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-revenuePrimary">The Revenue People Approach</h2>
          <div className="w-20 h-1 bg-revenuePink mx-auto mb-8"></div>
          <p className="text-lg mb-10 text-gray-700">
            We bring real-world revenue leadership experience to help businesses optimize their go-to-market
            strategies and build high-performing revenue teams. Our consultancy approach combines practical
            expertise with proven methodologies to deliver tangible results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-revenueGray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-revenuePrimary text-white flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-revenuePrimary">Strategy Development</h3>
              <p className="text-gray-600 mb-4">
                Crafting effective go-to-market strategies that align with your business goals and market opportunities.
              </p>
              <Link to="/services" className="inline-flex items-center text-revenuePink hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-revenueGray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-revenuePrimary text-white flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-revenuePrimary">Team Building</h3>
              <p className="text-gray-600 mb-4">
                Identifying and acquiring top revenue talent to build high-performing teams aligned with your business objectives.
              </p>
              <Link to="/services" className="inline-flex items-center text-revenuePink hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-revenueGray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-revenuePrimary text-white flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-revenuePrimary">Process Optimization</h3>
              <p className="text-gray-600 mb-4">
                Reviewing and enhancing your revenue operations processes to improve efficiency and drive better results.
              </p>
              <Link to="/services" className="inline-flex items-center text-revenuePink hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueApproach;
