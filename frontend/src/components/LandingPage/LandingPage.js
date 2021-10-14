import styles from './LandingPage.module.css';
import { useEffect, useState } from 'react';

function LandingPage() {
  const images = [
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage1.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage2.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage3.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage4.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage5.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage6.jpg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage7.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage8.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage9.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage10.jpg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage11.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage12.jpg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage13.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage14.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage15.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage16.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage17.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage18.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage19.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage20.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage21.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage22.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage23.jpg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage24.jpeg",
  ]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index === images.length - 1) {setIndex(0)} else {setIndex(index + 1)}
    }, 5000)
    return () => {clearTimeout(timer)}
  }, [index, images.length])

  return (
    <div className={styles.landingPageContainer} style={{backgroundImage: 'url(' + images[index] + ')'}}>
      <div className={styles.landingPageSlogan}>Find your inspiration.</div>
      <p className={styles.landingPageDes}>Join the Veilr community, home to thousands of professional<br/> photographers and endless ideas.</p>
      <a className={styles.starForFree} href="/signup">Start</a>
      <div className={styles.landingPageFooter}>
        <div className={styles.footerLeft}>© 2021 Veilr. No rights reserved.</div>
        <div className={styles.footerRight}>
          <span>About the Developer</span>
          <a href='https://www.linkedin.com/in/wylin94/' className={styles.linkedinIcon}>
              <i className="fab fa-linkedin-in"></i>
          </a>
          <a href='https://github.com/wylin94' className={styles.githubIcon}>
              <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;