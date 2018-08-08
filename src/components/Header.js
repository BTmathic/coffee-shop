import React from 'react';

const Header = () => (
    <header id='header'>
        <div className='content-container'>
            <div className='header__content'>
                <div className='header__title'>
                  <h1>Café Torréfaction</h1>
                </div>
                <div className='header__links'>
                  <a href='#story'>Our story</a>
                  <a href='#features'>Features</a>
                  <a href='#services'>Education</a>
                  <a href='#locations'>Locations</a>
                  <a href='#contact'>Contact</a>
                </div>
            </div>
        </div>
    </header>
);

export default Header;