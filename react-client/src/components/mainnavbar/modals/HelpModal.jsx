import React from 'react';
import s from '../../../styles/helpmodal.css';

export default class HelpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return(
      <div className={s.helpmodal}>
        <div id='closehelp' className={s.closehelp}>+</div>
        <a href='https://www.airbnb.com/help'></a>
        <div className={s.helptop}>
          <a className={s.helplink} href='https://www.airbnb.com/help'>Airbnb Help</a>
        </div>
        <div className={s.helpmiddle}>
          <input className={s.helpsearchbox} type='text' placeholder='Ask a question or search by keyword'></input>
          <div className={s.helpheader}>SUGGESTED ARTICLES</div>
          <div className={s.helpsuggest}>
            <div className={s.helparticle}>
              <a className={s.helplink} href='https://www.airbnb.com/help/getting-started'>Getting Started Guide</a>
            </div>
            <div className={s.helparticle}>
              <div className={s.helplink}>How do I submit a reservation request?</div>
            </div>
            <div className={s.helparticle}>
              <div className={s.helplink}>When am I charged for a reservation?</div>
            </div>
            <div className={s.helparticle}>
              <div className={s.helplink}>What is the Airbnb cancellation policy?</div>
            </div>
            <div className={s.helparticle}>
              <div className={s.helplink}>How do I contact a host before booking a reservation?</div>
            </div>
            <div className={s.helparticle}>
              <div className={s.helplink}>What methods of payment does Airbnb accept?</div>
            </div>
          </div>
        </div>
        <div className={s.helpbottom}>
          <a className={s.visithelp} href='https://www.airbnb.com/help'>
            <div className={s.visithelp}>Visit the Help Center</div>
          </a>
          <a className={s.feedbacklink} href='https://www.airbnb.com/help/feedback'>Give feedback</a>
        </div>
      </div>
    )
  }
}