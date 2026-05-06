import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const ProductCard = () => {
  return (
    <div className="border p-2">
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="rounded-lg">
            <img
              src="https://www.globalfurniture.com.bd/uploads/custom-images/Gallery-2023-05-31-04-40-01-5805.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.globalfurniture.com.bd/uploads/custom-images/Gallery-2023-05-31-04-40-01-5805.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.globalfurniture.com.bd/uploads/custom-images/Gallery-2023-05-31-04-40-01-5805.webp"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <h1>Product Name: Chair</h1>
      <p>Price: 250 Tk</p>
      <p>Used: 2 years</p>
      <p>Location: Changaon</p>
      <p>Contact: 0123456789</p>
    </div>
  );
};

export default ProductCard;
