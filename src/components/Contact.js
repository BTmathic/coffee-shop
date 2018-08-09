import React from 'react';

const Contact = () => (
  <div id='contact' className='page-section'>
    <div className='content-container'>
      <div className='contact__contents'>
        <div className='contact__menus'>
          <div className='contact__menu'>
            <div className='contact__menu-option'>
              Café
            </div>
            <div className='contact__menu-option'>
              Our Story
            </div>
            <div className='contact__menu-option'>
              Brewing
            </div>
            <div className='contact__menu-option'>
              Locations
            </div>
          </div>
          <div className='contact__menu'>
            <div className='contact__menu-option'>
              Delivery
            </div>
            <div className='contact__menu-option'>
              My Account
            </div>
            <div className='contact__menu-option'>
              Terms &amp; Conditions
            </div>
            <div className='contact__menu-option'>
              Jobs
            </div>
            <div className='contact__menu-option'>
              FAQ
            </div>
          </div>
        </div>
        <div className='contact__info'>
          <div className='contact__address'>
            <div className='contact__address-line'>
              Café Torréfaction
            </div>
            <div className='contact__address-line'>
              321 Fake Road
            </div>
            <div className='contact__address-line'>
              Villy Township, Canada
            </div>
            <div className='contact__address-line'>
              (987) 456 - 3210
            </div>
          </div>
          <div className='contact__socials'>
            <img src='/Images/facebook-logo.png' alt='Facebook' />
            <img src='/Images/twitter-logo.png' alt='Twitter' />
            <img src='/Images/instagram-logo.png' alt='Instagram' />
          </div>
        </div>
      </div>
      <footer>
        &copy; Café Torréfaction
      </footer>
    </div>
  </div>
);

export default Contact;