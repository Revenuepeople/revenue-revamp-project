
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20 bg-revenuePrimary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Get in touch with our consultancy team to discuss how we can help your business grow.
          </p>
        </div>
      </div>
      
      <ContactSection />
      
      <section className="py-16 bg-revenueGray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-revenuePrimary">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-revenuePink mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-bold text-lg mb-3 text-revenuePrimary">What types of businesses do you work with?</h3>
                <p className="text-gray-700">
                  We work with businesses of all sizes across various industries. Our consultancy services are adaptable to different business models and growth stages, from startups to established enterprises.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-3 text-revenuePrimary">How long does a typical consultancy project last?</h3>
                <p className="text-gray-700">
                  Project durations vary depending on scope and complexity. Initial consultancy engagements typically range from 2-6 months, with many clients choosing to continue with ongoing strategic support.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-3 text-revenuePrimary">What is your consultancy approach?</h3>
                <p className="text-gray-700">
                  Our approach involves thorough analysis, tailored strategy development, implementation support, and performance monitoring. We emphasize collaboration and knowledge transfer to build your team's capabilities.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-3 text-revenuePrimary">How do you measure success?</h3>
                <p className="text-gray-700">
                  We establish clear KPIs at the beginning of each project aligned with your business objectives. We regularly track progress and provide transparent reporting on outcomes and ROI.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-3 text-revenuePrimary">What makes Revenue People different from other consultancies?</h3>
                <p className="text-gray-700">
                  Our focus on practical, implementable strategies sets us apart. We don't just provide recommendations; we work alongside your team to ensure successful execution and sustainable results.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-3 text-revenuePrimary">Do you offer virtual consultancy services?</h3>
                <p className="text-gray-700">
                  Yes, we offer both in-person and virtual consultancy options. Our digital collaboration tools enable effective remote work while maintaining the same level of engagement and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
