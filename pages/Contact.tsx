import React from 'react';
import { ArrowRight, ChevronDown, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col lg:flex-row h-full relative z-10 min-h-screen -mt-24 pt-24">
       {/* Background texture for the left side */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-stone-texture"></div>
      
      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 px-8 py-16 lg:px-24 lg:py-24 flex flex-col justify-center bg-background-dark relative z-10">
        <div className="mb-12">
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-4">Get in Touch</span>
          <h1 className="font-display text-4xl lg:text-5xl text-white mb-6">
            Let's build something <br />
            <span className="italic text-gray-500 font-serif">extraordinary.</span>
          </h1>
          <p className="text-gray-400 font-light text-lg max-w-md">
            Whether you are interested in our luxury doors, flooring solutions, or logistics services, our team is ready to assist you.
          </p>
        </div>

        <form className="space-y-8 max-w-lg" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <input
                type="text"
                id="name"
                required
                placeholder="Name"
                className="block w-full bg-transparent border-b border-gray-700 text-white py-3 px-0 focus:outline-none focus:border-primary transition-colors peer placeholder-transparent"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs"
              >
                Your Name
              </label>
            </div>
            <div className="relative group">
              <input
                type="email"
                id="email"
                required
                placeholder="Email"
                className="block w-full bg-transparent border-b border-gray-700 text-white py-3 px-0 focus:outline-none focus:border-primary transition-colors peer placeholder-transparent"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs"
              >
                Email Address
              </label>
            </div>
          </div>

          <div className="relative group">
            <select
              id="subject"
              className="block w-full bg-transparent border-b border-gray-700 text-white py-3 px-0 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
            >
              <option className="bg-surface-dark text-gray-300">General Inquiry</option>
              <option className="bg-surface-dark text-gray-300">Doors & Windows</option>
              <option className="bg-surface-dark text-gray-300">Flooring Materials</option>
              <option className="bg-surface-dark text-gray-300">Logistics & Warehousing</option>
            </select>
            <span className="absolute right-0 top-4 text-gray-400 pointer-events-none">
              <ChevronDown className="w-4 h-4" />
            </span>
            <label
              htmlFor="subject"
              className="absolute left-0 -top-3.5 text-gray-500 text-xs"
            >
              Subject
            </label>
          </div>

          <div className="relative group">
            <textarea
              id="message"
              required
              rows={4}
              placeholder="Message"
              className="block w-full bg-transparent border-b border-gray-700 text-white py-3 px-0 focus:outline-none focus:border-primary transition-colors peer placeholder-transparent resize-none"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs"
            >
              Your Message
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="group relative px-8 py-4 bg-transparent overflow-hidden border border-primary text-primary hover:text-black transition-colors duration-300 ease-out"
            >
              <span className="absolute inset-0 w-full h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative flex items-center gap-3 font-bold tracking-widest text-xs uppercase">
                Send Message
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </form>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-800 pt-8">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">Gelsenkirchen</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Hauptstraße 123<br />
              45879 Gelsenkirchen<br />
              Germany
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">Contact</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              +49 209 1234567<br />
              info@plustation-gmbh.de
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Map */}
      <div className="w-full lg:w-1/2 relative bg-surface-dark min-h-[500px] lg:min-h-auto">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAO77t48RTq0T-BY-u6IXqv92D10bvqgMjolZak4XKqJKW6kYjassitJzj_WVjU1cNqH8agK2e6B76tzlwdJ7lXLfMnpR_eKZQpqNTJyGhlnz5XHjAmQ_TxQxNni44ywU6BEApA_xV_6ZbI0SZscN9FXJRF_Bht4maY12wLmXriwTC4_b3h100kAv10Kz3oFNnEpslN_9zKgUSD-NRCdkRX4oTTu1edoMoM0HpcDu6_fqONdIKFmF3iUeY_5oNxP6TnMKWNQcO7ZrO"
            alt="Dark stylized map background"
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-50 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80 lg:bg-gradient-to-l"></div>
        </div>

        <div className="absolute bottom-12 left-8 right-8 lg:left-16 lg:right-auto lg:max-w-md">
          <div className="bg-black/80 backdrop-blur-sm border border-gray-800 p-8 shadow-2xl rounded-sm">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="font-display text-xl text-white">Headquarters</h3>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mt-1">Gelsenkirchen, DE</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>Open today: 09:00 - 18:00</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Legal Information</p>
              <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
                <div>
                  <span className="block text-gray-300 font-bold">HRB</span>
                  12345 Amtsgericht
                </div>
                <div>
                  <span className="block text-gray-300 font-bold">USt-IdNr.</span>
                  DE 123 456 789
                </div>
                <div className="col-span-2">
                  <span className="block text-gray-300 font-bold">Managing Director</span>
                  Max Mustermann
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;