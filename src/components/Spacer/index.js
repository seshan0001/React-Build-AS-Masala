import React from 'react';
import style from './style.module.css';

const Spacer = ({className="", children, space="10"}) => {

  return (
    <div className={`${style[className] || ''} ${style[`space${space}`] || ''}`}>{children}</div>
  )
}

export default Spacer;