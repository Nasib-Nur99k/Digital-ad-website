import { link } from "fs";
import { HoverEffect } from "../ui/card-hover-affect";

export function Digitaladvertising() {
  return ( 
   
    <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold p-10 pb-4 
                bg-clip-text text-transparent bg-gradient-to-r 
                from-indigo-500 via-purple-500 to-pink-500 ">Digital Advertising</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Search Engine Optimization",
    description: "Boost your rankings and grow your business with ethical, results-driven SEO! Our white-hat strategies attract more traffic, generate leads, and build long-term success. Let’s make your website work smarter!",
    link: "/digiadvsep",
  },
  {
    title: "Pay Per Click (PPC) Advertising",
    description:
      "Drive results fast with expert digital advertising! From PPC campaigns to targeted strategies, we help you reach the right audience, boost traffic, and maximize ROI. Get noticed, get clicks, and grow your business today!",
    link: "https://netflix.com",
  },
  {
    title: "Social Media Management",
    description:
      "Grow your brand and engage your audience with expert social media management! From content creation to strategy, we’ll build your presence, drive interaction, and turn followers into loyal customers. Let’s amplify your impact!",
    link: "https://google.com",
  },
  {
    title: "Email Marketing",
    description: "Maximize your reach and ROI with expert email marketing! From personalized campaigns to audience segmentation, we deliver messages that engage, convert, and retain customers—ethically and effectively. Let’s make every email count!",
    link: "https://meta.com",
  },
  {
    title: "Website and App design",
    description:
      " Multi-page responsive websites and apps that cater to your needs, wether it be custom websites with precise softwares or just simplistic interactive apps we do it all.",
    link: "https://amazon.com",
  },
  {
    title: "Video Advertising",
    description:
      "Capture attention with engaging video content on platforms like YouTube, TikTok, and streaming networks. Video is the future of advertising, and we help you craft compelling stories that resonate",
      link: "https://ebay.com",


  },
];
