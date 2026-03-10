import React from 'react'
import { Link } from 'react-router-dom';
import style from './style.module.css';

const Logo = ({ path, link = '/', className = "" }) => {
	if (path) {
		return (
			<div className={`${style.logo} ${style?.[className] || ''}`}>
				<Link className={style.logoLink} to={link}><img src={path} alt={`Logo`}></img></Link>
			</div>
		)
	}
}

export default Logo;