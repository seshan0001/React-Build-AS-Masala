import Container from "../Container";
import style from "./style.module.css";

const Section = ({className='', children, container = true, padding = true, bg='lightWhiteBg', bgImage=''}) => {
	const classes = className && className.split(' ').map(c => style[c] || '').join(' ');
	return (
		<section style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined} className={`${classes || ''} ${style.section} ${bg} ${bgImage ? style.bgImage : ''} ${(!padding && style.noSectionPad) || ''} `}>
			{(container && <Container>{children}</Container>) || children}
		</section>
	);
}

export default Section;