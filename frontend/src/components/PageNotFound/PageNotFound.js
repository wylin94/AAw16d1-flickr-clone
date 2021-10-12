import styles from './PageNotFound.module.css'
import { useHistory } from 'react-router';


function PageNotFound() {
  const history = useHistory();
  
  const handleHomeClick = (e) => {
    e.preventDefault();
    history.push('/');
  }
  
  return (
    <div className={styles.pageNotFound}>
      <div className={styles.darken}> 
        <div className={styles.error}>404</div>
        <div className={styles.comeBackHome}>Having too much fun?</div>
        <div className={styles.comeBackHome}>Let's get you back home.</div>
        <button className={styles.homeButton} onClick={handleHomeClick}>Home</button>
      </div>
    </div>
  )
}

export default PageNotFound;