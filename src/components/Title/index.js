import React from 'react';
import style from './style.module.css';

const Title = ({children, value = "", className = "", tag = "h2", size = "fs35", fw = "fw600", color = "merun", fontFamily = "nuninto"}) => {

	const Tag = tag;
	const classes = className.split(' ').map(c => style[c] || '').concat(style[size] || '',color || '',style[color] || '',style[fw] || '',style[fontFamily] || '').join(' ');

	return (
		(children && (
			<Tag className={`${style.title} ${classes}`}>{children}</Tag>
		)) || (
			<Tag className={`${style.title} ${classes}`}>{value}</Tag>
		)
	);
};

export default Title;