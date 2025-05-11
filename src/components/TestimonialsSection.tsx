
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
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechInnovate",
    quote: "Working with Revenue People completely transformed our business approach. Their consultancy services helped us identify key growth opportunities we'd been missing for years. The ROI has been exceptional.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "COO",
    company: "Growth Dynamics",
    quote: "The strategic insights provided by the Revenue People team gave us a competitive edge in our market. Their consultancy approach is both innovative and practical, delivering real, measurable results.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Head of Sales",
    company: "Velocity Partners",
    quote: "Revenue People's consultancy services helped us restructure our entire sales process. Their expertise in revenue optimization strategies directly contributed to a 40% increase in our quarterly earnings.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Managing Director",
    company: "Apex Solutions",
    quote: "I was skeptical at first, but Revenue People's strategic consultancy has been a game-changer for our business. Their team took the time to understand our unique challenges and provided tailored solutions.",
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
            Don't just take our word for it. See how our consultancy services have helped businesses achieve exceptional growth.
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
