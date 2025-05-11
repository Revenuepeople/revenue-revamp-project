
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
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-revenuePrimary">Our Consultancy Services</h2>
          <div className="w-20 h-1 bg-revenuePink mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Our strategic consultancy services are designed to elevate your business performance
            and drive sustainable revenue growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="h-2 bg-revenuePink w-full"></div>
              <CardHeader className="pt-6 pb-0">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-revenuePrimary group-hover:text-revenuePink transition-colors">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
