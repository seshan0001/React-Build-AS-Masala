import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';
import Section from '../../components/Section';
import Logo from '../../components/Logo';
import GridRow from '../../components/GridRow';
import GridColumn from '../../components/GridColumn';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Text from '../../components/Text';
import UseJsonData from '../../helper/UsejsonData';

const Footer = () => {

    const { data, loading } = UseJsonData('footer');
    const [footerData, setFooterData] = useState(null);

    useEffect(() => {
        setFooterData(data);
    }, [data]);

    if (footerData) {
        return (
            <footer>
                <Section bg="merunBg">
                    <div className={style.footerWrapper}>
                        <div className={style.footerTopSection}>
                            <Logo className="FooterLogo" path={footerData.logo} ></Logo>
                        </div>
                        <GridRow>
                            {
                                !loading && footerData.linkColumns.map((data) => (
                                    <GridColumn key={data.id} wrapperClass="footerColumn">
                                        {
                                            data && data.title && (<Title className="animateTitle" color="lightWhite" value={data.title}></Title>)
                                        }
                                        {
                                            data && data.items.map((link, index) => (
                                                <Button key={index + 1} className="footerLink" label={link.label} link={link.url} type="link" color="lightWhite"></Button>
                                            ))
                                        }
                                    </GridColumn>
                                ))
                            }
                            <GridColumn wrapperClass="footerColumn">
                                {
                                    data && data.address.title && (<Title className="animateTitle" color="lightWhite" value={data.address.title} btmLine={true}></Title>)
                                }
                                {
                                    data && data.address.content && (<Text className="footerAddress" color="lightWhite" value={data.address.content}></Text>)
                                }
                            </GridColumn>
                            <GridColumn wrapperClass="footerColumn">
                                {
                                    footerData.socialLinks.title && (<Title className="animateTitle" color="lightWhite" value={footerData.socialLinks.title}></Title>)
                                }
                                <div className={style.socialRow}>
                                    {
                                        footerData.socialLinks.items.map((data) => (
                                            <Link key={data.id} to={data.link} className={style.socialIcon}><i className={`fa-brands fa-${data.platform}`}></i></Link>
                                        ))
                                    }
                                </div>
                            </GridColumn>
                        </GridRow>
                        <div className={style.footerBottomSection}>
                            <Text size="fs14" value={footerData.copyRight} color="lightWhite"></Text>
                            <Logo path={footerData.fssaiLogo} ></Logo>
                        </div>
                    </div>
                </Section>
            </footer>
        )
    }
}

export default Footer;