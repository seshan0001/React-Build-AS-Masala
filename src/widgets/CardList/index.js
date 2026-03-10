import React from 'react';
import Section from '../../components/Section';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Spacer from '../../components/Spacer';
import GridRow from '../../components/GridRow';
import GridColumn from '../../components/GridColumn';
import Button from '../../components/Button';

const CardList = ({ products = [], data = [] }) => {
    return (
        <Section>
            <GridRow>
                {
                    products && Object.values(products).map((item) => (
                        <GridColumn col='col75' key={item.id} className='productCard'>
                            <GridRow >
                                <GridColumn col='col100' className='productCardImageCol'>
                                    <Image link={item.url} className='productCardImage' src={item.src} alt={item.alt} />
                                </GridColumn>
                                <GridColumn col='col100' className='productCardTextCol'>
                                    <Title value={item.title} size='fs28' />
                                    <Spacer space='30' />
                                    <Text value={item.desc} color='brown' />
                                    <Spacer space='30' />
                                    <Button link={item.url} color='lightWhite' />
                                </GridColumn>
                            </GridRow>
                        </GridColumn>
                    ))
                }
            </GridRow>
        </Section>
    );
}

export default CardList;