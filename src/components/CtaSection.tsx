
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-revealDark to-revealBlue text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-revealTeal"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-revealTeal"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Revenue Operations?
        </h2>
        <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Our expert team is ready to help you build effective go-to-market strategies, 
          optimise your revenue processes, and build high-performing teams.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button asChild className="bg-revealTeal hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-md transition-colors text-lg border-none">
            <a href="https://zcal.co/ryan-fagan/30min" target="_blank" rel="noopener noreferrer">Schedule a Consultation</a>
          </Button>
          <Button asChild variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-revealDark font-medium py-3 px-8 rounded-md transition-colors text-lg">
            <Link to="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
