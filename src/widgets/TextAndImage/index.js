import React, { useRef } from 'react';
import Section from '../../components/Section';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Spacer from '../../components/Spacer';
import GridRow from '../../components/GridRow';
import GridColumn from '../../components/GridColumn';
import Button from '../../components/Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextAndImage = ({ data = [] }) => {

	const gridRef = useRef(null);

	useGSAP(() => {
			if (!gridRef.current) return;
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: gridRef.current,
					start: 'top 70%',
					toggleActions: 'play reverse play play',
				},
			});

			tl.fromTo(
				'.leftToRight',
				{ x: -120, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 0.7,
					ease: 'power3.out',
					stagger: 0.25,
				}
			).fromTo(
				'.rightToLeft',
				{ x: 120, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 0.7,
					ease: 'power3.out',
					stagger: 0.25,
				},
				'-=0.5'
			);
		},{ scope: gridRef }
	);

	if (data) {
		return (
			<Section>
				<div ref={gridRef}>
					<GridRow direction={data.imageDirection}>
						<GridColumn animateClass='leftToRight' className='textAndImageImgCol' col='col50'>
							<Image className='textAndImageImg' link={data.url} src={data.src} alt={data.alt} />
						</GridColumn>
						<GridColumn animateClass='rightToLeft' col='col50'>
							<Title value={data.title} size='fs50' />
							<Spacer space='30' />
							<Text value={data.desc} color='brown' />
							<Spacer space='30' />
							<Button link={data.url} color='lightWhite' />
						</GridColumn>
					</GridRow>
				</div>
			</Section>
		);
	}
}

export default TextAndImage;