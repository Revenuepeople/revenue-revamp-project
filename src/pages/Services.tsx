
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import CtaSection from "@/components/CtaSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20 bg-revenuePrimary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Consultancy Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Unlock sustainable growth and maximise revenue through proven strategies and expert guidance tailored to your unique business challenges.
          </p>
        </div>
      </div>
      <ServicesSection />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-revenuePrimary">Our Consultancy Approach</h2>
            <div className="w-20 h-1 bg-revenuePink mb-8"></div>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-revenueGray flex items-center justify-center text-2xl font-bold text-revenuePink">
                    1
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-3 text-revenuePrimary">Discovery & Analysis</h3>
                  <p className="text-gray-700">
                    We begin with a comprehensive assessment of your go-to-market strategy, revenue operations, and team structure. Our team analyses existing processes, identifies gaps, and evaluates your team's capabilities to develop a clear picture of your current situation.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-revenueGray flex items-center justify-center text-2xl font-bold text-revenuePink">
                    2
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-3 text-revenuePrimary">Strategic Planning</h3>
                  <p className="text-gray-700">
                    Based on our findings, we develop a tailored GTM and consultancy strategy aligned with your business objectives. Our plans are practical, actionable, and designed to deliver measurable revenue results within defined timeframes.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-revenueGray flex items-center justify-center text-2xl font-bold text-revenuePink">
                    3
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-3 text-revenuePrimary">Strategic Consultancy & Team Building</h3>
                  <p className="text-gray-700">
                    We help you build high-performing teams through strategic consultancy and leadership development, focusing on creating teams that align with your business goals and drive meaningful revenue growth.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-revenueGray flex items-center justify-center text-2xl font-bold text-revenuePink">
                    4
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-3 text-revenuePrimary">Implementation Support</h3>
                  <p className="text-gray-700">
                    Our consultants work alongside your team to implement recommended strategies and processes. We provide guidance, training, and resources to ensure successful execution and adoption of new approaches.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-revenueGray flex items-center justify-center text-2xl font-bold text-revenuePink">
                    5
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-3 text-revenuePrimary">Performance Monitoring & Optimisation</h3>
                  <p className="text-gray-700">
                    We establish clear KPIs and regularly monitor performance against revenue objectives. Our iterative approach allows for continuous improvement and optimisation of your go-to-market strategy based on real-world results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Services;
