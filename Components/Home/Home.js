import React from 'react'
import FeaturedImages from '../FeaturedImages/FeaturedImages';
import Footer from '../Footer/Footer';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

import LatestInterview from '../LatestInterview/LatestInterview';
import NewArrivals from '../NewArrivals/NewArrivals';
// import News from '../News/News';
import FeaturedEvents from './FeaturedEvents/FeaturedEvents';

function Home() {
  return (
    <>
    <br />
    <h1> Welcome to Music All Night</h1>
    <LatestInterview />
    <br />
    {/* <News /> */}
   <Fade right>
    <FeaturedEvents />
    </Fade>
    {/* <NewArrivals /> */}
    <Zoom>
    <FeaturedImages />
    </Zoom>
    <Footer />
    </>
  )
}

export default Home