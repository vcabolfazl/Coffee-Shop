import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination'
import ProductCard from './ProductCard'

export default function Slider({ Products }) {
 return (
  <Swiper
   navigation={true}
   autoplay={{
    delay: 250,
    disableOnInteraction: true,
   }}
   modules={[Navigation]}
   slidesPerView={1}
   spaceBetween={10}
   pagination={{
    clickable: true,
   }}
   breakpoints={{
    320: { slidesPerView: 2, spaceBetween: 20 },
    480: { slidesPerView: 3, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 20 },
    1500: { slidesPerView: 5, spaceBetween: 20 },
   }}
   className="mySwiper"
  >
   {
    Products.slice(-10).map(Slid => (
     <SwiperSlide key={Slid.id}>
      <ProductCard {...Slid} />
     </SwiperSlide>
    ))
   }
  </Swiper>
 )
}
