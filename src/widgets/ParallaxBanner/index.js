import React from 'react'
import style from './style.module.css';
import Section from '../../components/Section';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Spacer from '../../components/Spacer';

const ParallaxBanner = ({ data = [], parallelBg = false }) => {

	if (data) {
		return (
			<Section bgImage={parallelBg ? data.src : ''} className='parallaxBanner' bg='none'>
				<div className={style.parallaxBannerWrapper}>
					{
						!parallelBg &&
						<Image className='parallaxImage' src={data.src && data.src} alt={(data.alt && data.alt) || 'parallax Banner'} />
					}
					{
						data.title && data.title.map((item, index) => (
							<Title key={index + 1} value={item} color='lightWhite' size='fs50' ></Title>
						))
					}
					<Spacer space='30' />
					<Text value={data.desc && data.desc} color='lightWhite'></Text>
				</div>
			</Section>
		)
	}
}

export default ParallaxBanner;