
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Play, Star, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-electric/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-punchy/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <Badge className="bg-orange-punchy/10 text-orange-punchy border-orange-punchy/20 hover:bg-orange-punchy/20">
                🔥 Now Available on iOS
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-oswald font-bold text-black-coal leading-tight">
                Organize Your
                <span className="text-transparent bg-gradient-to-r from-orange-punchy to-blue-electric bg-clip-text block">
                  Sport Wardrobe
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 font-inter leading-relaxed max-w-lg">
                Create stunning outfits, share with friends, and discover new combinations. 
                RunWear makes organizing your athletic wear fun and social.
              </p>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-punchy hover:bg-orange-punchy/90 text-white font-medium px-8 py-4 text-lg group"
                onClick={() => window.open('https://taap.it/KDnwkP', '_blank')}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Free
              </Button>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative animate-fade-in">
            <div className="relative w-80 h-[600px] mx-auto">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-black-coal rounded-[3rem] shadow-2xl"></div>
              <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
                {/* Mock App Screen */}
                <div className="h-full bg-gradient-to-br from-gray-50 to-white relative">
                  {/* Status Bar */}
                  <div className="h-12 bg-white flex items-center justify-between px-6 text-sm font-medium text-black-coal">
                    <span>9:41</span>
                    <span>RunWear</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-black-coal rounded-sm"></div>
                      <div className="w-6 h-2 bg-black-coal rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-6 space-y-4">
                    <div className="bg-gradient-to-r from-orange-punchy to-blue-electric p-4 rounded-2xl text-white">
                      <h3 className="font-oswald font-bold text-lg">Today's Outfit</h3>
                      <p className="text-sm opacity-90">Perfect for your morning run</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded-xl shadow-sm border">
                        <div className="w-full h-20 bg-blue-electric/20 rounded-lg mb-2"></div>
                        <p className="text-xs font-medium">Nike Tank</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl shadow-sm border">
                        <div className="w-full h-20 bg-orange-punchy/20 rounded-lg mb-2"></div>
                        <p className="text-xs font-medium">Adidas Shorts</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm border space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Recent Activity</span>
                        <Badge className="bg-green-100 text-green-700 text-xs">3 likes</Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-orange-punchy rounded-full"></div>
                        <span className="text-xs text-gray-600">Sarah liked your outfit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-orange-punchy text-white p-3 rounded-xl shadow-lg animate-float">
                <span className="text-sm font-bold">+12 likes</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-electric text-white p-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-sm font-bold">New outfit!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
