"use client";

import { useEffect, useRef } from 'react';
import Navbar from './components/ui/Navbar';
import { Spotlight } from './components/ui/spotlight';
import Link from 'next/link';
import SliderOne from './components/ui/slider';
import WebsiteDesign from './website-design';
import GraphicDesign from './components/ui/graphic-design';
import { Digitaladvertising } from './components/ui/digital-advertising';
import Branding from './components/ui/branding';
import Phone from './components/ui/phone';
import FAQS from './Faq';

export default function Home() {

  // Refs for each section
  const WebsiteDesignRef = useRef<HTMLDivElement>(null);
  const GraphicDesignRef = useRef<HTMLDivElement>(null);
  const DigitaladvertisingRef = useRef<HTMLDivElement>(null);
  const Brandingref = useRef<HTMLDivElement>(null);

  // Scroll function to a specific section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    const offset = 80; // Adjust based on your navbar height
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({top, behavior: 'smooth' });
    }
    

  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);



  
  return (
    <div className="w-full items-center justify-center bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900 antialiased bg-grid-white relative overflow-hidden">
      <Navbar 
        scrollToWebsiteDesign={() => scrollToSection(WebsiteDesignRef)}
        scrollToDigitalAdvertising={() => scrollToSection(DigitaladvertisingRef)}
        scrollToGraphicDesign={() => scrollToSection(GraphicDesignRef)}
        scrollTobranding={() => scrollToSection(Brandingref)}

      />
      <Spotlight className="hidden md:flex md:left-80 md:top-80" fill="white" />

      <div className="mx-auto relative z-10 w-full pt-10 md:pt-6 px-2">
        {/* Content of your page */}
        <div className="flex items-center">
          <div className="flex-1 pl-20">
            <div className="text-left pb-5 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
              Spread the Wings<br /> of your business
            </div>
            <p className="text-left text-gray-50">
              Scale your business with us and explore <br /> more capabilities for business growth
            </p>
            <div className="pt-5">
              <Link href="/book" className="hover:cursor pointer flex flex-row items-center justify-center border p-2 rounded-full w-48 my-4 text-white hover:bg-black">
                Book a call
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 pr-40 hidden md:block">
            <Phone />
          </div>
        </div>

        {/* Other Sections */}
        <div className="w-full pt-20 scroll-mt-20 scroll-p-100">
          <SliderOne />
        </div>

        {/* Sections with ids */}
        <div id="website-design" className="w-full pt-20 scroll-mt-10" ref={WebsiteDesignRef}>
          <WebsiteDesign />
        </div>
        <div id="graphic-design" className="w-full pt-20 scroll-mt-10" ref={GraphicDesignRef}>
          <GraphicDesign />
        </div>
        <div id="digital-advertising" className="w-full pt-20 scroll-mt-10" ref={DigitaladvertisingRef}>
          <Digitaladvertising />
        </div>
        <div id="branding" className="w-full pt-20 scroll-mt-10" ref={Brandingref}>
          <Branding />
        </div>
        <div className='w-full pt-20 scroll-mt-10'>
          <FAQS />

        </div>
        
      </div>
    </div>
  );
}
