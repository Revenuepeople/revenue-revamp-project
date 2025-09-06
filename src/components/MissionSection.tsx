import { Card, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Background glow effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
          </div>
          
          <Card className="relative z-10 border-2 border-primary/20 shadow-2xl bg-card/95 backdrop-blur-sm ring-1 ring-primary/10">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-8">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                  <Target className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Our Mission
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-4xl mx-auto">
                Our mission is to elevate the status of salespeople everywhere through a relentless dedication to execution excellence, transparency and empowering teams to reach their highest potential.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;