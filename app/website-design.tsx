import { ChevronRight, ChevronRightIcon, ChevronsRight, ChevronsRightIcon } from "lucide-react";
import { Link } from "lucide-react";


const WebsiteDesign = () => {
    return (
      <div className=" rounded-xl h-screen p-4 mx-auto relative z-10 w-full max-w-screen-xl bg-white">
        {/* Grid Container for Text and Icons */}
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 h-full gap-4 items-center">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold pb-4 
                bg-clip-text text-transparent bg-gradient-to-r 
                from-indigo-500 via-purple-500 to-pink-500 p-3"
            >
              Website Design
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-purple p-3">
              Looking to create a stunning, high-performing website or eCommerce store? Our expert web design
              and development services cover everything you need! We specialize in building dynamic websites
              using modern frameworks and eCommerce platforms, ensuring seamless functionality and an excellent user experience.
            </p>
            <button  className="rounded-sm p-2 text-m text-black pl-3 hover:text-sky-700 "><a href=""></a>Read more </button>
            
          </div>
  
          {/* Icons Section */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4 justify-items-center ">
            {/* Icons */}
            <img src="/Images/js.png" alt="JavaScript Icon" className="w-12 h-12 sm:w-16 sm:h-16" />
            <img src="/Images/typescript (1).png" alt="TypeScript Icon" className="w-12 h-12 sm:w-16 sm:h-16 " />
            <img src="/Images/icons8-vue-js-96.png" alt="Vue.js Icon" className="w-12 h-12 sm:w-16 sm:h-16 " />
            <img src="/Images/icons8-laravel-96.png" alt="Laravel Icon" className="w-12 h-12 sm:w-16 sm:h-16 " />
            <img src="/Images/icons8-php-logo-160.png" alt="PHP Icon" className="w-12 h-12 sm:w-16 sm:h-16 " />
            <img src="/Images/icons8-tailwindcss-96.png" alt="TailwindCSS Icon" className="w-12 h-12 sm:w-16 sm:h-16 " />
            <img src="/Images/icons8-woocommerce-144.png" alt="WooCommerce Icon" className="w-12 h-12 sm:w-16 sm:h-16 "  />
            <img src="/Images/icons8-wordpress-144.png" alt="WordPress Icon" className="w-12 h-12 sm:w-16 sm:h-16 " />
            <img src="/Images/icons8-nextjs-144.png" alt="Nextjs Icon" className="w-12 h-12 sm:w-16 sm:h-16 " />
            <img src="/Images/icons8-react-160.png" alt="React Icon" className="w-12 h-12 sm:w-16 sm:h-16 " />
            <img src="/Images/icons8-node-js-96.png" alt="Nodejs Icon" className="w-12 h-12 sm:w-16 sm:h-16 " />
            <img src="/Images/icons8-shopify-144.png" alt="Shopify Icon" className="w-12 h-12 sm:w-16 sm:h-16 " />
          </div>
        </div>
      </div>
    );
  };
  
  export default WebsiteDesign;
