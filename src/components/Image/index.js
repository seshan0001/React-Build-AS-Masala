import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';

const Image = ({animateClass='', className = '', src = null, alt = null, link = ''}) => {
	return (
		<div className={`imgWrapper ${(className && style[className]) || ''} ${style.imageWrapper}`}>
			{
				(link && (
					<Link to={link}>
						<img className={`${style[animateClass]}`} src={src} alt={alt} loading='lazy' />
					</Link>
				)) || <img className={`${style[animateClass]}`} src={src} alt={alt} loading='lazy' />
			}
		</div>

	)
}

export default Image;