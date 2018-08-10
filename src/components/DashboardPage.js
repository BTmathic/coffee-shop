import React from 'react';
import Header from './Header';
import OurStory from './OurStory';
import Features from './Features';
import Stats from './Stats';
import Services from './Services';
import Delivery from './Delivery';
import Locations from './Locations';
import Contact from './Contact';

const DashboardPage = () => (
  <div>
    <Header />
    <div className='landing-image' alt='Coffee beans, espresso press, grinds and a latte'></div>
    <OurStory />
    <Features />
    <Stats />
    <Services />
    <Delivery />
    <Locations />
    <Contact />
  </div>
);

/* Unsplash credits
Landing image Photo by Nathan Dumlao ( https://unsplash.com/@nate_dumlao ) on Unsplash
Coffee beans Photo by Mark Daynes ( https://unsplash.com/@markdaynes ) on Unsplash
Drink of the week Photo by rawpixel ( https://unsplash.com/@rawpixel ) on Unsplash
Baked goods of the week Photo by Fancycrave ( https://unsplash.com/@fancycrave ) on Unsplash
Shirt Photo by Lucas Lenzi ( https://unsplash.com/@lucaslenzi ) on Unsplash
Coffee Basics Photo by Merlene Goulet ( https://unsplash.com/@merlenegoulet ) on Unsplash
Latte art Photo by Hannah Wei ( https://unsplash.com/@herlifeinpixels ) on Unsplash
Equipment Photo by Crew ( https://unsplash.com/@crew ) on Unsplash
What makes us different Photo by pine watt ( https://unsplash.com/@pinewatt ) on Unsplash
Coffee Shop Photo by Joshua Rodriguez ( https://unsplash.com/@jcrod ) on Unsplash
*/

export default DashboardPage;