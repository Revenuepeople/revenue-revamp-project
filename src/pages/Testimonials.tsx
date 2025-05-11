
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const detailedTestimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechInnovate",
      quote: "Working with Revenue People completely transformed our business approach. Their consultancy services helped us identify key growth opportunities we'd been missing for years. The strategic insights they provided were invaluable, and their team was professional and supportive throughout the entire process. Within six months of implementing their recommendations, we saw a 35% increase in revenue and significantly improved operational efficiency. The ROI has been exceptional, and we continue to work with them on our long-term growth strategy.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "COO",
      company: "Growth Dynamics",
      quote: "The strategic insights provided by the Revenue People team gave us a competitive edge in our market. Their consultancy approach is both innovative and practical, delivering real, measurable results. What impressed me most was their ability to quickly understand our unique business challenges and tailor their solutions accordingly. They didn't just offer generic advice; they developed a comprehensive strategy specific to our industry and growth goals. The implementation support was excellent, and they remained engaged with us well beyond the initial consultancy period to ensure successful execution.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Head of Sales",
      company: "Velocity Partners",
      quote: "Revenue People's consultancy services helped us restructure our entire sales process. Their expertise in revenue optimization strategies directly contributed to a 40% increase in our quarterly earnings. The team took the time to understand our sales cycle, identify bottlenecks, and implement targeted improvements. They provided valuable training to our sales team and introduced innovative approaches to prospect qualification and customer retention. What stands out about Revenue People is their results-oriented mindset and their commitment to delivering tangible value.",
      rating: 5,
    },
    {
      name: "David Wilson",
      position: "Managing Director",
      company: "Apex Solutions",
      quote: "I was skeptical at first, but Revenue People's strategic consultancy has been a game-changer for our business. Their team took the time to understand our unique challenges and provided tailored solutions. The analysis they conducted was incredibly thorough, uncovering insights about our market positioning that we had completely missed. They helped us realign our service offerings to better meet customer needs and optimize our pricing strategy. The guidance they provided on our expansion into new markets was particularly valuable, allowing us to avoid common pitfalls and accelerate our growth journey.",
      rating: 5,
    },
    {
      name: "Jennifer Lee",
      position: "Marketing Director",
      company: "Innovate Digital",
      quote: "Revenue People helped us transform our marketing strategy from a cost center to a revenue driver. Their consultancy team provided data-driven insights that allowed us to better allocate our budget and focus on high-performing channels. They worked closely with our team to develop more effective messaging and build a stronger value proposition. The results were remarkable – our customer acquisition cost decreased by 30% while conversion rates improved significantly. I highly recommend their services to any business looking to optimize their marketing performance and drive growth.",
      rating: 5,
    },
    {
      name: "Robert Taylor",
      position: "Founder",
      company: "Horizon Technologies",
      quote: "As a startup founder, I needed strategic guidance to scale my business effectively. Revenue People's consultancy provided exactly what I needed – practical advice combined with strategic vision. They helped us refine our business model, identify our ideal customer profile, and develop a sustainable growth strategy. Their support in preparing for our funding round was invaluable, helping us articulate our value proposition in a way that resonated with investors. Thanks to their guidance, we secured the funding we needed and have been able to execute our growth plan with confidence.",
      rating: 5,
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20 bg-revenuePrimary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Hear what our clients have to say about our consultancy services and the results we've delivered.
          </p>
        </div>
      </div>
      
      <TestimonialsSection />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-revenuePrimary text-center">Success Stories</h2>
            <div className="w-20 h-1 bg-revenuePink mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 gap-8">
              {detailedTestimonials.map((testimonial, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/4">
                        <div className="bg-revenueGray p-4 rounded-lg flex flex-col items-center justify-center h-full">
                          <div className="w-16 h-16 bg-revenuePrimary rounded-full mb-3"></div>
                          <h4 className="font-bold text-revenuePrimary text-center">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm text-center">{testimonial.position}</p>
                          <p className="text-gray-600 text-sm font-medium text-center">{testimonial.company}</p>
                          <div className="flex mt-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-revenuePink text-revenuePink"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <blockquote className="text-gray-700 italic mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="h-1 w-20 bg-revenueGray"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Testimonials;
