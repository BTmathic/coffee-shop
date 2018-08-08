import React from 'react';

const Locations = () => (
  <div id='locations' className='page-section'>
    <div className='content-container'>
      <div className='locations__image'></div>
      <div className='locations__text'>
        <h3>Visit one of our shops today!</h3>
        <div className='locations__text-contents'>
          <div className='locations__shop'>
            Downtown
          </div>
          <div className='locations__shop'>
            Uptown
          </div>
          <div className='locations__shop'>
            Suburbs
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Locations;