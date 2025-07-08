
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shirt, 
  Users, 
  Heart, 
  MessageCircle, 
  Sparkles, 
  TrendingUp,
  CheckCircle,
  Share2
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Smart Wardrobe",
      description: "Organize by brand, model, and type. Tag your Nike Air Max, Adidas Ultraboost, and more.",
      color: "from-blue-electric to-blue-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Outfit Creator",
      description: "Mix and match your gear to create the perfect look for any workout or occasion.",
      color: "from-orange-punchy to-red-500"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Sharing",
      description: "Show off your style! Share outfits with friends and the RunWear community.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Like & Comment",
      description: "Engage with friends' outfits. Give likes and leave encouraging comments.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Feed",
      description: "Get inspired by outfits from runners, gym enthusiasts, and athletes worldwide.",
      color: "from-cyan-500 to-blue-400"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-oswald font-bold text-black-coal mb-4">
            Everything You Need to 
            <span className="text-transparent bg-gradient-to-r from-orange-punchy to-blue-electric bg-clip-text block">
              Level Up Your Style
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
            From organizing your collection to sharing with friends, RunWear has all the tools 
            to make your athletic wardrobe work for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-oswald font-bold text-black-coal mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 font-inter leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-r from-orange-punchy to-blue-electric text-white border-0 overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="relative z-10">
                  <h3 className="text-3xl font-oswald font-bold mb-4">
                    Join the RunWear Community
                  </h3>
                  <p className="text-lg font-inter opacity-90 mb-6">
                    Connect with athletes sharing their favorite gear combinations.
                  </p>
                </div>
                {/* Background decoration */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            {[
              { icon: <CheckCircle className="w-5 h-5" />, text: "Free to download & use" },
              { icon: <CheckCircle className="w-5 h-5" />, text: "No ads or hidden fees" },
              { icon: <CheckCircle className="w-5 h-5" />, text: "Regular updates & new features" },
              { icon: <CheckCircle className="w-5 h-5" />, text: "Cross-platform sync" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-700">
                <div className="text-green-500">{item.icon}</div>
                <span className="font-inter font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
