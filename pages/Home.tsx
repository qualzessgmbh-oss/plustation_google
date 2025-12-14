import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Warehouse, Truck, Ruler, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background-dark -mt-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuD6-5DWzuczAtZg8dm49bizBB1UJG_6UhTYsn0_0CqKQhuIxlsBiMXK2R1ciM33jpVTGaWdanj2jR2iYyO9652tXNqQB_d9nX-6PbVMQdRkHHrvcuaRGsv-0OcrDqCO2MnXlgGGdj_bebL6JLKTuIjMpmECHj33S5i02LYT_rISRgRyOmJwvEOWGgf1fbzt1W3AVeGlXe4cV8yFIPyNDgrAslzyr9i-exkCzV3fIBLw6GK8K227Kc7O0aSPkjF7mOQAPavvdeyRE_"
            alt="Dark textured wall background"
            className="w-full h-full object-cover grayscale brightness-50"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background-dark/95 via-background-dark/70 to-transparent"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20">
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-3 border-l-2 border-primary pl-4">
              <span className="text-primary tracking-[0.2em] text-sm font-semibold uppercase">Est. Germany</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-white leading-tight">
              Premium <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-muted-gold gold-glow">Logistics &</span> <br />
              Surfaces
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-md leading-relaxed border-l border-gray-800 pl-6">
              Redefining industrial elegance. We bridge the gap between heavy logistics and exquisite architectural finishes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Link
                to="/products"
                className="group relative px-8 py-4 bg-primary text-background-dark font-bold tracking-widest uppercase text-sm overflow-hidden flex items-center justify-center"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Collection</span>
                <div className="absolute inset-0 h-full w-full scale-0 bg-black/90 rounded transition-all duration-300 group-hover:scale-100"></div>
              </Link>
              <Link
                to="#services"
                className="group flex items-center justify-center sm:justify-start gap-3 text-white px-4 py-4 uppercase text-sm tracking-widest hover:text-primary transition-colors"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="relative w-full h-full max-w-lg lg:max-w-xl">
              <div className="absolute -right-4 -bottom-4 w-full h-full border border-primary/30 hidden lg:block"></div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeu6_tGG6dKm6OnPp8ygMre_k02t2XztjBkeLV8LXYLIurs5Udi8koUV0rtNRass6GcAqYgc4n5k3PFahPAhwE-TZLjAETsY_RAf9IGmmGxuazKqDBwVbHZILDJPz-mkuq1e1hm7r0oBC55CgDWMkojib8q5qLMPImZw5FfHHkt_LqpmTPYiho3r5D28S4C2AUTF836XWGftqjI0zJY5nS240wMZYmzemHMc-jBKn3ZVdEcNbwocjOBY0b8gIFroCzo1rOZ0ntkngy"
                alt="Massive elegant dark wood door with metallic accents"
                className="w-full h-full object-cover shadow-2xl brightness-90 contrast-110 relative z-10 grayscale-[20%]"
              />
              <div className="absolute -left-12 bottom-20 bg-surface-dark/90 backdrop-blur border border-gray-800 p-6 max-w-xs z-20 hidden md:block shadow-xl">
                <p className="text-primary font-display text-xs tracking-widest mb-2">FEATURED PRODUCT</p>
                <h3 className="text-white text-xl font-display mb-1">Zhuohua Series</h3>
                <p className="text-gray-400 text-xs leading-relaxed">Black walnut technology wood veneer composite with brushed copper inlays.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </div>

      {/* Collection Preview Section */}
      <section id="collection" className="py-24 bg-surface-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase block mb-3">Architectural Elements</span>
            <h2 className="text-3xl md:text-4xl font-display text-white uppercase tracking-wide">The Ink Art Collection</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link to="/products" className="group relative cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-gray-900 relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnuRsiufUHwIYgnIckvGHMtqy6wPq2WIR57YFmFEfvGwkMtts3FoA8bjYorU0De1lUY9a-drkj4OZE8DrXcxaQWB21PhCiXIdL-Tk0dgGEJ54g6iizRYnKdRvegaXdhMHOSoVXO9H9RtRNOfXB7tt12ptB3zzAk2yFWkEDbgAlju_bGhaCzMDwcOyVINOuu7two1Rnoab4Ae35UJUSpHr97-oV6X0IfCDRdMRh2pMFXB00dGxEr3Pi2SlLsHfczI_q65pgdadlnpWg"
                  alt="Dark wood texture detail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-xs tracking-widest font-bold uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">Wei Mar Series</span>
                  <h3 className="text-white font-display text-2xl border-l-2 border-primary pl-4">Entry Doors</h3>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/products" className="group relative cursor-pointer lg:-translate-y-8">
              <div className="aspect-[3/4] overflow-hidden bg-gray-900 relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv-oX5nuI7q0stGgb3ArwGjuZyvjSug8QZYZSdkMMAXNB97BDRa7fv2_4KIoIlbvptytIe6UUDPdqOlOujWP6gtHya9hw5OWIO0r2WCeOOrl-p5rRDrt8l2zT9BfAZuLlx5rI7skkV7HQrk77hgF70-APyk4I1Fo0_ucvPxxPpIvgoSYdW1RL1IWZX7GFoEnYPyMU3xASgr4hDOEUq5Hu_Qa7ySxLsSMKv5T017DE2YQnNknzFU7XINba-cAd5qXxncncS_GtaeaMu"
                  alt="Minimalist interior surface"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-xs tracking-widest font-bold uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">Yanshi / Rock</span>
                  <h3 className="text-white font-display text-2xl border-l-2 border-primary pl-4">Internal Surfaces</h3>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/products" className="group relative cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-gray-900 relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8Vjg4Iq2QZlHy0UefBkbEmiWBwJpjRBtNwdzh8fJ0n_kDFs9inOLt8u1_5FtHWa1m3OH8HJguPfMw10Sm_1pAVU7RhMCPlfd2vxP7FMNAEdJ1sZT_mn09AutIhoTmc9dQL-RXu5M4XmKNhGFXGVHHbJvws2d-f8CYfASX0M6FUdQ_FK_zi8ZXNwz7wIHzD7R8g2ifuzD2NF3H6k7GI0C9PIYaEzFZPWdUD34VazGqgYPHDuw7F6Gs3igB3uDCF97FoNM5gWcLq2jr"
                  alt="Luxury flooring detail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-xs tracking-widest font-bold uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">Bryce D Series</span>
                  <h3 className="text-white font-display text-2xl border-l-2 border-primary pl-4">Flooring</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 bg-black transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHfewWcQoycgzwVo0PwVXjmNFJ1wLCOr0wIK6qnTsV_CxCt6hFbrwtD9MEHz9QFtFRrCIkJUsSeA4TpC6fpZyvWIKlqlp6D2z14mb-PNUj6iparE_Evn-uis0SM-7_WwPapr9v8W7ont-6thdHSpjuNzJCD0CDzIG4nzvEqnExSGYlLKDJTG9G10E5cWzgkC_FYfQri_be-43z-A1H1sQdKsIAZqDmr33NY19pJ4AWRK9HbEXv3XWo52ZloFWnlhsCllSrCc1Hix1f"
            alt="Warehouse background"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Services Grid */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-card p-8 border border-gray-800 hover:border-primary/50 transition-colors duration-300 group">
                  <Warehouse className="w-10 h-10 text-gray-400 group-hover:text-primary mb-4 transition-colors" />
                  <h4 className="text-lg font-display font-bold text-white mb-2">Warehousing</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Secure, climate-controlled storage solutions for sensitive materials.</p>
                </div>
                <div className="bg-surface-card p-8 border border-gray-800 hover:border-primary/50 transition-colors duration-300 group translate-y-8">
                  <Truck className="w-10 h-10 text-gray-400 group-hover:text-primary mb-4 transition-colors" />
                  <h4 className="text-lg font-display font-bold text-white mb-2">Transshipment</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Efficient European hub logistics and distribution management.</p>
                </div>
                <div className="bg-surface-card p-8 border border-gray-800 hover:border-primary/50 transition-colors duration-300 group">
                  <Ruler className="w-10 h-10 text-gray-400 group-hover:text-primary mb-4 transition-colors" />
                  <h4 className="text-lg font-display font-bold text-white mb-2">Consulting</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Expert advice on material selection and architectural integration.</p>
                </div>
                <div className="bg-surface-card p-8 border border-gray-800 hover:border-primary/50 transition-colors duration-300 group translate-y-8">
                  <ShieldCheck className="w-10 h-10 text-gray-400 group-hover:text-primary mb-4 transition-colors" />
                  <h4 className="text-lg font-display font-bold text-white mb-2">Quality Control</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Rigorous inspection standards for all incoming and outgoing goods.</p>
                </div>
              </div>
            </div>

            {/* Services Text */}
            <div className="order-1 lg:order-2">
              <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase block mb-3">Core Competencies</span>
              <h2 className="text-4xl md:text-5xl font-display text-white leading-tight mb-6">Precision in <br />Every Movement</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Plustation GmbH operates at the intersection of luxury goods and industrial logistics. We understand that high-value architectural surfaces require more than just transport—they demand stewardship.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Specialized Handling for Large Formats
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Just-in-Time Delivery for Construction Sites
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Global Sourcing Network
                </li>
              </ul>
              <Link to="/contact" className="inline-block border-b border-primary text-white pb-1 hover:text-primary transition-colors uppercase text-sm tracking-widest font-semibold">
                Explore Logistics Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-surface-dark relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #C8A165 10px, #C8A165 11px)' }}></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <p className="font-display text-2xl md:text-4xl text-gray-300 leading-normal">
            "The door is not merely an entrance, but the first chapter of a home's story. We craft the opening lines."
          </p>
          <div className="mt-8 flex justify-center">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL6wzO1O9Bo1jXvj1V9H8SonCauR0q8pnAEpQA8lSxiZwq5iAVoe_3mTd0d6xkoei7vfB-PbJGUcoc1vDwp97vBaArLrsrDWdI_-8dR_sYWZ50947hhGaaM9vxNnj3lglp76Z9rU2sMIxkxFmxFzMGko_SEO2HnowzFwYxQRvTTMVHAlwyDLfXzHJkj7r1W_h-gieNzUiWl8F9luR7GmmfWFVR2-0CIXvqIPnqqJISNYojdR115fi_1VJdyTbaE4NlmkGKMJD1jKpG"
              alt="Signature style decoration"
              className="h-12 w-auto opacity-50 invert"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;