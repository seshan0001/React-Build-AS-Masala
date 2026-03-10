import { useState, useEffect } from 'react';
import UseJsonData from '../helper/UsejsonData.js';
import ParallaxBanner from '../widgets/ParallaxBanner';
import ContactBanner from '../widgets/ContactBanner';
import Loading from '../components/Loading';

const Contact = () => {

    const [contactPageData, setContactPageData] = useState(null);
    const [delayDone, setDelayDone] = useState(false);
    const { data, loading } = UseJsonData('contact');

    useEffect(() => {
        if (data && !loading) {
            setContactPageData(data);
            const timer = setTimeout(() => {
                setDelayDone(true);
            }, 1300);

            return () => clearTimeout(timer);
        }
    }, [data, loading]);

    if (loading || !delayDone) {
        return <Loading />;
    }
    
    if (loading) {
        return (
            <Loading/>
        );
    }

    return (
        <>
            <ParallaxBanner data={(contactPageData && contactPageData.parallaxBanner) || []} />
            <ContactBanner/>
        </>
    )
}

export default Contact;