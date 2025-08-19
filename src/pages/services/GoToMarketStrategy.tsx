import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, TrendingUp, Users, Zap, BarChart } from "lucide-react";

const GoToMarketStrategy = () => {
  const benefits = [
    "Accelerated time-to-market for new products and services",
    "Improved customer acquisition and retention rates", 
    "Enhanced market positioning and competitive advantage",
    "Optimised resource allocation and budget efficiency",
    "Data-driven decision making and performance tracking",
    "Sustainable revenue growth and scalability"
  ];

  const services = [
    {
      icon: <Target className="h-8 w-8 text-revealTeal" />,
      title: "Market Analysis & Positioning",
      description: "Comprehensive market research, competitive analysis, and strategic positioning to identify optimal market opportunities and differentiation strategies."
    },
    {
      icon: <Users className="h-8 w-8 text-revealTeal" />,
      title: "Customer Segmentation",
      description: "Detailed buyer persona development and customer journey mapping to ensure targeted messaging and optimised conversion paths."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-revealTeal" />,
      title: "Pricing Strategy",
      description: "Strategic pricing models and packaging strategies designed to maximise revenue whilst maintaining competitive market position."
    },
    {
      icon: <Zap className="h-8 w-8 text-revealTeal" />,
      title: "Launch Planning",
      description: "Comprehensive go-to-market execution plans including timeline, resource allocation, and success metrics for seamless product launches."
    },
    {
      icon: <BarChart className="h-8 w-8 text-revealTeal" />,
      title: "Performance Metrics",
      description: "Implementation of key performance indicators and analytics frameworks to measure success and drive continuous improvement."
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
                Go-to-Market Strategy Consultancy
              </h1>
              <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
              <p className="text-xl lg:text-2xl mb-8 text-revealLight max-w-3xl mx-auto">
                Strategic go-to-market planning that transforms innovative ideas into market-leading successes. 
                Our proven methodologies help SaaS companies achieve sustainable growth and competitive advantage.
              </p>
              <Button asChild className="bg-revealTeal hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-md transition-colours text-lg border-none">
                <a href="https://zcal.co/ryan-fagan/30min" target="_blank" rel="noopener noreferrer">
                  Schedule Your Strategy Session
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
                  Strategic Go-to-Market Excellence
                </h2>
                <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
                <p className="text-lg text-revealBlue">
                  In today's competitive SaaS landscape, a well-executed go-to-market strategy is the difference between 
                  success and struggle. Our consultancy approach combines deep market insights with proven execution 
                  methodologies to accelerate your path to revenue growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-revealDark mb-4">The Challenge</h3>
                  <p className="text-revealBlue mb-4">
                    Many SaaS companies struggle with fragmented go-to-market approaches, leading to inefficient resource 
                    allocation, unclear messaging, and missed revenue opportunities. Without a cohesive strategy, teams 
                    work in silos and growth becomes unpredictable.
                  </p>
                  <ul className="text-revealBlue space-y-2">
                    <li>• Disconnected sales and marketing efforts</li>
                    <li>• Unclear value proposition and messaging</li>
                    <li>• Inefficient customer acquisition processes</li>
                    <li>• Limited market visibility and positioning</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-revealDark mb-4">Our Solution</h3>
                  <p className="text-revealBlue mb-4">
                    We develop comprehensive, data-driven go-to-market strategies that align your entire organisation 
                    around clear objectives, optimised processes, and measurable outcomes. Our approach ensures 
                    sustainable growth and competitive advantage.
                  </p>
                  <ul className="text-revealBlue space-y-2">
                    <li>• Unified strategy across all customer-facing teams</li>
                    <li>• Clear, compelling value propositions</li>
                    <li>• Streamlined customer acquisition funnels</li>
                    <li>• Strong market positioning and differentiation</li>
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
                  Our Go-to-Market Services
                </h2>
                <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
                <p className="text-lg text-revealBlue max-w-3xl mx-auto">
                  From market analysis to launch execution, we provide end-to-end go-to-market consultancy 
                  services designed to accelerate your growth and market success.
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

        {/* Benefits Section */}
        <section className="py-20 bg-revealLight">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-revealDark mb-6">
                  Measurable Business Impact
                </h2>
                <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
                <p className="text-lg text-revealBlue">
                  Our go-to-market strategies deliver tangible results that drive sustainable business growth 
                  and long-term competitive advantage.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-md">
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

export default GoToMarketStrategy;