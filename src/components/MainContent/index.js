import React, { useState, useEffect } from 'react';
import style from './style.module.css';

const MainContent = ({ children }) => {
	return (
		<main className={style.mainContent}>
			<div className={style.whatsappIcon}>
				<a
					href="https://wa.me/7200579714"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-whatsapp"></i>
				</a>
			</div>

			{children}
		</main>
	);
};

export default MainContent;
