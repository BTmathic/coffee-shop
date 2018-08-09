import React from 'react';

export default class Features extends React.Component {
  state = {
    coffeeText: 'Coffee bean of the week',
    drinkText: 'Drink of the week',
    bakeryText: 'Bakery special this week',
    shirtText: 'Shirts',
    tempText: ''
  }

  onMouseOver = (section, hoverText) => {
    const tempText = this.state[section];
    let newState = {};
    newState[section] = hoverText;
    newState.tempText = tempText;
    this.setState(newState);
  }

  onMouseOut = (stateText) => {
    const oldText = this.state.tempText;
    let newState = {};
    newState[stateText] = oldText;
    newState.tempText = '';
    this.setState(newState);
  }

  render() {
    return (
      <div id='features' className='page-section'>
        <div className='content-container'>
          <h1>Features</h1>
          <div className='features__content'>
            <div className='feature feature--coffee'
              onMouseEnter={() => this.onMouseOver('coffeeText', 'Organic, Fair Trade from Peru')}
              onMouseLeave={() => this.onMouseOut('coffeeText')}
            >
              <div className='feature__text'>
                {this.state.coffeeText}
              </div>
              <div className='feature--overlay'></div>
            </div>
            <div className='feature feature--drink'
              onMouseEnter={() => this.onMouseOver('drinkText', 'Americano')}
              onMouseLeave={() => this.onMouseOut('drinkText')}
            >
              <div className='feature__text'>
                {this.state.drinkText}
              </div>
              <div className='feature--overlay'></div>
            </div>
            <div className='feature feature--bakery'
              onMouseEnter={() => this.onMouseOver('bakeryText', 'Hazelnut Cream Sandwich Cookies')}
              onMouseLeave={() => this.onMouseOut('bakeryText')}
            >
              <div className='feature__text'>
                {this.state.bakeryText}
              </div>
              <div className='feature--overlay'></div>
            </div>
            <div className='feature feature--shirt'
              onMouseEnter={() => this.onMouseOver('shirtText', 'Every purchase helps our bean suppliers!')}
              onMouseLeave={() => this.onMouseOut('shirtText')}
            >
              <div className='feature__text'>
                {this.state.shirtText}
              </div>
              <div className='feature--overlay'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}