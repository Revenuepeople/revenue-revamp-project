
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
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-revealDark">Get in Touch</h2>
            <div className="w-24 h-1 bg-revealTeal mx-auto my-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-revealBlue">
              Have questions about our consultancy services? We'd love to hear from you.
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-revealLight p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-revealDark border-b pb-4 border-revealTeal/30">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-revealTeal/20 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-revealTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-revealDark">Our Office</h4>
                  </div>
                  <p className="text-revealBlue ml-12">London, United Kingdom</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-revealTeal/20 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-revealTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-revealDark">Email Us</h4>
                  </div>
                  <p className="text-revealBlue ml-12">info@revenuepeople.io</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-revealTeal/20 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-revealTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-revealDark">Call Us</h4>
                  </div>
                  <p className="text-revealBlue ml-12">+44 (0) 123 456 7890</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-revealTeal/20 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-revealTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-revealDark">Business Hours</h4>
                  </div>
                  <p className="text-revealBlue ml-12">Monday - Friday: 9am - 6pm</p>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-revealDark">Name</label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-revealBlue/20 focus:border-revealTeal focus:ring-revealTeal"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-revealDark">Email</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-revealBlue/20 focus:border-revealTeal focus:ring-revealTeal"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block mb-2 font-medium text-revealDark">Company Name</label>
                    <Input 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border-revealBlue/20 focus:border-revealTeal focus:ring-revealTeal"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-revealDark">Message</label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-[150px] border-revealBlue/20 focus:border-revealTeal focus:ring-revealTeal"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="bg-revealTeal hover:bg-opacity-90 text-white w-full border-none">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
