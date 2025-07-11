
import { Button } from "@/components/ui/button";
import { Smartphone, Download, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-black-coal text-white py-20">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-oswald font-bold mb-4">
            {t('footer.title1')}
            <span className="text-transparent bg-gradient-to-r from-orange-punchy to-blue-electric bg-clip-text block">
              {t('footer.title2')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 font-inter mb-8 max-w-2xl mx-auto">
            {t('footer.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-punchy hover:bg-orange-punchy/90 text-white font-medium px-8 py-4 text-lg group"
              onClick={() => window.open('https://taap.it/KDnwkP', '_blank')}
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              {t('footer.downloadiOS')}
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
              {t('footer.description')}
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
            <h4 className="font-oswald font-bold text-lg mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2 text-gray-300 font-inter">
              <li><a href="#" className="hover:text-orange-punchy transition-colors">{t('footer.features')}</a></li>
              <li><a href="#" className="hover:text-orange-punchy transition-colors">{t('footer.pricing')}</a></li>
              <li><a href="#" className="hover:text-orange-punchy transition-colors">{t('footer.updates')}</a></li>
              <li><a href="#" className="hover:text-orange-punchy transition-colors">{t('footer.beta')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-oswald font-bold text-lg mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2 text-gray-300 font-inter">
              <li><a href="#" className="hover:text-blue-electric transition-colors">{t('footer.helpCenter')}</a></li>
              <li><a href="#" className="hover:text-blue-electric transition-colors">{t('footer.contactUs')}</a></li>
              <li><a href="#" className="hover:text-blue-electric transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-blue-electric transition-colors">{t('footer.terms')}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-inter text-sm">
            {t('footer.copyright')}
          </p>
          <p className="text-gray-400 font-inter text-sm">
            {t('footer.madeWith')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
