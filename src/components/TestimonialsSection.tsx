
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Katie Thompson",
    position: "Founder",
    company: "Voco",
    quote: "Ryan was invaluable in helping us to establish our approach to sales. He provided expert guidance in setting up the fundamentals of a sales function for a SaaS business, and shared insights and approaches which helped us build pipeline and close key deals. He has deep knowledge, great communication skills, and is a delight to work with!",
    rating: 5,
  },
  {
    id: 2,
    name: "Alexander Leonida",
    position: "Founder",
    company: "Silkflo",
    quote: "As the founder of a SaaS business, Ryan helped us understand and implement a value-led sales approach, with the goal of improving early-stage conversions. Ryan has deep knowledge and shared practical insights that were invaluable. He guided us through the process of aligning our sales strategy with customer value, resulting in more meaningful client relationships and improved performance.",
    rating: 5,
  },
  {
    id: 3,
    name: "Casper B. Laursen",
    position: "CEO",
    company: "Pandektes",
    quote: "Ryan provided invaluable consulting advice to enhance our team's sales fundamentals. His expertise and guidance significantly improved our sales strategies and techniques, leading to notable improvements in our overall performance. Ryan's ability to tailor his approach to our specific needs and communicate complex concepts clearly made a lasting impact on our sales processes.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
      setAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
      setAnimating(false);
    }, 300);
  };

  return (
    <section className="py-16 bg-revenueGray" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-revenuePrimary">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-revenuePink mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it. See how our consultancy services have helped businesses achieve exceptional revenue growth.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Button 
            variant="outline" 
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-revenueGray md:-left-5"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="overflow-hidden">
            <div 
              className={`flex transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}
            >
              <Card className="border-none shadow-lg w-full">
                <CardContent className="pt-8 pb-10 px-6 md:px-10">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-revenuePink text-revenuePink"
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-gray-700 text-center mb-8 italic">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  
                  <div className="text-center">
                    <h4 className="font-bold text-lg text-revenuePrimary">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Button 
            variant="outline" 
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-revenueGray md:-right-5"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-revenuePink" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
