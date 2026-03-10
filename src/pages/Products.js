import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import UseJsonData from '../helper/UsejsonData.js';
import ParallaxBanner from '../widgets/ParallaxBanner';
import CardList from '../widgets/CardList';
import SliderGallery from '../widgets/SliderGallery';
import DetailView from '../widgets/DetailView';
import Loading from '../components/Loading';

const Products = () => {
    const [productsPageData, setProductsPageData] = useState(null);
    const [delayDone, setDelayDone] = useState(false);
    const { data, loading } = UseJsonData('products');
    const { id } = useParams();

    useEffect(() => {
        if (data && !loading) {
            setProductsPageData(data);
            const timer = setTimeout(() => {
                setDelayDone(true);
            }, 1300);

            return () => clearTimeout(timer);
        }
    }, [data, loading]);

    if (loading || !delayDone) {
        return <Loading />;
    }

    if (!productsPageData) {
        return null;
    }

    if (id) {
        const product = productsPageData.products[id];

        if (!product) {
            return <Navigate to="/404" replace />;
        }

        return (
            <>
                <ParallaxBanner
                    data={{
                        src: "/images/parallax2.jpg",
                        alt: "page Banner Image",
                        title: [product.title],
                    }}
                />
                <DetailView product={product} />
            </>
        );
    }

    return (
        <>
            <ParallaxBanner data={productsPageData.parallaxBanner} />
            <CardList products={productsPageData.products} />
            <SliderGallery slides={productsPageData.sliderGallery.slides} />
        </>
    );
};

export default Products;
