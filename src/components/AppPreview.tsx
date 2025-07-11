
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
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 mb-6">
                <h3 className="font-oswald font-bold text-lg text-black-coal mb-4">Edit your cloth</h3>
                
                {/* Clothing Image */}
                <div className="bg-gray-200 rounded-xl p-4 mb-4 text-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-medium">Satisfy t-shirt</p>
                </div>
                
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  <Badge className="bg-blue-electric text-white">Top</Badge>
                  <Badge variant="outline" className="text-gray-500">Bottom</Badge>
                  <Badge variant="outline" className="text-gray-500">Socks</Badge>
                  <Badge variant="outline" className="text-gray-500">Shoes</Badge>
                </div>
                
                {/* Form Fields */}
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-600">Clothing name:</p>
                    <p className="font-medium">Satisfy t-shirt</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Clothing brand:</p>
                    <p className="font-medium">Satisfy</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Clothing model:</p>
                    <p className="font-medium">AuraLite</p>
                  </div>
                </div>
                
                <Button className="w-full bg-orange-punchy hover:bg-orange-punchy/90 text-white text-sm mt-4">
                  SAVE
                </Button>
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
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 mb-6">
                {/* Feed Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-oswald font-bold text-lg text-black-coal">Feed</h3>
                  <div className="text-orange-punchy text-sm font-medium">Log out</div>
                </div>
                
                {/* Outfit Post */}
                <div className="bg-white p-4 rounded-xl mb-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-blue-electric/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">RW</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">RunWear</p>
                      <p className="text-xs text-gray-500">Sunset Grind</p>
                    </div>
                  </div>
                  
                  {/* Outfit Items */}
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    <div className="bg-orange-punchy/20 rounded-lg p-2 text-center">
                      <p className="text-xs font-medium">HAT</p>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-2 text-center">
                      <p className="text-xs font-medium">TOP</p>
                    </div>
                    <div className="bg-orange-punchy/30 rounded-lg p-2 text-center">
                      <p className="text-xs font-medium">BOTTOM</p>
                    </div>
                    <div className="bg-black rounded-lg p-2 text-center">
                      <p className="text-xs font-medium text-white">SOCKS</p>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500 mb-2">Published 1 hour ago</p>
                </div>
                
                {/* Second Post Preview */}
                <div className="bg-white p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-blue-electric/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">RW</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">RunWear</p>
                      <p className="text-xs text-gray-500">Ice Edge</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 mb-2">
                    <div className="bg-orange-punchy/20 rounded-lg p-2 text-center">
                      <p className="text-xs font-medium">HAT</p>
                    </div>
                    <div className="bg-purple-200 rounded-lg p-2 text-center">
                      <p className="text-xs font-medium">ACCESS.</p>
                    </div>
                    <div className="bg-blue-electric/20 rounded-lg p-2 text-center">
                      <p className="text-xs font-medium">TOP</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-2 text-center">
                      <p className="text-xs font-medium text-white">BOTTOM</p>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500">Published 1 hour ago</p>
                </div>
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
