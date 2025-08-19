import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Settings, Database, LineChart, Workflow, Shield } from "lucide-react";

const SalesOperations = () => {
  const benefits = [
    "Increased sales team productivity and efficiency",
    "Improved forecast accuracy and pipeline visibility", 
    "Enhanced customer experience and satisfaction",
    "Streamlined sales processes and reduced admin burden",
    "Better data quality and actionable insights",
    "Accelerated deal velocity and higher conversion rates"
  ];

  const services = [
    {
      icon: <Settings className="h-8 w-8 text-revealTeal" />,
      title: "CRM Optimisation",
      description: "Complete CRM setup, customisation, and optimisation to ensure your sales team has the tools and processes needed for maximum efficiency and results."
    },
    {
      icon: <Database className="h-8 w-8 text-revealTeal" />,
      title: "Data Management",
      description: "Implementation of robust data governance, quality controls, and analytics frameworks to provide accurate, actionable sales intelligence."
    },
    {
      icon: <Workflow className="h-8 w-8 text-revealTeal" />,
      title: "Process Design",
      description: "Development of standardised sales processes, playbooks, and workflows that ensure consistency and scalability across your sales organisation."
    },
    {
      icon: <LineChart className="h-8 w-8 text-revealTeal" />,
      title: "Performance Analytics",
      description: "Advanced reporting and dashboard implementation to track key metrics, identify trends, and optimise sales performance at every level."
    },
    {
      icon: <Shield className="h-8 w-8 text-revealTeal" />,
      title: "Sales Enablement",
      description: "Training programmes, content creation, and enablement tools that empower your sales team to sell more effectively and consistently."
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
                Sales Operations Consultancy
              </h1>
              <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
              <p className="text-xl lg:text-2xl mb-8 text-revealLight max-w-3xl mx-auto">
                Transform your sales organisation with streamlined operations, optimised processes, and data-driven insights. 
                Our expertise helps SaaS companies build scalable, efficient sales machines.
              </p>
              <Button asChild className="bg-revealTeal hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-md transition-colours text-lg border-none">
                <a href="https://zcal.co/ryan-fagan/30min" target="_blank" rel="noopener noreferrer">
                  Optimise Your Sales Operations
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
                  Operational Excellence in Sales
                </h2>
                <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
                <p className="text-lg text-revealBlue">
                  Modern SaaS sales requires sophisticated operations to manage complex customer journeys, multiple 
                  touchpoints, and data-driven decision making. Our consultancy transforms sales operations from 
                  a cost centre into a competitive advantage.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-revealDark mb-4">Common Challenges</h3>
                  <p className="text-revealBlue mb-4">
                    Many SaaS companies struggle with inefficient sales operations that create friction, reduce 
                    productivity, and limit growth potential. Without proper operations foundation, scaling becomes 
                    increasingly difficult and expensive.
                  </p>
                  <ul className="text-revealBlue space-y-2">
                    <li>• Manual processes and data entry inefficiencies</li>
                    <li>• Poor data quality and reporting accuracy</li>
                    <li>• Inconsistent sales processes and methodologies</li>
                    <li>• Limited visibility into pipeline and performance</li>
                    <li>• Technology stack fragmentation and poor integration</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-revealDark mb-4">Our Approach</h3>
                  <p className="text-revealBlue mb-4">
                    We implement world-class sales operations that automate routine tasks, provide actionable insights, 
                    and enable your sales team to focus on what they do best - selling. Our solutions scale with 
                    your business and adapt to changing market conditions.
                  </p>
                  <ul className="text-revealBlue space-y-2">
                    <li>• Automated workflows and intelligent data capture</li>
                    <li>• Clean, reliable data and advanced analytics</li>
                    <li>• Standardised, repeatable sales processes</li>
                    <li>• Real-time pipeline visibility and forecasting</li>
                    <li>• Integrated technology ecosystem</li>
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
                  Comprehensive Sales Operations Services
                </h2>
                <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
                <p className="text-lg text-revealBlue max-w-3xl mx-auto">
                  From CRM optimisation to advanced analytics, we provide end-to-end sales operations consultancy 
                  that transforms your sales organisation's efficiency and effectiveness.
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

        {/* Process Section */}
        <section className="py-20 bg-revealLight">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-revealDark mb-6">
                  Our Implementation Process
                </h2>
                <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
                <p className="text-lg text-revealBlue">
                  We follow a structured approach to ensure successful implementation and adoption of new 
                  sales operations processes and technologies.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-revealTeal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h3 className="text-lg font-bold text-revealDark mb-2">Assessment</h3>
                  <p className="text-revealBlue text-sm">Comprehensive audit of current sales operations, processes, and technology stack.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-revealTeal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h3 className="text-lg font-bold text-revealDark mb-2">Strategy</h3>
                  <p className="text-revealBlue text-sm">Development of tailored operations strategy aligned with business objectives and growth plans.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-revealTeal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h3 className="text-lg font-bold text-revealDark mb-2">Implementation</h3>
                  <p className="text-revealBlue text-sm">Systematic rollout of new processes, technologies, and training programmes.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-revealTeal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                  <h3 className="text-lg font-bold text-revealDark mb-2">Optimisation</h3>
                  <p className="text-revealBlue text-sm">Ongoing monitoring, analysis, and refinement to ensure continuous improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-revealDark mb-6">
                  Results You Can Measure
                </h2>
                <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
                <p className="text-lg text-revealBlue">
                  Our sales operations consultancy delivers measurable improvements that directly impact 
                  your bottom line and competitive position.
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

export default SalesOperations;