import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import UseJsonData from '../../helper/UsejsonData';

import style from './style.module.css';
import Section from '../../components/Section';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import BurgerMenu from '../../components/BurgerMenu';
import DropDown from '../../components/DropDown';
import Ticker from '../Ticker';

const Header = () => {

    const { data, loading } = UseJsonData('header');
    const [headerData, SetHeaderData] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        SetHeaderData(data);
    }, [data]);

    if (headerData) {
        return (
            <header>
                <Ticker text={headerData.marqueeText}></Ticker>
                <Section className="headerSection" padding={false} bg='merunBg'>
                    <div className={`${style.headerWrapper}`}>
                        <Logo className="headerLogo" path={headerData.logo} ></Logo>
                        <div className={style.headerNavList}>
                            {
                                !loading && headerData.navItems.map((navItem) => (
                                    <Link key={navItem.id} className={style.headerNavItem} id={`headerNavItem${navItem.id}`} to={navItem.link}>{navItem.label}</Link>
                                ))
                            }
                            {
                                headerData.ctaBtn && headerData.ctaBtn.show && (
                                    <Button className="smallBtn btnLightWhite" type='btn' label={headerData.ctaBtn.label} link={headerData.ctaBtn.link}></Button>
                                )
                            }
                        </div>
                        <BurgerMenu onToggle={setMenuOpen} open={menuOpen}></BurgerMenu>
                    </div>
                </Section>
                <DropDown onToggle={setMenuOpen} open={menuOpen} list={(headerData.navItems) || ''}></DropDown>
            </header>
        );
    }
}

export default Header;