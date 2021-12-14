import './PageNotFound.css'
import { useHistory } from 'react-router';


function PageNotFound() {
  const history = useHistory();
  
  const handleHomeClick = (e) => {
    e.preventDefault();
    history.push('/');
  }
  
  return (
    <div className='pageNotFound'>
      <div className='pageNotFoundDarken'> 
        <div className='pageNotFoundError'>404</div>
        <div className='pageNotFoundComeBackHome'>Having too much fun?</div>
        <div className='pageNotFoundComeBackHome'>Let's get you back home.</div>
        <button className='pageNotFoundHomeButton' onClick={handleHomeClick}>Home</button>
      </div>
    </div>
  )
}

export default PageNotFound;