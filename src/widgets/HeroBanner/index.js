import React from 'react';
import './style.css';
import Slider from '../../components/Slider';
import Section from '../../components/Section';
import Image from '../../components/Image';

const HeroBanner = ({ slides }) => {
	if (slides) {
		return (
			<Section>
				<div className='banner'>
					<Slider slides={slides}>
						{
							(slides) => (<Image className='bannerSlideImage' src={slides.src} alt={slides.alt} />)
						}
					</Slider>
				</div>
			</Section>
		);
	}
}

export default HeroBanner;