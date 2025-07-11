
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, User, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Community = () => {
  const { t } = useLanguage();
  const posts = [
    {
      user: "@mike_runner",
      time: "3h ago",
      image: "🏃‍♂️",
      outfit: ["👕", "🩳", "👟"],
      caption: "Ready for the marathon training! New gear from Nike 💪",
      likes: 127,
      comments: 23,
      verified: true
    },
    {
      user: "@gym_goddess",
      time: "5h ago", 
      image: "💪",
      outfit: ["🏋️‍♀️", "👶", "👟"],
      caption: "Leg day outfit! These Lululemon leggings are amazing 🔥",
      likes: 89,
      comments: 15,
      verified: false
    },
    {
      user: "@trail_explorer",
      time: "1d ago",
      image: "🥾",
      outfit: ["🧥", "👖", "🥾"],
      caption: "Perfect hiking gear for the weekend adventure! ⛰️",
      likes: 156,
      comments: 31,
      verified: true
    }
  ];

  const testimonials = [
    {
      name: "Jessica Chen",
      role: "Marathon Runner",
      quote: "RunWear changed how I organize my gear. I can plan outfits for the entire week!",
      rating: 5
    },
    {
      name: "Marcus Johnson", 
      role: "Fitness Influencer",
      quote: "The social features are incredible. My followers love seeing my daily workout fits.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Yoga Instructor", 
      quote: "Finally, an app that understands athletes. The brand organization is perfect!",
      rating: 5
    }
  ];

  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-oswald font-bold text-black-coal mb-4">
            Join the
            <span className="text-transparent bg-gradient-to-r from-orange-punchy to-blue-electric bg-clip-text">
              &nbsp;RunWear Community
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
            See what athletes around the world are wearing and sharing. Get inspired, share your style.
          </p>
        </div>

        {/* Community Feed */}
        <div className="mb-20">
          <h3 className="text-2xl font-oswald font-bold text-black-coal mb-8 text-center">
            Latest from the Community
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {posts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  {/* User Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-punchy to-blue-electric rounded-full flex items-center justify-center text-white text-lg">
                      {post.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-1">
                        <p className="font-medium text-sm text-black-coal">{post.user}</p>
                        {post.verified && (
                          <div className="w-4 h-4 bg-blue-electric rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{post.time}</p>
                    </div>
                  </div>

                  {/* Outfit Display */}
                  <div className="bg-white p-4 rounded-xl mb-4 border group-hover:border-orange-punchy/20 transition-colors">
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      {post.outfit.map((item, idx) => (
                        <div key={idx} className="h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                          {item}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 font-inter">{post.caption}</p>
                  </div>

                  {/* Engagement */}
                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 hover:text-red-500 transition-colors cursor-pointer">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm font-medium">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 hover:text-blue-electric transition-colors cursor-pointer">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">{post.comments}</span>
                      </div>
                    </div>
                    <Badge className="bg-gray-100 text-gray-600 text-xs hover:bg-orange-punchy/10 hover:text-orange-punchy">
                      View Outfit
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-oswald font-bold text-black-coal mb-8 text-center">
            What Athletes Are Saying
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 font-inter italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  
                  <div>
                    <p className="font-oswald font-bold text-black-coal">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
