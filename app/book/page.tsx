"use client";

import { InlineWidget } from "react-calendly";
import Navbar from "../components/ui/Navbar";



const Book = () => {
  return (
    <>
      <div className=" items-center justify-center bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900 antialiased bg-grid-white relative overflow-hidden ">
        
        <Navbar
           scrollToWebsiteDesign={() => {}}
           scrollToGraphicDesign={() => {}}
           scrollToDigitalAdvertising={() => {}}
           scrollTobranding={() => {}}
        />
        <div className="text-4xl pb-5 md:text-6xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Book a meeting
        </div>

        <InlineWidget url="https://calendly.com/nasibh5/30min" />
        
         
      </div>
    </>
  );
};

export default Book;