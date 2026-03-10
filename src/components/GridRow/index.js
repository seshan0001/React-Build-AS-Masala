import React from 'react';
import style from './style.module.css';

const GridRow = ({className='', children, direction='' ,col}) => {
  return (
    <div className={`gridWrapper ${direction} ${style.gridRowWrapper || ''}`}>
        <div className={`${style.gridRow} ${style[direction] || ''}`}>
            {children}
        </div>
    </div>
  )
}

export default GridRow;