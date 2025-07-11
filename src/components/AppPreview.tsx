
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, User, Edit } from "lucide-react";

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
          {/* My Collections & Wardrobe */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 mb-6">
                <img 
                  src="/lovable-uploads/75306a97-f385-4e43-aa2c-98a9864052cf.png" 
                  alt="RunWear app wardrobe interface" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              
              <h4 className="font-oswald font-bold text-black-coal mb-2">Smart Collections</h4>
              <p className="text-gray-600 text-sm font-inter">
                Group your gear into collections. Mix and match to create the perfect outfit combinations.
              </p>
            </CardContent>
          </Card>

          {/* Clothing Details Editor */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 mb-6">
                <img 
                  src="/lovable-uploads/IMG_8809.png" 
                  alt="RunWear app edit cloth interface" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              
              <h4 className="font-oswald font-bold text-black-coal mb-2">Detailed Tracking</h4>
              <p className="text-gray-600 text-sm font-inter">
                Track brand, model, type, and usage. Perfect for organizing your growing collection.
              </p>
            </CardContent>
          </Card>

          {/* Social Feed */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 mb-6">
                <img 
                  src="/lovable-uploads/IMG_8810.png" 
                  alt="RunWear app feed interface" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              
              <h4 className="font-oswald font-bold text-black-coal mb-2">Share & Discover</h4>
              <p className="text-gray-600 text-sm font-inter">
                Share your outfit collections and discover what others are wearing in the community feed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
