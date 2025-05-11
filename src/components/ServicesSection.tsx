
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Strategic Consultancy",
      description: "Comprehensive business analysis and strategic planning to identify growth opportunities and optimize operations.",
      icon: "🎯"
    },
    {
      title: "Revenue Optimization",
      description: "Maximize your earning potential with data-driven strategies and innovative revenue models.",
      icon: "📈"
    },
    {
      title: "Business Development",
      description: "Expand your market reach and establish valuable partnerships to drive sustainable growth.",
      icon: "🌱"
    },
    {
      title: "Performance Analysis",
      description: "In-depth assessment of your business performance to identify strengths, weaknesses, and improvement areas.",
      icon: "📊"
    },
    {
      title: "Market Positioning",
      description: "Differentiate your business in a crowded marketplace with expert positioning strategies.",
      icon: "🔍"
    },
    {
      title: "Talent Solutions",
      description: "Strategic advice on building and nurturing high-performing teams aligned with your business objectives.",
      icon: "👥"
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-revealDark">Our Consultancy Services</h2>
          <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-revealBlue">
            Our strategic consultancy services are designed to elevate your business performance
            and drive sustainable revenue growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group bg-white">
              <div className="h-2 bg-revealTeal w-full"></div>
              <CardHeader className="pt-6 pb-0">
                <div className="text-4xl mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-revealDark group-hover:text-revealTeal transition-colors text-center">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-revealBlue">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
