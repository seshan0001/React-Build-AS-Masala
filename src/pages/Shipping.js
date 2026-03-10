import { useState, useEffect } from 'react';
import UseJsonData from '../helper/UsejsonData.js';
import ParallaxBanner from '../widgets/ParallaxBanner';
import Section from '../components/Section';
import Title from '../components/Title';
import Text from '../components/Text';
import Spacer from '../components/Spacer';
import Loading from '../components/Loading';

const Shipping = () => {

    const [shippingPageData, setShippingPageData] = useState(null);
    const [delayDone, setDelayDone] = useState(false);
    const { data, loading } = UseJsonData('shipping');

    useEffect(() => {
        if (data && !loading) {
            setShippingPageData(data);
            const timer = setTimeout(() => {
                setDelayDone(true);
            }, 1300);

            return () => clearTimeout(timer);
        }
    }, [data, loading]);

    if (loading || !delayDone) {
        return <Loading />;
    }

    if (shippingPageData) {
        return (
            <>
                <ParallaxBanner data={(shippingPageData.parallaxBanner) || []} />
                <Section>
                    <Title className='animateTitle' size='fs42'>Returns Policy</Title>
                    <Spacer space='30' />

                    <Text size='fs24' color='brown'>
                        You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).
                    </Text>
                    <Spacer space='30' />
                    <Text size='fs24' color='brown'>
                        You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. This time period includes the transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to process our refund request (5 to 10 business days).
                    </Text>
                    <Spacer space='30' />
                    <Text size='fs24' color='brown'>
                        If you need to return an item, simply login to your account, view the order using the 'Complete Orders' link under the My Account menu and click the Return Item(s) button. We'll notify you via e-mail of your refund once we've received and processed the returned item.
                    </Text>

                    <Spacer space='30' />
                    <Title className='animateTitle' size='fs42'>Shipping Details</Title>
                    <Spacer space='30' />

                    <Text size='fs24' color='brown'>
                        We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations.
                    </Text>
                    <Spacer space='30' />
                    <Text size='fs24' color='brown'>
                        When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose. Depending on the shipping provider you choose, shipping date estimates may appear on the shipping quotes page.
                    </Text>
                    <Spacer space='30' />
                    <Text size='fs24' color='brown'>
                        Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be found on its detail page. To reflect the policies of the shipping companies we use, all weights will be rounded up to the next full pound.
                    </Text>
                </Section>
            </>
        )
    }
}

export default Shipping;