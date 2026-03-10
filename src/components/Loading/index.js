import React from 'react';
import style from './style.module.css';

const Loading = () => {
  return (
    <div className={style.loaderSection}>
        <div className={style.customLoder}>
            <span className={style.customLoderLine1}></span>
            <span className={style.customLoderLine2}></span>
            <span className={style.customLoderLine3}></span>
            <span className={style.customLoderLine4}></span>
            <span className={style.customLoderLine5}></span>
        </div>
    </div>
  )
}

export default Loading;