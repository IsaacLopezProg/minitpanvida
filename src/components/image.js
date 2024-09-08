

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Image() {

    return (
        <>

                <Swiper
                    // install Swiper modules
                    // spaceBetween={30}
                    // centeredSlides={true}
                    autoplay={{
                        delay: 6500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    // className="mySwiper"
                    >
                    <SwiperSlide >
                        <div className="min-h-screen w-full flex justify-center items-center bg-cover bg-center bg-[url('/back1.jpg')] ">

                            <div className="p-8 bg-gray-600/50 rounded-2xl sm:m-0 mx-8 ">
                                <p className="text-center text-xl md:text-4xl text-white ">
                                    Ministerio Internacional Jesus Pan de Vida
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="min-h-screen w-full flex justify-center items-center bg-cover bg-center bg-[url('/back2.jpg')] ">

                            <div className="p-8 bg-gray-600/50 rounded-2xl sm:m-0 mx-8 ">
                                <p className="text-center text-xl md:text-4xl text-white ">
                                    Ministerio Internacional Jesus Pan de Vida
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="min-h-screen w-full flex justify-center items-center bg-cover bg-center bg-[url('/back3.jpg')] ">

                            <div className="p-8 bg-gray-600/50 rounded-2xl sm:m-0 mx-8 ">
                                <p className="text-center text-xl md:text-4xl text-white ">
                                    Ministerio Internacional Jesus Pan de Vida
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="min-h-screen flex justify-center items-center bg-cover bg-center bg-[url('/back4.jpg')] ">

                            <div className="p-8 bg-gray-600/50 rounded-2xl sm:m-0 mx-8 ">
                                <p className="text-center text-xl md:text-4xl text-white ">
                                    Ministerio Internacional Jesus Pan de Vida
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            {/* </div> */}

        </>
    )
}



