
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, User } from "lucide-react";

const AppPreview = () => {
  return (
    <section id="preview" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-oswald font-bold text-black-coal mb-4">
            See RunWear in
            <span className="text-transparent bg-gradient-to-r from-orange-punchy to-blue-electric bg-clip-text block">
              Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
            Get a sneak peek at how easy it is to organize, create, and share your athletic outfits.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Wardrobe Organization */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 mb-6">
                <h3 className="font-oswald font-bold text-lg text-black-coal mb-4">My Wardrobe</h3>
                
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-xl flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-electric/20 rounded-lg flex items-center justify-center">
                      👕
                    </div>
                    <div>
                      <p className="font-medium text-sm">Nike Dri-FIT</p>
                      <p className="text-xs text-gray-500">Tank Top • Blue</p>
                    </div>
                    <Badge className="bg-blue-electric/10 text-blue-electric text-xs ml-auto">New</Badge>
                  </div>
                  
                  <div className="bg-white p-3 rounded-xl flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-punchy/20 rounded-lg flex items-center justify-center">
                      👟
                    </div>
                    <div>
                      <p className="font-medium text-sm">Adidas Ultraboost</p>
                      <p className="text-xs text-gray-500">Running • Orange</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h4 className="font-oswald font-bold text-black-coal mb-2">Smart Organization</h4>
              <p className="text-gray-600 text-sm font-inter">
                Automatically categorize by brand, type, and color. Find the perfect piece instantly.
              </p>
            </CardContent>
          </Card>

          {/* Outfit Creation */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 mb-6">
                <h3 className="font-oswald font-bold text-lg text-black-coal mb-4">Create Outfit</h3>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white p-3 rounded-xl text-center">
                    <div className="w-full h-16 bg-blue-electric/20 rounded-lg mb-2 flex items-center justify-center">
                      👕
                    </div>
                    <p className="text-xs font-medium">Nike Tank</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl text-center">
                    <div className="w-full h-16 bg-orange-punchy/20 rounded-lg mb-2 flex items-center justify-center">
                      🩳
                    </div>
                    <p className="text-xs font-medium">Lulu Shorts</p>
                  </div>
                </div>
                
                <Button className="w-full bg-orange-punchy hover:bg-orange-punchy/90 text-white text-sm">
                  Save Outfit
                </Button>
              </div>
              
              <h4 className="font-oswald font-bold text-black-coal mb-2">Mix & Match</h4>
              <p className="text-gray-600 text-sm font-inter">
                Drag and drop to create perfect combinations. Save favorites for quick access.
              </p>
            </CardContent>
          </Card>

          {/* Social Sharing */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">@runner_sarah</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-xl mb-3">
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <div className="h-12 bg-blue-electric/20 rounded"></div>
                    <div className="h-12 bg-orange-punchy/20 rounded"></div>
                    <div className="h-12 bg-gray-200 rounded"></div>
                  </div>
                  <p className="text-xs text-gray-600">"Perfect for my morning 5K! 🏃‍♀️"</p>
                </div>
                
                <div className="flex items-center justify-between text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">24</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs">8</span>
                    </div>
                  </div>
                  <Share2 className="w-4 h-4" />
                </div>
              </div>
              
              <h4 className="font-oswald font-bold text-black-coal mb-2">Share & Connect</h4>
              <p className="text-gray-600 text-sm font-inter">
                Show off your style and get inspired by the community. Like and comment on friends' outfits.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
