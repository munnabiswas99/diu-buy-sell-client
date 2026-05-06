import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const ProductCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
      {/* Image Carousel */}
      <div className="relative">
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="h-52"
        >
          <SwiperSlide>
            <img
              src="https://www.globalfurniture.com.bd/uploads/custom-images/Gallery-2023-05-31-04-40-01-5805.webp"
              alt=""
              className="w-full h-52 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.globalfurniture.com.bd/uploads/custom-images/Gallery-2023-05-31-04-40-01-5805.webp"
              alt=""
              className="w-full h-52 object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">
          Wooden Chair Good Condition
        </h2>

        {/* Info */}
        <section className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Price: 500 tk</p>

            <p className="text-sm text-gray-500 flex items-center gap-2 my-1">
              <FaLocationDot /> Changaon
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Used: 2 years</p>

            <p className="text-sm text-gray-500 flex items-center gap-2 my-1">
              <IoMdTime /> 2 days ago
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t my-2"></div>

        {/* Contact + Action */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 flex items-center gap-2">
            <FaPhoneAlt /> 0123456789
          </span>

          <button className="text-sm bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
