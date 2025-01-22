'use client'

import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 







const SliderOne = () => {

    const isMediumScreen = useMediaQuery({minWidth: 760, maxWidth: 1023 });
    const isSmallScreen = useMediaQuery({maxWidth:767});

    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 1000,
        className: "w-full mx-auto cursor-pointer center-mode",
      };

    if(isMediumScreen) {
        settings.slidesToShow = 1.67
    }

    else if (isSmallScreen) {
        settings.slidesToShow = 1
    }
    //Slider with images 
    return (
        <div>
          <Slider {...settings}>
            <>
              <div className="rounded-md px-2 md:p-10">
                <Image
                  priority
                  src="/Images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
                  alt="logo"
                  width={500}
                  height={500}
                  className="
                      rounded-2xl
                          "
                />
              </div>
            </>
    
            <>
              <div className="rounded-md px-2 md:p-10">
                <Image
                  priority
                  src="/Images/pexels-tran-167284-564883.jpg"
                  alt="logo"
                  width={500}
                  height={500}
                  className="
                      rounded-2xl 
                          "
                />
              </div>
            </>
    
            <>
              <div className="rounded-md px-2 md:p-10">
                <Image
                  priority
                  src="/Images/samsung-memory-xiX2PkgsPn4-unsplash.jpg"
                  alt="logo"
                  width={500}
                  height={500}
                  className="
                      rounded-2xl 
                          "
                />
              </div>
            </>
    
            <>
              <div className="rounded-md px-2 md:p-10">
                <Image
                  priority
                  src="/Images/pexels-divinetechygirl-1181533.jpg"
                  alt="logo"
                  width={500}
                  height={500}
                  className="
                      rounded-2xl 
                          "
                />
              </div>
            </>
    
            <>
              <div className="rounded-md px-2 md:p-10">
                <Image
                  priority
                  src="/Images/pexels-divinetechygirl-1181533.jpg"
                  alt="logo"
                  width={500}
                  height={500}
                  className="
                      rounded-2xl 
                          "
                />
              </div>
            </>
          </Slider>
        </div>
      );
    };
    
    export default SliderOne;