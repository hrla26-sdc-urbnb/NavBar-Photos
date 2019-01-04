import React from 'react';
import classNames from 'classnames';
import s from '../../../styles/signlogmodals.css'

const SignupModal = props => (
  <div className={s.modalcontainer}>
    <div id='signupmodal' className={s.innermodal}>
      <div className={s.closebutton}></div>
      <div className={classNames(s.fbbutton, s.but)}>Continue with Facebook</div>
      <div className={classNames(s.googlebutton, s.but)}>Continue with Google</div>
      <div id='signupmodal' className={s.orseperator}>or</div>
      <div id='signupmodal' className={s.seperator}></div>
      <div className={classNames(s.pinkbutton, s.signup, s.but)} onClick={props.signupWithEmail}>Sign up with Email</div>
      <div id='signupmodal' className={classNames(s.seperator, s.sep2)}></div>
      <div id='signupmodal' className={s.acccheck}>
      Already have an Airbnb account?
        <a className={s.acccheck} href='https://www.airbnb.com/login?'>Log in</a>
      </div>
    </div>
  </div>
)
export default SignupModal;