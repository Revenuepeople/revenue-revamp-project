
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-revenuePrimary to-revenueAccent text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Business Growth?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Our consultancy team is ready to help you identify opportunities, overcome challenges, 
          and achieve sustainable revenue growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-revenuePink hover:bg-opacity-90 text-white font-medium py-2 px-8 rounded-md transition-colors text-lg">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-revenuePrimary font-medium py-2 px-8 rounded-md transition-colors text-lg">
            <Link to="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
