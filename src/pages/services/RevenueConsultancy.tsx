import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, DollarSign, BarChart3, Users2, Target } from "lucide-react";

const RevenueConsultancy = () => {
  const benefits = [
    "Sustainable revenue growth and predictable income streams",
    "Improved customer lifetime value and retention rates", 
    "Enhanced revenue visibility and forecasting accuracy",
    "Optimised pricing strategies and packaging models",
    "Aligned cross-functional teams and processes",
    "Data-driven revenue insights and decision making"
  ];

  const services = [
    {
      icon: <TrendingUp className="h-8 w-8 text-revealTeal" />,
      title: "Revenue Strategy",
      description: "Comprehensive revenue planning and strategy development that aligns all customer-facing functions around unified growth objectives."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-revealTeal" />,
      title: "Pricing Optimisation",
      description: "Advanced pricing strategies, packaging models, and revenue optimisation techniques designed to maximise customer value and business growth."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-revealTeal" />,
      title: "Revenue Operations",
      description: "Implementation of robust revenue operations framework including processes, technology, and analytics to drive operational excellence."
    },
    {
      icon: <Users2 className="h-8 w-8 text-revealTeal" />,
      title: "Team Alignment",
      description: "Cross-functional alignment strategies that break down silos and ensure sales, marketing, and customer success work towards common goals."
    },
    {
      icon: <Target className="h-8 w-8 text-revealTeal" />,
      title: "Performance Management",
      description: "Advanced metrics, KPI frameworks, and performance management systems that drive accountability and continuous improvement."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-revealDark to-revealBlue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Revenue Consultancy Services
              </h1>
              <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
              <p className="text-xl lg:text-2xl mb-8 text-revealLight max-w-3xl mx-auto">
                Unlock your revenue potential with strategic consultancy that optimises every aspect of your revenue engine. 
                From strategy to execution, we help SaaS companies build predictable, scalable growth.
              </p>
              <Button asChild className="bg-revealTeal hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-md transition-colours text-lg border-none">
                <a href="https://zcal.co/ryan-fagan/30min" target="_blank" rel="noopener noreferrer">
                  Maximise Your Revenue Potential
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-revealLight">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-revealDark mb-6">
                  Strategic Revenue Transformation
                </h2>
                <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
                <p className="text-lg text-revealBlue">
                  Revenue growth in SaaS requires more than just great products—it demands strategic alignment, 
                  operational excellence, and data-driven decision making across the entire customer journey. 
                  Our consultancy approach transforms revenue operations into competitive advantages.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-revealDark mb-4">Revenue Challenges</h3>
                  <p className="text-revealBlue mb-4">
                    Many SaaS companies face revenue growth plateaus due to misaligned teams, inefficient processes, 
                    and lack of strategic coordination. Without unified revenue operations, growth becomes unpredictable 
                    and scaling becomes increasingly difficult.
                  </p>
                  <ul className="text-revealBlue space-y-2">
                    <li>• Fragmented customer journey and experience</li>
                    <li>• Misaligned sales, marketing, and customer success</li>
                    <li>• Inconsistent pricing and packaging strategies</li>
                    <li>• Limited revenue visibility and forecasting</li>
                    <li>• Inefficient resource allocation and planning</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-revealDark mb-4">Our Methodology</h3>
                  <p className="text-revealBlue mb-4">
                    We implement comprehensive revenue strategies that align people, processes, and technology around 
                    unified growth objectives. Our approach ensures sustainable, predictable revenue growth that 
                    scales with your business ambitions.
                  </p>
                  <ul className="text-revealBlue space-y-2">
                    <li>• Unified customer experience across all touchpoints</li>
                    <li>• Cross-functional alignment and collaboration</li>
                    <li>• Data-driven pricing and packaging strategies</li>
                    <li>• Real-time revenue analytics and forecasting</li>
                    <li>• Strategic resource allocation and planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-revealDark mb-6">
                  Comprehensive Revenue Services
                </h2>
                <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
                <p className="text-lg text-revealBlue max-w-3xl mx-auto">
                  From strategic planning to operational execution, our revenue consultancy services cover every 
                  aspect of the revenue engine to drive sustainable growth and competitive advantage.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                    <div className="h-2 bg-revealTeal w-full"></div>
                    <CardHeader className="pt-6">
                      <div className="flex justify-center mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-revealDark text-center">{service.title}</h3>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-revealBlue">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Framework Section */}
        <section className="py-20 bg-revealLight">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-revealDark mb-6">
                  Revenue Excellence Framework
                </h2>
                <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
                <p className="text-lg text-revealBlue">
                  Our proven framework addresses all critical aspects of revenue generation and optimisation, 
                  ensuring comprehensive growth across the entire customer lifecycle.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-revealTeal text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
                  <h3 className="text-xl font-bold text-revealDark mb-4">Strategy & Planning</h3>
                  <p className="text-revealBlue">
                    Comprehensive revenue strategy development, market analysis, and strategic planning that aligns 
                    with business objectives and market opportunities.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-revealTeal text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
                  <h3 className="text-xl font-bold text-revealDark mb-4">Execution & Operations</h3>
                  <p className="text-revealBlue">
                    Implementation of optimised processes, systems, and workflows that enable efficient revenue 
                    generation and consistent customer experiences.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-revealTeal text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
                  <h3 className="text-xl font-bold text-revealDark mb-4">Measurement & Optimisation</h3>
                  <p className="text-revealBlue">
                    Advanced analytics, performance tracking, and continuous optimisation to ensure sustained 
                    revenue growth and competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-revealDark mb-6">
                  Proven Revenue Impact
                </h2>
                <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
                <p className="text-lg text-revealBlue">
                  Our revenue consultancy delivers measurable results that drive sustainable business growth 
                  and create lasting competitive advantages.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start bg-revealLight p-6 rounded-lg shadow-md">
                    <CheckCircle className="h-6 w-6 text-revealTeal mr-4 mt-1 flex-shrink-0" />
                    <span className="text-revealBlue font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default RevenueConsultancy;