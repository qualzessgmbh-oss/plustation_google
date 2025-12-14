import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, Linkedin, Instagram, Twitter, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary" : "text-gray-400 hover:text-primary";
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-gray-200 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background-dark/90 backdrop-blur-md border-b border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary flex items-center justify-center text-background-dark font-display font-bold text-xl rounded-sm group-hover:bg-white transition-colors">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-widest text-primary group-hover:text-white transition-colors">PLUSTATION</span>
                <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase leading-none">GmbH</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className={`font-display text-sm uppercase tracking-widest transition-colors duration-300 ${isActive('/')}`}>{t('nav.home')}</Link>
                <Link to="#" className={`font-display text-sm uppercase tracking-widest transition-colors duration-300 ${isActive('/logistics')}`}>{t('nav.logistics')}</Link>
                <Link to="/products" className={`font-display text-sm uppercase tracking-widest transition-colors duration-300 ${isActive('/products')}`}>{t('nav.products')}</Link>
                <Link to="/contact" className={`font-display text-sm uppercase tracking-widest transition-colors duration-300 ${isActive('/contact')}`}>{t('nav.contact')}</Link>
              </div>
            </div>

            {/* Right Icons */}
            <div className="hidden md:flex items-center gap-6">
               <button 
                onClick={toggleLanguage}
                className="font-display text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <span className={language === 'de' ? 'text-primary' : ''}>DE</span>
                <span className="text-gray-600">|</span>
                <span className={language === 'en' ? 'text-primary' : ''}>EN</span>
              </button>

              <div className="h-4 w-px bg-gray-700"></div>

              <button className="text-gray-400 hover:text-primary transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-primary transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-primary rounded-full"></span>
              </button>
              <Link to="/contact" className="border border-primary text-primary hover:bg-primary hover:text-background-dark px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300">
                {t('nav.inquire')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex items-center gap-4 md:hidden">
              <button 
                onClick={toggleLanguage}
                className="font-display text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
              >
                {language.toUpperCase()}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface-dark border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary uppercase tracking-wider">{t('nav.home')}</Link>
              <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary uppercase tracking-wider">{t('nav.products')}</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary uppercase tracking-wider">{t('nav.contact')}</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-surface-dark border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-8 h-8 bg-primary flex items-center justify-center text-background-dark font-display font-bold text-lg rounded-sm">
                  P
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl tracking-widest text-white">PLUSTATION</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-display text-sm tracking-widest uppercase mb-6">{t('footer.collections')}</h3>
              <ul className="space-y-3">
                <li><Link to="/products" className="text-gray-400 hover:text-primary text-sm transition-colors">Wei Mar</Link></li>
                <li><Link to="/products" className="text-gray-400 hover:text-primary text-sm transition-colors">Yanshi / Rock</Link></li>
                <li><Link to="/products" className="text-gray-400 hover:text-primary text-sm transition-colors">Bryce D</Link></li>
                <li><Link to="/products" className="text-gray-400 hover:text-primary text-sm transition-colors">Zhuohua</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-display text-sm tracking-widest uppercase mb-6">{t('footer.contact')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mt-1 text-primary" />
                    <span>Hauptstraße 123<br />45879 Gelsenkirchen<br />Germany</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>+49 30 12345678</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>info@plustation.de</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs tracking-wide">
              {t('footer.rights')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-400 text-xs uppercase tracking-wider">{t('footer.privacy')}</a>
              <a href="#" className="text-gray-600 hover:text-gray-400 text-xs uppercase tracking-wider">{t('footer.imprint')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;