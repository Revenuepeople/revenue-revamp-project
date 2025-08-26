import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";

const TalentAcquisition = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20 bg-revenuePrimary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Talent Acquisition</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Partner with SaaS-experienced recruiters to build high-performing teams that drive revenue growth.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500">
                <h2 className="text-2xl font-bold text-red-700 mb-6">The Problem</h2>
                <p className="text-gray-700 mb-4">
                  Most traditional recruiters lack the specific experience and understanding of the SaaS industry, making it challenging to identify and attract the right talent for your revenue-generating roles.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">•</span>
                    Generic recruiting approaches that don't understand SaaS sales cycles and metrics
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">•</span>
                    Inability to assess candidates' experience with SaaS-specific tools and methodologies
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">•</span>
                    Lack of network within the SaaS community and talent pool
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">•</span>
                    Poor cultural fit assessment for fast-paced, metrics-driven environments
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
                <h2 className="text-2xl font-bold text-green-700 mb-6">Our Solution</h2>
                <p className="text-gray-700 mb-4">
                  Through our partnership with experienced SaaS leaders, we leverage deep industry knowledge and extensive networks to connect you with revenue-driving talent.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    Partner network led by ex-SaaS executives with proven track records
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    Deep understanding of SaaS sales processes, tools, and success metrics
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    Access to vetted talent pool with verified SaaS experience
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    Cultural fit assessment based on SaaS environment requirements
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-revenueGray p-8 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-revenuePrimary text-center">The Revenue People Advantage</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-revenuePink rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-bold text-revenuePrimary mb-2">SaaS-Focused</h3>
                  <p className="text-gray-600">Exclusive focus on SaaS talent with proven revenue generation experience</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-revenuePink rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-lg font-bold text-revenuePrimary mb-2">Trusted Partnership</h3>
                  <p className="text-gray-600">Leverage our established relationships with top-tier SaaS recruiting partners</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-revenuePink rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-lg font-bold text-revenuePrimary mb-2">Revenue-Driven</h3>
                  <p className="text-gray-600">Focus on candidates who understand and can drive measurable revenue outcomes</p>
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

export default TalentAcquisition;