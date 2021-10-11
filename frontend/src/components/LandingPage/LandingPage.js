import styles from './LandingPage.module.css';
import { useEffect, useState } from 'react';

function LandingPage() {
  const images = [
    'https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/2db5ed2cd9fe166851105c49c207d8d6-xxlarge.jpeg',
    'https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/6d904ace8ebbc60021968739b7482192-xxlarge.jpeg',
    'https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/7e7b3968aaccfc8a739b609da291e600-xxlarge.jpeg',
    'https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/b6ade0618e963363c90687b49c0684ec-xxlarge.jpeg',
    'https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/Resized-A%26C-WeddingHighlights-37.jpeg',
    'https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/Resized-A%26M-WeddingHighlights-14.jpeg',
    'https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/Resized-A%26M-WeddingHighlights-67.jpeg',
    'https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/Resized-A%26P-WeddingHighlights-20.jpg',
    'https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/Resized-A%26P-WeddingHighlights-30.jpg',
    'https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/Resized-C%26R-WeddingHighlights-3.jpeg',
  ]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index === images.length - 1) {setIndex(0)} else {setIndex(index + 1)}
    }, 5000)
    return () => {clearTimeout(timer)}
  }, [index])

  return (
    <div className={styles.landingPageContainer} style={{backgroundImage: 'url(' + images[index] + ')'}}>
      <div className={styles.landingPageSlogan}>Find your inspiration.</div>
      <p className={styles.landingPageDes}>Join the Veilr community, home to thousands of professional<br/> photographers and a place to find your inspiration.</p>
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