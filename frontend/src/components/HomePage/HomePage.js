import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.homepageSlogan}>Find your inspiration.</div>
      <p className={styles.homepageDes}>Join the Veilr community, home to thousands of professional<br/> photographers and a place to find your inspiration.</p>
      <a className={styles.starForFree} href="/login">Start</a>
      <div className={styles.homepageFooter}>
        <div className={styles.footerLeft}>© 2021 Veilr. No rights reserved.</div>
        <div className={styles.footerRight}>
          <span>About the Developer</span>
          <a href='https://www.linkedin.com/in/wylin94/' className={styles.linkedinIcon}>
              <i class="fab fa-linkedin-in"></i>
          </a>
          <a href='https://github.com/wylin94' className={styles.githubIcon}>
              <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage;