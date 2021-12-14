import React from 'react';

import './Footer.css';

function Footer() {
	return (
		<div className='footer'>
			<div className='footerLeft'>© 2021 Veilr. All rights reserved.</div>
			<div className='footerRight'>
				<a href='https://wylin94.github.io' className='footerDeveloper'>About the Developer</a>
				<a href='https://www.linkedin.com/in/wylin94/' className='footerLinkedinIcon'>
					<i className="fab fa-linkedin"></i>
				</a>
				<a href='https://github.com/wylin94' className='footerGithubIcon'>
					<i className="fab fa-github"></i>
				</a>
			</div>
		</div>
	);
}

export default Footer;