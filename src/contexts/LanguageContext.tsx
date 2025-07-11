import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.features': 'Features',
    'nav.preview': 'Preview',
    'nav.community': 'Community',
    'button.downloadApp': 'Download App',
    
    // Hero
    'hero.title1': 'Organize Your',
    'hero.title2': 'Athletic Wardrobe',
    'hero.subtitle': 'The ultimate app for runners and fitness enthusiasts to catalog their gear, create stunning outfit combinations, and share their style with the community.',
    'hero.availableOn': 'Now Available on iOS',
    'hero.downloadFree': 'Download Free',
    
    // Features
    'features.title1': 'Everything You Need to',
    'features.title2': 'Level Up Your Style',
    'features.subtitle': 'From organizing your collection to sharing with friends, RunWear has all the tools to make your athletic wardrobe work for you.',
    'features.smartWardrobe.title': 'Smart Wardrobe',
    'features.smartWardrobe.description': 'Organize by brand, model, and type. Tag your Nike Air Max, Adidas Ultraboost, and more.',
    'features.outfitCreator.title': 'Outfit Creator',
    'features.outfitCreator.description': 'Mix and match your gear to create the perfect look for any workout or occasion.',
    'features.socialSharing.title': 'Social Sharing',
    'features.socialSharing.description': 'Show off your style! Share outfits with friends and the RunWear community.',
    'features.likeComment.title': 'Like & Comment',
    'features.likeComment.description': 'Engage with friends\' outfits. Give likes and leave encouraging comments.',
    'features.communityFeed.title': 'Community Feed',
    'features.communityFeed.description': 'Get inspired by outfits from runners, gym enthusiasts, and athletes worldwide.',
    'features.communityCard.title': 'Join the RunWear Community',
    'features.communityCard.description': 'Connect with athletes sharing their favorite gear combinations.',
    'features.benefit1': 'Free to download & use',
    'features.benefit2': 'No ads or hidden fees',
    'features.benefit3': 'Regular updates & new features',
    'features.benefit4': 'Cross-platform sync',
    
    // Community
    'community.title': 'Join the RunWear Community',
    'community.subtitle': 'Connect with athletes sharing their style and discover new outfit inspirations from around the world.',
    'community.getStarted': 'Get Started Today',
    
    // Footer
    'footer.title1': 'Ready to Level Up Your',
    'footer.title2': 'Athletic Style?',
    'footer.subtitle': 'Join thousands of athletes who\'ve transformed how they organize and share their sport wardrobe.',
    'footer.downloadiOS': 'Download for iOS',
    'footer.description': 'The ultimate app for organizing your sport wardrobe, creating outfits, and sharing with friends. Make every workout stylish.',
    'footer.product': 'Product',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.updates': 'Updates',
    'footer.beta': 'Beta',
    'footer.support': 'Support',
    'footer.helpCenter': 'Help Center',
    'footer.contactUs': 'Contact Us',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.copyright': '© 2024 RunWear. All rights reserved.',
    'footer.madeWith': 'Made with ❤️ for athletes everywhere'
  },
  fr: {
    // Header
    'nav.features': 'Fonctionnalités',
    'nav.preview': 'Aperçu',
    'nav.community': 'Communauté',
    'button.downloadApp': 'Télécharger l\'App',
    
    // Hero
    'hero.title1': 'Organisez Votre',
    'hero.title2': 'Garde-Robe Sportive',
    'hero.subtitle': 'L\'application ultime pour les coureurs et passionnés de fitness pour cataloguer leur équipement, créer de superbes combinaisons de tenues et partager leur style avec la communauté.',
    'hero.availableOn': 'Maintenant Disponible sur iOS',
    'hero.downloadFree': 'Téléchargement Gratuit',
    
    // Features
    'features.title1': 'Tout Ce Dont Vous Avez Besoin Pour',
    'features.title2': 'Améliorer Votre Style',
    'features.subtitle': 'De l\'organisation de votre collection au partage avec vos amis, RunWear a tous les outils pour que votre garde-robe sportive fonctionne pour vous.',
    'features.smartWardrobe.title': 'Garde-Robe Intelligente',
    'features.smartWardrobe.description': 'Organisez par marque, modèle et type. Étiquetez vos Nike Air Max, Adidas Ultraboost et plus encore.',
    'features.outfitCreator.title': 'Créateur de Tenues',
    'features.outfitCreator.description': 'Mélangez et assortissez votre équipement pour créer le look parfait pour tout entraînement ou occasion.',
    'features.socialSharing.title': 'Partage Social',
    'features.socialSharing.description': 'Montrez votre style ! Partagez des tenues avec vos amis et la communauté RunWear.',
    'features.likeComment.title': 'J\'aime & Commentaire',
    'features.likeComment.description': 'Interagissez avec les tenues de vos amis. Donnez des j\'aime et laissez des commentaires encourageants.',
    'features.communityFeed.title': 'Fil Communautaire',
    'features.communityFeed.description': 'Inspirez-vous des tenues de coureurs, passionnés de gym et athlètes du monde entier.',
    'features.communityCard.title': 'Rejoignez la Communauté RunWear',
    'features.communityCard.description': 'Connectez-vous avec des athlètes partageant leurs combinaisons d\'équipement préférées.',
    'features.benefit1': 'Gratuit à télécharger et utiliser',
    'features.benefit2': 'Pas de publicités ou frais cachés',
    'features.benefit3': 'Mises à jour régulières & nouvelles fonctionnalités',
    'features.benefit4': 'Synchronisation multi-plateforme',
    
    // Community
    'community.title': 'Rejoignez la Communauté RunWear',
    'community.subtitle': 'Connectez-vous avec des athlètes partageant leur style et découvrez de nouvelles inspirations de tenues du monde entier.',
    'community.getStarted': 'Commencer Aujourd\'hui',
    
    // Footer
    'footer.title1': 'Prêt à Améliorer Votre',
    'footer.title2': 'Style Sportif ?',
    'footer.subtitle': 'Rejoignez des milliers d\'athlètes qui ont transformé la façon dont ils organisent et partagent leur garde-robe sportive.',
    'footer.downloadiOS': 'Télécharger pour iOS',
    'footer.description': 'L\'application ultime pour organiser votre garde-robe sportive, créer des tenues et partager avec vos amis. Rendez chaque entraînement élégant.',
    'footer.product': 'Produit',
    'footer.features': 'Fonctionnalités',
    'footer.pricing': 'Tarifs',
    'footer.updates': 'Mises à Jour',
    'footer.beta': 'Bêta',
    'footer.support': 'Support',
    'footer.helpCenter': 'Centre d\'Aide',
    'footer.contactUs': 'Nous Contacter',
    'footer.privacy': 'Confidentialité',
    'footer.terms': 'Conditions',
    'footer.copyright': '© 2024 RunWear. Tous droits réservés.',
    'footer.madeWith': 'Fait avec ❤️ pour les athlètes du monde entier'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('runwear-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('runwear-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};