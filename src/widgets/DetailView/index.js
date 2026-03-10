import { useState } from 'react';
import Section from '../../components/Section';
import Image from '../../components/Image';
import Slider from '../../components/Slider';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Spacer from '../../components/Spacer';
import GridRow from '../../components/GridRow';
import GridColumn from '../../components/GridColumn';
import Button from '../../components/Button';
import './style.css';

const DetailView = ({ product = null }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [productId, setProductId] = useState(0);

    if (product) {
        return (
            <>
                <Section>
                    <GridRow>
                        <GridColumn col="col50">
                            <Slider
                                className="topSwiper"
                                slides={product.slides}
                                swiperProps={{
                                    loop: true,
                                    thumbs: {
                                        swiper: thumbsSwiper && !thumbsSwiper.destroyed
                                            ? thumbsSwiper
                                            : null,
                                    },
                                }}
                            >
                                {(slide) => (
                                    <div className='productCarouselTopImage'>
                                        <img
                                            className="zoom-image"
                                            src={slide}
                                            onMouseMove={(e) => {
                                                const img = e.currentTarget;
                                                const rect = img.getBoundingClientRect();

                                                const x = ((e.clientX - rect.left) / rect.width) * 100;
                                                const y = ((e.clientY - rect.top) / rect.height) * 100;

                                                img.style.transformOrigin = `${x}% ${y}%`;
                                                img.style.transform = 'scale(2)';
                                            }}
                                            onMouseLeave={(e) => {
                                                const img = e.currentTarget;
                                                img.style.transformOrigin = 'center center';
                                                img.style.transform = 'scale(1)';
                                            }}
                                        />
                                    </div>
                                )}
                            </Slider>
                            <Spacer space="30" />
                            <Slider
                                className="bottomSwiper"
                                slides={product.slides}
                                swiperProps={{
                                    onSwiper: setThumbsSwiper,
                                    slidesPerView: 5,
                                    slideToClickedSlide: true,
                                    watchSlidesProgress: true,
                                    freeMode: false,
                                    breakpoints: {
                                        0: {
                                            slidesPerView: 3,
                                        },
                                        540: {
                                            slidesPerView: 5,
                                        },
                                        750: {
                                            slidesPerView: 3,
                                        },
                                        1200: {
                                            slidesPerView: 5,
                                        }
                                    }
                                }}
                            >
                                {(slide) => (<Image className="productCarouselBotImage" src={slide} />)}
                            </Slider>
                        </GridColumn>
                        <GridColumn col="col50" className='productDetails'>
                            <Title value={product.title} />
                            <Spacer space="30" />
                            <Text value={product.desc} color='brown' />
                            <Spacer space="30" />
                            <Title value='Price:' />
                            <Spacer space="20" />
                            <div className='productPriceWrap'>
                                <Text className='newPrice' color='merun' size='fs30' fw='fw600' value={product.price[productId].new} />
                                <Text className='oldPrice' color='brown' size='fs24' value={product.price[productId].old} />
                            </div>
                            <Spacer space="30" />
                            <Title value='Quantity:' />
                            <Spacer space="30" />
                            <div className='productButtonWrap'>
                                {
                                    product.price.map((item) => {
                                        return <button key={item.id} id={item.id} className={`productButton ${Number(item.id) === Number(productId) ? 'active' : ''}`} onClick={(e) => { setProductId(e.target.id) }} >{item.weight}</button>
                                    })
                                }
                            </div>
                            <Spacer space="30" />
                            <Spacer space="10" />
                            <Button link={`https://wa.me/7200579714?text=${product.title} wieght:${product.price[productId].weight}  price:${product.price[productId].new} ${product.desc}`} label='Order Now' color='' />
                            <Spacer space="30" />
                            <Spacer space="10" />
                            <Text color='red' value={product.soldInfo} />
                        </GridColumn>
                    </GridRow>
                </Section>
                <Section>
                    <div className='productDescWrap'>
                        <Title className='animateTitle' value='Description:' />
                        <Spacer space="20" />
                        <Text color='brown' value={product.paragraphDesc} />
                        <Spacer space="30" />
                        <Title className='animateTitle' value='Ingredients:' />
                        <Spacer space="20" />
                        <ol className='ingredientsList'>
                            {
                                product.ingredientsList.map((ingredient, index) => (
                                    <li key={index}>
                                        <Spacer space="10" />
                                        <Text color='brown' value={`${ingredient}`} />
                                    </li>
                                ))
                            }
                        </ol>
                        <Spacer space="30" />
                        <Title className='animateTitle' value='Recipe:' />
                        <Spacer space="20" />
                        <Text color='brown' value={product.recipe} />
                    </div>
                </Section>
            </>
        );
    }
};

export default DetailView;