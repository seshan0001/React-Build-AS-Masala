import React from 'react';
import style from './style.module.css';

const BurgerMenu = ({onToggle,open}) => {

    return (
        <div className={`${style.BurgerMenu} ${open ? style.active : ''}`} onClick={()=>{onToggle(!open)}}>
            <span className={style.line}></span>
            <span className={style.line}></span>
            <span className={style.line}></span>
        </div>
    );
};

export default BurgerMenu;
