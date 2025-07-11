
import { Button } from "@/components/ui/button";
import { Smartphone, Menu } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white-pure/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-punchy to-blue-electric rounded-lg flex items-center justify-center">
              {/* <Smartphone className="w-5 h-5 text-white" /> */}
              <img src="public/lovable-uploads/logo_runwear.png" alt="Logo RunWear app" />
            </div>
            <span className="text-2xl font-oswald font-bold text-black-coal">RunWear</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-orange-punchy transition-colors font-medium">{t('nav.features')}</a>
            <a href="#preview" className="text-gray-600 hover:text-orange-punchy transition-colors font-medium">{t('nav.preview')}</a>
            {/* <a href="#community" className="text-gray-600 hover:text-orange-punchy transition-colors font-medium">{t('nav.community')}</a> */}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button 
              className="bg-orange-punchy hover:bg-orange-punchy/90 text-white font-medium"
              onClick={() => window.open('https://taap.it/KDnwkP', '_blank')}
            >
              {t('button.downloadApp')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#features" className="text-gray-600 hover:text-orange-punchy transition-colors font-medium">{t('nav.features')}</a>
              <a href="#preview" className="text-gray-600 hover:text-orange-punchy transition-colors font-medium">{t('nav.preview')}</a>
              <a href="#community" className="text-gray-600 hover:text-orange-punchy transition-colors font-medium">{t('nav.community')}</a>
              <div className="flex flex-col space-y-2 pt-2">
                <LanguageSwitcher />
                <Button 
                  className="bg-orange-punchy hover:bg-orange-punchy/90 text-white"
                  onClick={() => window.open('https://taap.it/KDnwkP', '_blank')}
                >
                  {t('button.downloadApp')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
