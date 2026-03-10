import Section from '../components/Section';
import Title from '../components/Title';
import Button from '../components/Button';
import Spacer from '../components/Spacer';

const NotFound = () => {
    return (
            <Section>
                <div className='alignCenter'>
                    <Title size='fs50' >The Page is Not Found!</Title>
                    <Spacer space='30' />
                    <Button link='/' label='Go To Homepage' color='' />
                </div>
            </Section>
    );
}

export default NotFound;