import { useState, useEffect } from 'react';
import UseJsonData from '../helper/UsejsonData.js';
import HeroBanner from '../widgets/HeroBanner';
import IconColumn from '../widgets/IconColumn';
import ParallaxBanner from '../widgets/ParallaxBanner';
import TextAndImage from '../widgets/TextAndImage';
import SliderGallery from '../widgets/SliderGallery';
import Loading from '../components/Loading';

const Home = () => {
    const [homePageData, setHomePageData] = useState(null);
    const [delayDone, setDelayDone] = useState(false);

    const { data, loading } = UseJsonData('home');

    useEffect(() => {
        if (data && !loading) {
            setHomePageData(data);
            const timer = setTimeout(() => {
                setDelayDone(true);
            }, 1300);

            return () => clearTimeout(timer);
        }
    }, [data, loading]);

    if (loading || !delayDone) {
        return <Loading />;
    }

    return (
        <>
            <HeroBanner slides={homePageData.banner.imageSlides || []} />
            <IconColumn cards={homePageData.iconColumn.cards || []} />
            <ParallaxBanner parallelBg={true} data={homePageData.parallaxBanner1 || []} />
            <TextAndImage data={homePageData.textAndImage1 || []} />
            <TextAndImage data={homePageData.textAndImage2 || []} />
            <ParallaxBanner parallelBg={true} data={homePageData.parallaxBanner1 || []} />
            <TextAndImage data={homePageData.textAndImage3 || []} />
            <TextAndImage data={homePageData.textAndImage4 || []} />
            <SliderGallery slides={homePageData.sliderGallery.slides || []} />
        </>
    );
};

export default Home;
