import './LandingPage.css';
import { useEffect, useState } from 'react';

import Footer from "../Footer";

function LandingPage() {
  const images = [
    // "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage1.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage2.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage3.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage4.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage5.jpeg",
    // "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage6.jpg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage7.jpeg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage8.jpeg",
    // "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage9.jpeg",
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
    // "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage23.jpg",
    "https://veilr.s3.us-west-1.amazonaws.com/Landing+Page/landingPage24.jpeg",
  ]

  const [index, setIndex] = useState(Math.floor(Math.random() * images.length));

  useEffect(() => {
    const timer = setTimeout(() => {
      // if (index === images.length - 1) {setIndex(0)} else {setIndex(index + 1)}
      let nextRandom = Math.floor(Math.random() * images.length);
      while (nextRandom === index) {
        nextRandom = Math.floor(Math.random() * images.length);
      }
      setIndex(nextRandom);
    }, 5500)
    return () => {clearTimeout(timer)}
  }, [index, images.length])

  return (
    <div className='landingPageContainer' style={{backgroundImage: 'url(' + images[index] + ')'}}>
      <div className='landingPageSlogan'>Find your inspiration.</div>
      <p className='landingPageDes'>Join the Veilr community, home to thousands of professional<br/> photographers and endless ideas.</p>
      <a className='starForFree' href="/signup">START</a>
      <Footer />
    </div>
  )
}

export default LandingPage;