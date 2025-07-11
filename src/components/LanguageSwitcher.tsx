import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Languages className="w-4 h-4 text-gray-600" />
      <div className="flex bg-gray-100 rounded-lg p-1">
        <Button
          variant="ghost"
          size="sm"
          className={`px-3 py-1 text-xs font-medium transition-all ${
            language === 'en' 
              ? 'bg-white text-orange-punchy shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setLanguage('en')}
        >
          EN
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={`px-3 py-1 text-xs font-medium transition-all ${
            language === 'fr' 
              ? 'bg-white text-orange-punchy shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setLanguage('fr')}
        >
          FR
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;