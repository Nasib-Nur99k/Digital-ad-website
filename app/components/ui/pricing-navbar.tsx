'use client';

import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";
import { useRouter } from "next/router";
import WebsiteDesign from "@/app/website-design";
import { useRef } from "react";


const PricingNavbar = () => {

  const ref = useRef(HTMLDivElement)
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/logomain.png"
              alt="Logo"
              width={150}
              height={150}
              
            />
          </Link>
        </div>

        <div
          className="cursor-pointer hidden 
                md:flex space-x-10 items-center
                 text-slate-300 text-center 
                 bg-clip-text text-transparent 
                 bg-gradient-to-b from-neutral-50
                  to bg-neutral-400 bg-opacity-50"
        >
          {/* Navigation to sections on the home page */}
          <Link href="#website-design"   className="hover:text-gray-50">
            Website Design
          </Link>
          <Link href="#graphic-design" className="hover:text-gray-50">
            Graphic Design
          </Link>
          <Link href="#digital-advertising" className="hover:text-gray-50">
            Digital Advertising
          </Link>

          {/* Current Page Link */}
          <Link href="/pricing" className="text-gray-50">
            Pricing
          </Link>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // Display an X icon when the dropdown is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu onClose={closeDropDown} />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex h-12 animate-shimmer items-center justify-center 
                rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
                 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
                  focus:ring-offset-slate-50 rounded-xl"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingNavbar;
