import React, { useRef } from 'react';
import style from './style.module.css';
import Section from '../../components/Section';
import GridRow from '../../components/GridRow';
import GridColumn from '../../components/GridColumn';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Spacer from '../../components/Spacer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IconColumn = ({ cards = [] }) => {

	const gridRef = useRef(null);

	useGSAP(
		() => {
			if (!gridRef?.current) return;

			gsap.fromTo(
				'.animateColumn',
				{
					x: 100,
					scale:0.9,
					opacity: 0,
					visibility: 'hidden'
				},
				{
					x: 0,
					opacity: 1,
					scale:1,
					visibility: 'visible',
					duration: 0.7,
					ease: 'power3.out',
					stagger: 0.30,
					scrollTrigger: {
						trigger: gridRef.current,
						start: 'top 70%',
						toggleActions: 'play reverse play reverse',
					}
				}
			);
		},
		{ scope: gridRef }
	);

	if (cards) {
		return (
			<Section bg="grayBg">
				<div ref={gridRef}>
					<GridRow className='overFlowHide'>
						{cards && cards.map((card) => (
							<GridColumn animateClass='animateColumn' gridRef={gridRef} key={card.id} className='iconColumn'>
								<div className={style.iconImgWrapper}>
									<Image className='columnIcon' animateClass={card.alt} src={card.src} alt={card.alt} />
								</div>
								<Spacer space="30"></Spacer>
								<div className={style.iconColumnTextInfo}>
									<Title value={card.title} size='fs28' color='white' fontFamily='nuninto' />
									<Text value={card.desc} color='lightWhite' />
								</div>
							</GridColumn>
						))}
					</GridRow>
				</div>
			</Section>
		)
	}
}

export default IconColumn;