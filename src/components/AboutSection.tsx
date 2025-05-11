
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 bg-revealLight">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-full h-full bg-revealTeal opacity-10 rounded-lg transform rotate-3"></div>
              <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-revealDark">
                  Expert Consultancy for <span className="text-revealTeal">Business Growth</span>
                </h3>
                <p className="text-revealBlue mb-6">
                  At Revenue People, we specialize in transforming business challenges into growth
                  opportunities through strategic consultancy and expert guidance.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start bg-revealLight p-3 rounded-md">
                    <span className="text-revealTeal font-bold mr-2 mt-1">✓</span>
                    <span className="text-revealBlue">15+ years of business consultancy experience</span>
                  </li>
                  <li className="flex items-start bg-revealLight p-3 rounded-md">
                    <span className="text-revealTeal font-bold mr-2 mt-1">✓</span>
                    <span className="text-revealBlue">Proven methodologies for sustainable growth</span>
                  </li>
                  <li className="flex items-start bg-revealLight p-3 rounded-md">
                    <span className="text-revealTeal font-bold mr-2 mt-1">✓</span>
                    <span className="text-revealBlue">Tailored strategies for your unique business needs</span>
                  </li>
                  <li className="flex items-start bg-revealLight p-3 rounded-md">
                    <span className="text-revealTeal font-bold mr-2 mt-1">✓</span>
                    <span className="text-revealBlue">Result-oriented approach with measurable outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-revealDark">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-revealTeal mb-6"></div>
            <p className="text-revealBlue mb-6">
              Revenue People is a premium consultancy firm dedicated to helping businesses achieve exceptional growth through strategic guidance, market insights, and innovative solutions. We work closely with our clients to understand their unique challenges and develop tailored strategies that drive measurable results.
            </p>
            <p className="text-revealBlue mb-8">
              Our team of experienced consultants brings diverse expertise across industries, enabling us to provide comprehensive solutions for businesses of all sizes. We pride ourselves on our commitment to excellence, integrity, and delivering tangible value to every client we serve.
            </p>
            <Button asChild className="bg-revealTeal hover:bg-opacity-90 text-white border-none">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
