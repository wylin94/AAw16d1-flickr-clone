import styles from './LandingPage.module.css';
import { useEffect, useState } from 'react';

function LandingPage() {
  const images = [
    'https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Resized-P%26D-Wedding-100.jpeg',
    'https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Resized-D%26D-WeddingHighlights-2.jpeg',
    'https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Resized-D%26D-WeddingHighlights-3.jpeg'
  ]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index === 2) {setIndex(0)} else {setIndex(index + 1)}
    }, 5000)
    return () => {clearTimeout(timer)}
  }, [index])

  return (
    <div className={styles.landingPageContainer} style={{backgroundImage: 'url(' + images[index] + ')'}}>
      <div className={styles.landingPageSlogan}>Find your inspiration.</div>
      <p className={styles.landingPageDes}>Join the Veilr community, home to thousands of professional<br/> photographers and a place to find your inspiration.</p>
      <a className={styles.starForFree} href="/login">Start</a>
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