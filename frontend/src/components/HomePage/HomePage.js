import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.homePageAlbumContainer}>
        <h6>Albums</h6>
        <div className={styles.albums}>
          <div className={styles.album}>
            <div>album 1 image</div>
            <div>title</div>
            <div>user name</div>
          </div>
          <div className={styles.album}>album2</div>
          <div className={styles.album}>album3</div>
          <div className={styles.album}>album4</div>
          <div className={styles.album}>album5</div>
          <div className={styles.album}>album6</div>
          <div className={styles.album}>album7</div>
          <div className={styles.album}>album8</div>
          <div className={styles.album}>album9</div>
          <div className={styles.album}>album10</div>
          <div className={styles.album}>album11</div>
          <div className={styles.album}>album12</div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;