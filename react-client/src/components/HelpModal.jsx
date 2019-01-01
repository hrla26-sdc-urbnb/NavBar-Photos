import React from 'react';

export default class HelpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return(
      <div className='helpmodal'>
        <div className='closehelp'>+</div>
        <a href='https://www.airbnb.com/help'></a>
        <div className='helptop'>
          <a className='helplink' href='https://www.airbnb.com/help'>Airbnb Help</a>
        </div>
        <div className='helpmiddle'>
          <input className='helpsearchbox' type='text' placeholder='Ask a question or search by keyword'></input>
          <div className='helpheader'>SUGGESTED ARTICLES</div>
          <div className='helpsuggest'>
            <div className='helparticle'>
              <a className='helplink' href='https://www.airbnb.com/help/getting-started'>Getting Started Guide</a>
            </div>
            <div className='helparticle'>
              <div className='helplink'>How do I submit a reservation request?</div>
            </div>
            <div className='helparticle'>
              <div className='helplink'>When am I charged for a reservation?</div>
            </div>
            <div className='helparticle'>
              <div className='helplink'>What is the Airbnb cancellation policy?</div>
            </div>
            <div className='helparticle'>
              <div className='helplink'>How do I contact a host before booking a reservation?</div>
            </div>
            <div className='helparticle'>
              <div className='helplink'>What methods of payment does Airbnb accept?</div>
            </div>
          </div>
        </div>
        <div className='helpbottom'>
          <a className='visithelp' href='https://www.airbnb.com/help'>
            <div className='visithelp'>Visit the Help Center</div>
          </a>
          <a className='feedbacklink' href='https://www.airbnb.com/help'>Give feedback</a>
        </div>
      </div>
    )
  }
}