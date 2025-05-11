
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
            Strategic business consultancy with a focus on driving sustainable growth and maximizing revenue potential.
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
              Revenue People brings together a team of experienced consultants with diverse backgrounds across industries. Each team member brings unique expertise and perspectives, allowing us to provide comprehensive solutions to complex business challenges.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 bg-revenuePrimary rounded-full mb-4"></div>
                <h3 className="font-bold text-lg text-revenuePrimary">Emma Thompson</h3>
                <p className="text-gray-600 mb-2">Founder & CEO</p>
                <p className="text-center text-gray-700">
                  With over 20 years of experience in business strategy and revenue optimization, Emma leads our consultancy team with vision and expertise.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 bg-revenuePrimary rounded-full mb-4"></div>
                <h3 className="font-bold text-lg text-revenuePrimary">James Wilson</h3>
                <p className="text-gray-600 mb-2">Head of Strategy</p>
                <p className="text-center text-gray-700">
                  James specializes in developing strategic frameworks that help businesses identify and capitalize on growth opportunities in competitive markets.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 bg-revenuePrimary rounded-full mb-4"></div>
                <h3 className="font-bold text-lg text-revenuePrimary">Sarah Chen</h3>
                <p className="text-gray-600 mb-2">Business Development Director</p>
                <p className="text-center text-gray-700">
                  Sarah's expertise in market analysis and business development helps clients expand their reach and establish valuable partnerships.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 bg-revenuePrimary rounded-full mb-4"></div>
                <h3 className="font-bold text-lg text-revenuePrimary">Michael Rodriguez</h3>
                <p className="text-gray-600 mb-2">Financial Optimization Specialist</p>
                <p className="text-center text-gray-700">
                  Michael helps businesses maximize their financial performance through innovative revenue models and operational efficiency improvements.
                </p>
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
