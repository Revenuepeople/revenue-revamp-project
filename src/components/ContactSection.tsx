
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you shortly.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-revenuePrimary">Get in Touch</h2>
            <div className="w-20 h-1 bg-revenuePink mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Have questions about our consultancy services? We'd love to hear from you.
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-revenueGray p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-revenuePrimary">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-revenuePrimary mb-1">Our Office</h4>
                  <address className="not-italic text-gray-600">
                    London, United Kingdom
                  </address>
                </div>
                
                <div>
                  <h4 className="font-semibold text-revenuePrimary mb-1">Email Us</h4>
                  <p className="text-gray-600">info@revenuepeople.io</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-revenuePrimary mb-1">Call Us</h4>
                  <p className="text-gray-600">+44 (0) 123 456 7890</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-revenuePrimary mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block mb-2 font-medium text-gray-700">Company Name</label>
                  <Input 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[150px]"
                    required
                  />
                </div>
                
                <Button type="submit" className="bg-revenuePink hover:bg-opacity-90 text-white w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
