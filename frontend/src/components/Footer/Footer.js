import React from 'react';
import styles from './Footer.module.css';

function Footer() {
	return (
		<>
			<div className={styles.footer}>
				<div className={styles.footerLeft}>© 2021 Veilr. All rights reserved.</div>
				<div className={styles.footerRight}>
					<a href='https://wylin94.github.io' className={styles.footerDeveloper}>About the Developer</a>
					<a href='https://www.linkedin.com/in/wylin94/' className={styles.footerLinkedinIcon}>
						<i className="fab fa-linkedin"></i>
					</a>
					<a href='https://github.com/wylin94' className={styles.footerGithubIcon}>
						<i className="fab fa-github"></i>
					</a>
				</div>
			</div>
		</>
	);
}

export default Footer;