import React from 'react';
import classNames from 'classnames';
import s from '../../../styles/signlogmodals.css'

export default class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePW: true
    }
    this.pwHandler = this.pwHandler.bind(this);
  }

  pwHandler() {
    this.setState({ hidePW: !this.state.hidePW });
  }
  
  render() {
    return (
    <div className={s.modalcontainer}>
      <div id='loginmodal' className={classNames(s.innermodal, s.loginmodal)}>
      <div className={s.closebutton}></div>
      <div className={classNames(s.fbbutton, s.but, s.li)}>Log in with Facebook</div>
      <div className={classNames(s.googlebutton, s.but, s.li)}>Log in with Google</div>
      <div id='loginmodal' className={s.orseperator}>or</div>
      <div id='loginmodal' className={s.seperator}></div>
        <input id='loginmodal' className={classNames(s.form, s.email)} type='text' placeholder='Email Address'></input>
        {this.state.hidePW ? 
          <input id='loginmodal' className={classNames(s.form, s.password)} type='password' placeholder='Password'></input> :
          <input id='loginmodal' className={classNames(s.form, s.password)} type='text' placeholder='Password'></input>
        }
        <label id='loginmodal' className={s.rememberlogin}>Remember me
          <input id='loginmodal' type='checkbox'></input>
          <span id='loginmodal' className={s.checkmark}></span>
        </label>
         {this.state.hidePW ? 
          <div id='loginmodal' onClick={this.pwHandler} className={s.showlogin}>Show password</div> :
          <div id='loginmodal' onClick={this.pwHandler} className={classNames(s.showlogin, s.hide)}>Hide password</div>
        }
        <div className={classNames(s.pinkbutton, s.but, s.li)}>Log in</div>
        <a className={s.lostpw} href='https://www.airbnb.com/forgot_password'>Forgot password?</a>
        <div id='loginmodal' className={classNames(s.seperator, s.sep2)}></div>
        <div id='loginmodal' className={s.acccheck}>
        Don't have an account?        
        <a className={s.acccheck}  href='https://www.airbnb.com/signup_login?'>Sign up</a>
      </div>
     </div>
    </div>
    )
  }
}