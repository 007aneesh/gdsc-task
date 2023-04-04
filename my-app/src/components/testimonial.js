import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from "../Assets/usr.png";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./testimonial.css";
const Testimonials = () => {
  return (
    <div className="p-8 md:p-10 mb-4 lg:pl-44 lg:pr-44 md:items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-xl h-full  font-semibold  md:text-4xl md:max-w-none">
          What Our Clients Said About Us
        </h1>
      </div>
      <div className="h-80">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="te h-60 md:h-48 w-[90%] md:w-[50%] p-7 rounded-[1.5rem]">
              <div className="flex flex-row gap-x-4 justify-center items-center">
                <div>
                  <img src={img} alt="img" className="max-w-[60px]" />
                </div>
                <div className="flex items-start flex-col">
                  <h1 className="font-semibold text-xl h-full">
                    Amelia Joseph
                  </h1>
                  <p className="font-normal">Chief Manager</p>
                </div>
              </div>
              <div className="mt-6 items-center">
                <p className="text-slate-500">
                  Use this section to describe your company and the products you
                  offer.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="te bg-[#F8F9FF] h-60 md:h-48 w-[90%] md:w-[50%] p-7 rounded-[1.5rem]">
              <div className="flex flex-row gap-x-4 justify-center items-center">
                <div>
                  <img src={img} alt="img" className="max-w-[60px]" />
                </div>
                <div className="flex items-start flex-col">
                  <h1 className="font-semibold text-xl h-full">
                    Amelia Joseph
                  </h1>
                  <p className="font-normal">Chief Manager</p>
                </div>
              </div>
              <div className="mt-6 items-center">
                <p className="text-slate-500">
                  Use this section to describe your company and the products you
                  offer.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="te bg-[#F8F9FF] h-60 md:h-48 w-[90%] md:w-[50%] p-7 rounded-[1.5rem]">
              <div className="flex flex-row gap-x-4 justify-center items-center">
                <div>
                  <img src={img} alt="img" className="max-w-[60px]" />
                </div>
                <div className="flex items-start flex-col">
                  <h1 className="font-semibold text-xl h-full">
                    Amelia Joseph
                  </h1>
                  <p className="font-normal">Chief Manager</p>
                </div>
              </div>
              <div className="mt-6 items-center">
                <p className="text-slate-500">
                  Use this section to describe your company and the products you
                  offer.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="te bg-[#F8F9FF] h-60 md:h-48 w-[90%] md:w-[50%] p-7 rounded-[1.5rem]">
              <div className="flex flex-row gap-x-4 justify-center items-center">
                <div>
                  <img src={img} alt="img" className="max-w-[60px]" />
                </div>
                <div className="flex items-start flex-col">
                  <h1 className="font-semibold text-xl h-full">
                    Amelia Joseph
                  </h1>
                  <p className="font-normal">Chief Manager</p>
                </div>
              </div>
              <div className="mt-6 items-center">
                <p className="text-slate-500">
                  Use this section to describe your company and the products you
                  offer.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="te bg-[#F8F9FF] h-60 md:h-48 w-[90%] md:w-[50%] p-7 rounded-[1.5rem]">
              <div className="flex flex-row gap-x-4 justify-center items-center">
                <div>
                  <img src={img} alt="img" className="max-w-[60px]" />
                </div>
                <div className="flex items-start flex-col">
                  <h1 className="font-semibold text-xl h-full">
                    Amelia Joseph
                  </h1>
                  <p className="font-normal">Chief Manager</p>
                </div>
              </div>
              <div className="mt-6 items-center">
                <p className="text-slate-500">
                  Use this section to describe your company and the products you
                  offer.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="te bg-[#F8F9FF] h-60 md:h-48 w-[90%] md:w-[50%] p-7 rounded-[1.5rem]">
              <div className="flex flex-row gap-x-4 justify-center items-center">
                <div>
                  <img src={img} alt="img" className="max-w-[60px]" />
                </div>
                <div className="flex items-start flex-col">
                  <h1 className="font-semibold text-xl h-full">
                    Amelia Joseph
                  </h1>
                  <p className="font-normal">Chief Manager</p>
                </div>
              </div>
              <div className="mt-6 items-center">
                <p className="text-slate-500">
                  Use this section to describe your company and the products you
                  offer.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="te bg-[#F8F9FF] h-60 md:h-48 w-[90%] md:w-[50%] p-7 rounded-[1.5rem]">
              <div className="flex flex-row gap-x-4 justify-center items-center">
                <div>
                  <img src={img} alt="img" className="max-w-[60px]" />
                </div>
                <div className="flex items-start flex-col">
                  <h1 className="font-semibold text-xl h-full">
                    Amelia Joseph
                  </h1>
                  <p className="font-normal">Chief Manager</p>
                </div>
              </div>
              <div className="mt-6 items-center">
                <p className="text-slate-500">
                  Use this section to describe your company and the products you
                  offer.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="te bg-[#F8F9FF] h-60 md:h-48 w-[90%] md:w-[50%] p-7 rounded-[1.5rem]">
              <div className="flex flex-row gap-x-4 justify-center items-center">
                <div>
                  <img src={img} alt="img" className="max-w-[60px]" />
                </div>
                <div className="flex items-start flex-col">
                  <h1 className="font-semibold text-xl h-full">
                    Amelia Joseph
                  </h1>
                  <p className="font-normal">Chief Manager</p>
                </div>
              </div>
              <div className="mt-6 items-center">
                <p className="text-slate-500">
                  Use this section to describe your company and the products you
                  offer.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="te bg-[#F8F9FF] h-60 md:h-48 w-[90%] md:w-[50%] p-7 rounded-[1.5rem]">
              <div className="flex flex-row gap-x-4 justify-center items-center">
                <div>
                  <img src={img} alt="img" className="max-w-[60px]" />
                </div>
                <div className="flex items-start flex-col">
                  <h1 className="font-semibold text-xl h-full">
                    Amelia Joseph
                  </h1>
                  <p className="font-normal">Chief Manager</p>
                </div>
              </div>
              <div className="mt-6 items-center">
                <p className="text-slate-500">
                  Use this section to describe your company and the products you
                  offer.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
