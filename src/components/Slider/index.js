import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, EffectCards, FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import 'swiper/css/effect-cards';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Slider = ({className='', slides = [], children, swiperProps = {}}) => {
	return (
		<Swiper
			className = {className}
			modules={[Autoplay, EffectCoverflow, EffectCards, FreeMode, Navigation, Thumbs]}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true
			}}
			{...swiperProps}
		>
			{slides.map((slide) => (
				<SwiperSlide key={slide.id}>
					{typeof children === "function" ? children(slide) : children}
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Slider;
