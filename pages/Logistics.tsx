import React from 'react';
import { Link } from 'react-router-dom';
import { Warehouse, Ship, FileCheck, Map, ArrowRight, Container } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Logistics: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background-dark -mt-24 pt-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Industrial warehouse abstract"
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <span className="text-primary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">Plustation GmbH</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-white leading-tight mb-6">
              {t('logistics.heroTitle')}
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              {t('logistics.heroSubtitle')}
            </p>
        </div>
      </div>

      {/* Capabilities Grid */}
      <section className="py-24 bg-background-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase block mb-3">{t('logistics.capabilitiesTitle')}</span>
                <div className="w-12 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Capability 1 */}
                <div className="bg-surface-card border border-white/5 hover:border-primary/30 transition-all duration-300 p-8 lg:p-12 group">
                    <div className="w-14 h-14 bg-surface-dark border border-gray-800 rounded-sm flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                        <Warehouse className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-display text-white mb-4">{t('logistics.warehousingTitle')}</h3>
                    <p className="text-gray-400 leading-relaxed">{t('logistics.warehousingDesc')}</p>
                </div>

                {/* Capability 2 */}
                <div className="bg-surface-card border border-white/5 hover:border-primary/30 transition-all duration-300 p-8 lg:p-12 group">
                    <div className="w-14 h-14 bg-surface-dark border border-gray-800 rounded-sm flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                        <Ship className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-display text-white mb-4">{t('logistics.transportTitle')}</h3>
                    <p className="text-gray-400 leading-relaxed">{t('logistics.transportDesc')}</p>
                </div>

                {/* Capability 3 */}
                <div className="bg-surface-card border border-white/5 hover:border-primary/30 transition-all duration-300 p-8 lg:p-12 group">
                    <div className="w-14 h-14 bg-surface-dark border border-gray-800 rounded-sm flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                        <FileCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-display text-white mb-4">{t('logistics.customsTitle')}</h3>
                    <p className="text-gray-400 leading-relaxed">{t('logistics.customsDesc')}</p>
                </div>

                {/* Capability 4 */}
                <div className="bg-surface-card border border-white/5 hover:border-primary/30 transition-all duration-300 p-8 lg:p-12 group">
                    <div className="w-14 h-14 bg-surface-dark border border-gray-800 rounded-sm flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                        <Map className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-display text-white mb-4">{t('logistics.distributionTitle')}</h3>
                    <p className="text-gray-400 leading-relaxed">{t('logistics.distributionDesc')}</p>
                </div>
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                <div className="py-6 md:py-0">
                    <div className="text-4xl lg:text-5xl font-display text-primary mb-2">1,500+</div>
                    <div className="text-xs uppercase tracking-widest text-gray-500">{t('logistics.stat1Label')}</div>
                </div>
                <div className="py-6 md:py-0">
                    <div className="text-4xl lg:text-5xl font-display text-primary mb-2">20k m²</div>
                    <div className="text-xs uppercase tracking-widest text-gray-500">{t('logistics.stat2Label')}</div>
                </div>
                <div className="py-6 md:py-0">
                    <div className="text-4xl lg:text-5xl font-display text-primary mb-2">99.8%</div>
                    <div className="text-xs uppercase tracking-widest text-gray-500">{t('logistics.stat3Label')}</div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0f0f0f]">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #C8A165 10px, #C8A165 11px)' }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display text-white mb-8">
               {t('logistics.ctaTitle')}
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-primary text-black font-bold uppercase text-xs tracking-widest px-10 py-4 hover:bg-white transition-colors duration-300">
                {t('logistics.ctaButton')}
                <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </section>
    </>
  );
};

export default Logistics;