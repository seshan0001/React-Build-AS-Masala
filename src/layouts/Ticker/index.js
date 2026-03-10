import React from 'react';
import Marquee from 'react-fast-marquee';
import style from './style.module.css';
import Text from '../../components/Text';
import Section from '../../components/Section';

const Ticker = ({ text = [] }) => {
    if (!text.length) return null;

    return (
        <Section padding={false}>
            <div className={style.ticker}>
                <Marquee speed={50} direction='right' autoFill pauseOnHover gradient={false}>
                    {text.map((content, index) => (
                        <Text key={index} className={style.marqueeText} size="fs16" fw="fw600">
                            <span className={style.item}>{content}</span>
                        </Text>
                    ))}
                </Marquee>
            </div>
        </Section>
    );
};

export default Ticker;
