
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20 bg-revenuePrimary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Revenue People</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Strategic business consultancy with a focus on driving sustainable growth and maximising revenue potential.
            </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-revenuePrimary">Our Mission</h2>
              <div className="w-20 h-1 bg-revenuePink mb-6"></div>
              <p className="text-gray-700 mb-6">
                At Revenue People, our mission is to empower businesses with the strategic insights, expert guidance, and practical solutions they need to overcome challenges, seize opportunities, and achieve sustainable growth. We believe that every business has untapped potential waiting to be unlocked, and our role is to help you discover and leverage that potential.
              </p>
              <p className="text-gray-700 mb-6">
                We're committed to delivering consultancy services that create tangible value, foster innovation, and build resilience. Our approach combines data-driven analysis with creative problem-solving to develop strategies that are both ambitious and achievable.
              </p>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-revenueGray p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-revenuePrimary">Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-revenuePink rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-revenuePrimary">Excellence</h4>
                      <p className="text-gray-700">We strive for excellence in everything we do, setting high standards for our work and delivering results that exceed expectations.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-revenuePink rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-revenuePrimary">Integrity</h4>
                      <p className="text-gray-700">We operate with complete transparency and honesty, building trust through ethical practices and genuine relationships.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-revenuePink rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-revenuePrimary">Innovation</h4>
                      <p className="text-gray-700">We embrace innovative thinking and creative approaches to solve complex business challenges and identify new opportunities.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-revenuePink rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-revenuePrimary">Impact</h4>
                      <p className="text-gray-700">We measure our success by the tangible impact we create for our clients and the sustainable growth we help them achieve.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-revenueGray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-revenuePrimary">Our Approach to Consultancy</h2>
            <div className="w-20 h-1 bg-revenuePink mx-auto mb-8"></div>
            
            <p className="text-gray-700 mb-12">
              Our consultancy philosophy centers on creating tailored solutions that address your specific business challenges and capitalize on your unique strengths. We don't believe in one-size-fits-all approaches; instead, we develop strategies that align with your business goals, culture, and market position.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl text-revenuePink mb-4">🔍</div>
                <h3 className="font-bold text-lg mb-3 text-revenuePrimary">Insight-Driven</h3>
                <p className="text-gray-700">
                  We base our recommendations on deep analysis and data-backed insights, ensuring that every strategy is grounded in reality.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl text-revenuePink mb-4">🤝</div>
                <h3 className="font-bold text-lg mb-3 text-revenuePrimary">Collaborative</h3>
                <p className="text-gray-700">
                  We work closely with your team, leveraging your industry expertise and combining it with our consultancy experience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl text-revenuePink mb-4">📊</div>
                <h3 className="font-bold text-lg mb-3 text-revenuePrimary">Results-Focused</h3>
                <p className="text-gray-700">
                  Our ultimate goal is to deliver tangible outcomes that contribute directly to your business growth and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-revenuePrimary text-center">Our Team</h2>
            <div className="w-20 h-1 bg-revenuePink mx-auto mb-8"></div>
            
            <p className="text-gray-700 mb-12 text-center">
              Revenue People brings together experienced consultants with diverse backgrounds across industries. Our team provides comprehensive solutions to complex business challenges.
            </p>
            
            <div className="flex justify-center">
              <div className="max-w-md">
                <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-revealTeal">
                    <img 
                      src="/src/assets/ryan-fagan.jpg" 
                      alt="Ryan Fagan" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-xl text-revenuePrimary mb-2">Ryan Fagan</h3>
                  <p className="text-gray-600 mb-4 font-medium">Founder</p>
                  <p className="text-center text-gray-700 leading-relaxed">
                    As a seasoned sales and leadership professional with over 15 years of experience in Go-to-Market (GTM) strategies, Ryan has navigated multiple SaaS journeys, guiding companies from early stages to significant growth milestones. Notably, Ryan was part of a successful SaaS journey that culminated in a remarkable exit exceeding $700 million.
                  </p>
                  <p className="text-center text-gray-700 leading-relaxed mt-4">
                    Beyond operational roles, Ryan has also established a strong track record as an angel investor, backing numerous startups with strategic guidance and capital. This blend of operational expertise and investment acumen positions Ryan as a valuable partner for both early-stage and mature companies seeking to scale effectively.
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

export default About;
