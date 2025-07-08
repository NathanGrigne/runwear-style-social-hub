
import { Button } from "@/components/ui/button";
import { Smartphone, Download, Play } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black-coal text-white py-20">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-oswald font-bold mb-4">
            Ready to Level Up Your
            <span className="text-transparent bg-gradient-to-r from-orange-punchy to-blue-electric bg-clip-text block">
              Athletic Style?
            </span>
          </h2>
          <p className="text-xl text-gray-300 font-inter mb-8 max-w-2xl mx-auto">
            Join thousands of athletes who've transformed how they organize and share their sport wardrobe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-punchy hover:bg-orange-punchy/90 text-white font-medium px-8 py-4 text-lg group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download for iOS
            </Button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 border-t border-gray-800 pt-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-punchy to-blue-electric rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-oswald font-bold">RunWear</span>
            </div>
            <p className="text-gray-300 font-inter mb-6 max-w-md">
              The ultimate app for organizing your sport wardrobe, creating outfits, and sharing with friends. 
              Make every workout stylish.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-punchy transition-colors cursor-pointer">
                📘
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-punchy transition-colors cursor-pointer">
                📷
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-punchy transition-colors cursor-pointer">
                🐦
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-oswald font-bold text-lg mb-4">Product</h4>
            <ul className="space-y-2 text-gray-300 font-inter">
              <li><a href="#" className="hover:text-orange-punchy transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-orange-punchy transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-orange-punchy transition-colors">Updates</a></li>
              <li><a href="#" className="hover:text-orange-punchy transition-colors">Beta</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-oswald font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300 font-inter">
              <li><a href="#" className="hover:text-blue-electric transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-electric transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-electric transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-blue-electric transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-inter text-sm">
            © 2024 RunWear. All rights reserved.
          </p>
          <p className="text-gray-400 font-inter text-sm">
            Made with ❤️ for athletes everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
