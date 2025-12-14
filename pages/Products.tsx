import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  subname?: string;
  series: string;
  description: string;
  sku?: string;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, subname, series, description, sku, isNew }) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden aspect-[4/5] bg-gray-800 mb-6">
      <div className="absolute inset-0 border border-transparent group-hover:border-primary/60 transition-colors duration-500 z-20 pointer-events-none m-2"></div>
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 contrast-110"
      />
      {isNew && (
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-black/70 backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1 border-l-2 border-primary">
            New Arrival
          </span>
        </div>
      )}
    </div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-2xl font-display text-white group-hover:text-primary transition-colors duration-300">
          {name} {subname && <span className="text-lg font-normal text-gray-500 ml-1">{subname}</span>}
        </h3>
        <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Series: {series}</p>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2 pr-4">{description}</p>
      </div>
      {sku && (
        <div className="text-right flex-shrink-0">
          <span className="block text-sm font-serif italic text-gray-600">{sku}</span>
        </div>
      )}
    </div>
    <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-sm font-medium text-white">View Details</span>
      <ArrowRight className="w-4 h-4 text-primary transform group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
);

const Products: React.FC = () => {
  return (
    <>
      <header className="relative py-24 bg-surface-dark overflow-hidden -mt-24 pt-48">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC88UijksfX3sUg258hZIBHPOQGWvLuUOhMPxM9hzTtaGcXcp7cKLupAZ4pIJ3pk8h04TwiNk7VVU7lVAlBGko_hThBPzW1hU_lm_97INk9I-7UIoYyb1FxugdBCcwpornOn2FFs8oA0msE1edKlyG2j25gChAna6zHL9huDrdHXJjchgw6uJGwzv6_PogQDRt10BO-amCqu8NAsybKgkuacuxDWfY_Znz6TGR727-MVxBDfOSl427KrO1fRaaDhPomcE7SuRBZdwMM')" }}></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-primary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">Architectural Collection</span>
            <h1 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight">
              Refining Space <br />Through <span className="italic font-serif text-primary">Materiality</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
              Discover our exclusive selection of luxury doors, premium flooring, and architectural finishes. Designed for the sophisticated modern interior.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-transparent border border-gray-600 text-white hover:border-primary hover:text-primary transition-all duration-300 text-sm tracking-widest uppercase">
              Catalog PDF
            </button>
            <button className="px-8 py-3 bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300 text-sm tracking-widest uppercase shadow-lg shadow-primary/20">
              Filter View
            </button>
          </div>
        </div>
      </header>

      <div className="flex-grow bg-[#0f0f0f]">
        <div className="border-y border-gray-800 bg-[#151515] sticky top-24 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 overflow-x-auto no-scrollbar">
              <div className="flex space-x-8 min-w-max">
                <button className="text-sm font-medium text-primary border-b-2 border-primary py-5 uppercase tracking-widest">All Collections</button>
                <button className="text-sm font-medium text-gray-400 hover:text-white py-5 transition-colors uppercase tracking-widest">Entrance Systems</button>
                <button className="text-sm font-medium text-gray-400 hover:text-white py-5 transition-colors uppercase tracking-widest">Interior Surfaces</button>
                <button className="text-sm font-medium text-gray-400 hover:text-white py-5 transition-colors uppercase tracking-widest">Hardware</button>
                <button className="text-sm font-medium text-gray-400 hover:text-white py-5 transition-colors uppercase tracking-widest">Lighting Accents</button>
              </div>
              <div className="hidden md:flex items-center text-xs text-gray-400 uppercase tracking-wider gap-2">
                <span>Showing 12 of 48 products</span>
              </div>
            </div>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <ProductCard
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCVXUciJnMZ-8zTDQ8kl0T0LkpLeXOjJWsrBnt7ZRxRS2i0TjEhtNVy4jkt4YI1bPVD89073KzN2-71IRVJxLgNth2wNN1Bz099FewDD72qhsoTMJuCLPnzxqldL7D5ncPPHXlh2a1yK5RbsmMvUxAnMP48RrN4u12i_T4gvA8JRMtkCiUVqTc4iplXpdCxNnPgHkEyu7NImKOyxHgXV3xNTjSiQ_dx5PBERifjqKa2xXPlek2kMKmZbiJ7gDS5XVWufwVx8VF5ppjw"
              name="WEI MAR"
              series="Ink Art Nine"
              description="Black walnut technology wood veneer composite. Multi-layer balanced layer construction."
              sku="ZL-315"
              isNew={true}
            />
             <ProductCard
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAVNdbwb5GyLMSpKo15OW3RG46y0XiWJsA-cZAZBRtPwLKT9h47x_Pv13wCijHP6Qz8ef7AAJZmu7EJ4pRNJmtT-_oqI2tFVlA7jwXGmeuBbGwpuP2M8ovTFK7Vg2xcZ5qPvjrLTX5vk1KBqo8eooQmLsfP72ZbYhmXWd1bhdB3MvFEggvcN5Frle4o8IPHIjCJAFsO9gMh_2soTZ6eewolTtmuaelpGXfc2uBOsp3xSuiz8xlhY-6VxWIFxwl_coqQ-2Vpha3wCFea"
              name="YANSHI"
              subname="/ 岩石"
              series="Rock Solid"
              description="Matte finish carbon black surface with integrated smart lock system."
            />
            <ProductCard
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuD60vgfB0r1S80BczVVYXWo9J_CkjajfbEbM2zik4KJUzKUv4W9r3akGGK9z8Du2CpoP0D1HecovFVF0ysrZcvVB6Kwq7DyIV92uffF3GwLHk0v69jxEi7F3n2-lyGGAkQzsRMVypbB_Rc1rlQrDelYGh0n3URaZ8VIShIKequ_MH_GwLHAYNAZ4fJsXk-o-VlBzOxuIQle-eTM47Cek4YdZtW3WSKUcZ6b-P9PAsJ5aaqTTWZRpjubWcn3uWcxmI_JRZjkF-mixBpX"
              name="BRYCE D"
              series="Interior Surface"
              sku="JD-565"
              description="Copper plate + brass strip + light strip integration. The reserved spatial aesthetics."
            />
            <ProductCard
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDtonTPXUqoi6tAaZ0O6JccLKuH2-Xexclyyyrq4_-vUGH4LZOlJ3TZa68mbpBC3hx3GsKhD2Ld1JZRnOxb04sbIwctnr-7BnyPgwo6p8MvK_gUXyE36pfSLzI6h_Qf7j0YpsFsd9y-OiDqWwblI-IHUrcjTKCM7IOSs2WNAU_hK3MxruOwgyqleEqgqwjnQ78XMlmrjVPfzhr5RETmD1aBULLO9ucuUzJsHxInOJ0oh1-EvGkefEs4J_WYUgksN-vHXjtax_OMRGL0"
              name="ZHUOHUA"
              subname="/ 灼华"
              series="Radial Gold"
              description="Stunning radial brass inlays on deep charcoal textured panels."
            />
             <div className="group cursor-pointer md:col-span-1 lg:col-span-1">
                <div className="relative overflow-hidden aspect-[4/5] bg-gray-800 mb-6 group">
                <div className="absolute inset-0 border border-transparent group-hover:border-primary/60 transition-colors duration-500 z-20 pointer-events-none m-2"></div>
                <img alt="Material Detail" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out grayscale hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWKplsUhCtsd9QDzUqpxsJfVs9qJ6jZ9593EE9BZkhAKDMnEwKBhkRZs7AyVwjvHV21GJMiRXfwUNBSccF28pXjag8dzZtgk8kHNmbFwEZeX7kOTNddwS1iwUIoCrDE4u4nWncNH5Eng4YWmPWnbgAMHspp8wN6fug7tKGfctJA8yAoDckohL5Di1aekrQS-SQSrMdQvdxM_2oANPl9ur4ljWjw3kuWwrxW14ks0JNsnlv7wFeyNHlNU1rJVOxtGYc_2-xp300zLVj"/>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="border border-white/50 text-white px-6 py-2 uppercase tracking-widest text-xs backdrop-blur-md">Explore Materials</span>
                </div>
                </div>
                <div className="flex justify-between items-start">
                <div>
                <h3 className="text-2xl font-display text-white group-hover:text-primary transition-colors duration-300">MATERIALITY</h3>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Custom Finishes</p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">Explore our library of bespoke veneers, metals, and stone composites.</p>
                </div>
                </div>
            </div>
            <ProductCard
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDVfZwTW5Zo5dwcPoCjqZOq9bA3lLM3StMBm-KIrXO5YvY9aPkpJV7xFSghy33k1izuF1VrAHfRc6oxb-L6u6EyJqktcACSBRbmMDSOQv54LUgxyneoWmD1tCVUlSHK8Rr796jUy4wkYF7IIJXCNV9I4L-yYVh0WVqG1aOeYV2dTcLsH48vYI_i28nM9GnRewiMe7qhn-9gwrvNpeLja7igbMV7oLK73-iMHdyWNREGlKAn-IHorwPrM8o3qan_Wd3imKVQj97IHTFF"
              name="HARDWARE"
              series="Touch Points"
              description="Ergonomic luxury handles featuring brushed copper and darkened steel."
            />
          </div>

          <div className="mt-20 flex justify-center">
            <button className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-none border border-gray-700 text-white transition-all hover:border-primary">
              <div className="absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
              <span className="relative uppercase tracking-widest text-sm font-medium flex items-center gap-2">
                Load More Collection
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
          </div>
        </section>

        <section className="bg-[#0a0a0a] border-t border-gray-900 py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold">Stay Informed</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-display text-white mb-8">
              Architectural Excellence <br />Delivered to Your Inbox
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow bg-[#1a1a1a] border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-white px-8 py-3 uppercase tracking-wider text-sm font-medium hover:bg-opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;