import React from 'react';

const Services = () => (
  <div id='services' className='page-section'>
    <div className='content-container'>
      <h1>Services</h1>
      <div className='services__contents'>
        <div className='service'>
          <div className='service--basics'></div>
          <div className='service__text'>
            <h2>Coffee Basics</h2>
            <ul>
              <li>The history behind coffee and how we make it</li>
              <li>Home brew, differences and how to make your favourite cup at home</li>
              <li>Barista training, what differs from coffee shop to home brew</li>
            </ul>
          </div>
        </div>
        <div className='service'>
          <div className='service--art'></div>
          <div className='service__text'>
            <h2>Latte Art</h2>
            <ul>
              <li>Basics: the leaf and simple flowers and testing some more</li>
              <li>Intermediate: cats, bears, and elephants</li>
              <li>Advanced: dragons, peacock and singing birds</li>
            </ul>
          </div>
        </div>
        <div className='service'>
          <div className='service--equipment'></div>
          <div className='service__text'>
            <h2>Equipment</h2>
            <ul>
              <li>Home brew: what do you want/need at home</li>
              <li>Commercial: differences in machines and what to look for</li>
              <li>Maintenance: cleaning and general upkeep requirements</li>
            </ul>
          </div>
        </div>
        <div className='service'>
          <div className='service--different'></div>
          <div className='service__text'>
            <h2>What makes us different</h2>
            <ul>
              <li>Our philosophy and how to create a better business</li>
              <li>Staff, what we need from them and what they need from us</li>
              <li>Charity and giving back to the community that supports us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Services;