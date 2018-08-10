import React from 'react';

export default class Header extends React.Component {
  state = {
    menuOpen: false,
    menuVisible: true,
    scrollY: 0
  }

  handleClick = () => {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  }

  handleScroll = () => {
    this.setState((prevState) => ({
      menuVisible: prevState.scrollY > window.scrollY ? true : false,
      scrollY: window.scrollY
    }));
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillMount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <header id={this.state.menuVisible ? 'header' : 'header-hidden'}>
        <div className='content-container'>
          <div className='header__content'>
            <div className='header__title'>
              <h1>Café Torréfaction</h1>
            </div>
            <div className='header__menu'>
              <div className='header__menu-mobile'
                onClick={() => {this.handleClick()}}
              >Menu</div>
              <div className={this.state.menuOpen ? 'header__menu-links menu-open' : 'header__menu-links'}
                ref={node => this.menu = node}
              >
                <a href='#story'>Our story</a>
                <a href='#features'>Features</a>
                <a href='#services'>Learn</a>
                <a href='#locations'>Locations</a>
                <a href='#contact'>Contact</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}