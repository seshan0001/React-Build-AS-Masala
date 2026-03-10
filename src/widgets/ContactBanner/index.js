import React from 'react';
import Section from '../../components/Section';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Spacer from '../../components/Spacer';
import GridRow from '../../components/GridRow';
import GridColumn from '../../components/GridColumn';
import Button from '../../components/Button';

const ContactBanner = ({ products = [], data = [] }) => {
    return (
        <>
        <Section>
            <GridRow>
                <GridColumn col='col50'>
                    <Image className='contactLogo' link='/' src='/images/logo.png' />
                </GridColumn>
                <GridColumn col='col50'>
                    <Title className='animateTitle' size='fs50'>Get in Touch</Title>
                    <Spacer space='30' />
                    <Text size='fs24' color='brown' >Address</Text>
                    <Spacer space='10' />
                    <Text >Babu Nagar, Anuppanadi,<br/>Teppakulam, Madurai – 625009</Text>

                    <Spacer space='30' />
                    <Text size='fs24' color='brown' >Email</Text>
                    <Spacer space='10' />
                    <Button type='link' link='mailto:asmasala25@gmail.com' label='asmasala25@gmail.com' />

                    <Spacer space='30' />
                    <Text size='fs24' color='brown' >Phone Numbers</Text>
                    <Spacer space='10' />
                    <Button type='link' link='tel:+91-8190932148' label='+91-8190932148' /><br/>
                    <Button type='link' link='tel:+91-7904478532' label='+91-7904478532' />

                    <Spacer space='30' />
                    <Text size='fs24' color='brown' >WhatsApp</Text>
                    <Spacer space='10' />
                    <Button type='link' link='https://wa.me/7200579714' label='Chat with us on WhatsApp' />
                </GridColumn>
            </GridRow>
        </Section>
        <Section bg='whiteBg'>
                <Title className='animateTitle' value='Find Us on Map' />
                <Spacer space='30' />
                <div className='borderRadius10'>
                    <iframe title='contact' width="100%" height="450" frameBorder="0" src="https://www.google.com/maps?q=Babu%20Nagar%20Anuppanadi%20Madurai&amp;output=embed" allowFullScreen=""></iframe>
                </div>
        </Section>
        </>
    );
}

export default ContactBanner;