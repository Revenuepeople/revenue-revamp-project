
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/meozbobl", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _honeypot: "", // Honeypot field for spam protection
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your enquiry. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  
                  <Button type="submit" disabled={isSubmitting} className="bg-revealTeal hover:bg-opacity-90 text-white w-full border-none">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
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
