import style from './style.module.css';

const Container = ({className, children}) => {
	return (
		<div className={`${style.c} ${style?.[className] || ''}`}>{children}</div>
	)
}

export default Container;