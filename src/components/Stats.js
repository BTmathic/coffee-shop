import React from 'react';

export default class Stats extends React.Component {
  state = {
    daysOpen: 0,
    meetups: 53,
    workshops: 37
  }

  componentDidMount() {
    // calculate somehow... use moment to get current date?
    this.setState(() => ({ daysOpen: 1127 }));
  }

  render() {
    return (
      <div id='stats' className='page-section'>
        <div className='content-container'>
          <div className='stats__content'>
            <div className='stat'>
              <div className='stat__title'>Days Open</div>
              <div className='stat__number'>{this.state.daysOpen}</div>
            </div>
            <div className='stat'>
              <div className='stat__title'>Workshops held</div>
              <div className='stat__number'>{this.state.workshops}</div>
            </div>
            <div className='stat'>
              <div className='stat__title'>Meetups hosted</div>
              <div className='stat__number'>{this.state.meetups}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}