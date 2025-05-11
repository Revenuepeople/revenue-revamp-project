
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-64 h-64 bg-revenuePink opacity-10 rounded-lg"></div>
              <div className="relative z-10 bg-revenueGray p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-revenuePrimary">
                  Expert Consultancy for <span className="text-revenuePink">Business Growth</span>
                </h3>
                <p className="text-gray-700 mb-6">
                  At Revenue People, we specialize in transforming business challenges into growth
                  opportunities through strategic consultancy and expert guidance.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-revenuePink font-bold mr-2">✓</span>
                    <span className="text-gray-700">15+ years of business consultancy experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-revenuePink font-bold mr-2">✓</span>
                    <span className="text-gray-700">Proven methodologies for sustainable growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-revenuePink font-bold mr-2">✓</span>
                    <span className="text-gray-700">Tailored strategies for your unique business needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-revenuePink font-bold mr-2">✓</span>
                    <span className="text-gray-700">Result-oriented approach with measurable outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-revenuePrimary">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-revenuePink mb-6"></div>
            <p className="text-gray-700 mb-6">
              Revenue People is a premium consultancy firm dedicated to helping businesses achieve exceptional growth through strategic guidance, market insights, and innovative solutions. We work closely with our clients to understand their unique challenges and develop tailored strategies that drive measurable results.
            </p>
            <p className="text-gray-700 mb-8">
              Our team of experienced consultants brings diverse expertise across industries, enabling us to provide comprehensive solutions for businesses of all sizes. We pride ourselves on our commitment to excellence, integrity, and delivering tangible value to every client we serve.
            </p>
            <Button asChild className="bg-revenuePrimary hover:bg-opacity-90 text-white">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
