
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
            Strategic expertise to help your business achieve sustainable growth and maximize revenue potential.
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
                    We begin with a comprehensive assessment of your current business position, challenges, and opportunities. Our team analyzes market trends, competitor landscapes, and internal processes to develop a clear picture of your business ecosystem.
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
                    Based on our findings, we develop a tailored consultancy strategy aligned with your business objectives. Our plans are realistic, actionable, and designed to deliver measurable results within defined timeframes.
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
                  <h3 className="text-xl font-bold mb-3 text-revenuePrimary">Implementation Support</h3>
                  <p className="text-gray-700">
                    Our consultants work alongside your team to implement recommended strategies and initiatives. We provide guidance, training, and resources to ensure successful execution of the proposed changes.
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
                  <h3 className="text-xl font-bold mb-3 text-revenuePrimary">Performance Monitoring</h3>
                  <p className="text-gray-700">
                    We establish clear KPIs and regularly monitor progress against objectives. Our iterative approach allows for agile adjustments to strategies based on performance data and changing market conditions.
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
                  <h3 className="text-xl font-bold mb-3 text-revenuePrimary">Long-term Growth Planning</h3>
                  <p className="text-gray-700">
                    Beyond immediate improvements, we help you build sustainable frameworks for continued growth. Our consultancy focuses on developing internal capabilities and processes that will support your business's long-term success.
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
