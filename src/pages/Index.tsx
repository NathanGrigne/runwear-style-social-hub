
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Heart, 
  MessageCircle, 
  Users, 
  Shirt, 
  Star,
  Download,
  Play,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Share2
} from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Community from "@/components/Community";
import AppPreview from "@/components/AppPreview";
import Footer from "@/components/Footer";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white-pure via-gray-50 to-white-pure">
      <Header />
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <Hero />
        <Features />
        <AppPreview />
        {/* <Community /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
