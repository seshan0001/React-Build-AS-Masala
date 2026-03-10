import { React, useEffect } from 'react';
import style from './style.module.css';
import Section from '../Section';
import Button from '../Button';

const DropDown = ({ onToggle, open, list = [] }) => {

    useEffect(() => {
        const html = document.querySelector('html');
        if (open) {
            html.classList.add('mobileMenuOpen');
        } else {
            html.classList.remove('mobileMenuOpen');
        }
    },[open]);

    return (
        <Section className={`DropDownSection ${open && 'mobileMenuOpen'}`} bg="">
            <div className={`${style.DropDownWrapper}`}>
                <div className={`${style.DropDownList}`}>
                    {
                        list && list.map((listItem) => (
                            <Button className="DropDownItem" key={listItem.id} type="link" color='lightWhite' label={listItem.label} link={listItem.link} onClick={()=>{onToggle(!open)}}></Button>
                        ))
                    }
                </div>
            </div>
        </Section>
    );
}

export default DropDown;