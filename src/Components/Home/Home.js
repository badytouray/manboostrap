import React from 'react'
import FeaturedImages from '../FeaturedImages/FeaturedImages';
import Footer from '../Footer/Footer';

import LatestInterview from '../LatestInterview/LatestInterview';
// import News from '../News/News';
import FeaturedEvents from './FeaturedEvents/FeaturedEvents';

function Home() {
  return (
    <>
    <br />
    <h1> Welcome to Music All Night</h1>
    <LatestInterview />
    {/* <News /> */}
    <FeaturedEvents />
    <FeaturedImages />
    <Footer />
    
    
   
    </>
  )
}

export default Home