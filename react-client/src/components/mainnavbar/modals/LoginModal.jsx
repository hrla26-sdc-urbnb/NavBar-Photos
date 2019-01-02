import React from 'react';

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
    <div className='modalcontainer'>
     <div className='innermodal loginmodal'>
      <div className='closebutton'></div>
        <div className='fbbutton li'>Log in with Facebook</div>
        <div className='googlebutton li'>Log in with Google</div>
        <div className='orseperator login'>or</div>
        <div className='seperator login'></div>
        <input className='form email login' type='text' placeholder='Email Address'></input>
        {this.state.hidePW ? 
          <input className='form password login' type='password' placeholder='Password'></input> :
          <input className='form password login' type='text' placeholder='Password'></input>
        }
        <label className='rememberlogin'>Remember me
          <input className='login' type='checkbox'></input>
          <span className='checkmark login'></span>
        </label>
         {this.state.hidePW ? 
          <div onClick={this.pwHandler} className='showlogin'>Show password</div> :
          <div onClick={this.pwHandler} className='showlogin'>Hide password</div>
        }
        <div className='pinkbutton li'>Log in</div>
        <a className='lostpw' href='https://www.airbnb.com/forgot_password'>Forgot password?</a>
        <div className='seperator sep2 login'></div>
        <div className='acccheck su'>
        Don't have an account?        
        <a className='acccheck' href='https://www.airbnb.com/signup_login?'>Sign up</a>
      </div>
     </div>
    </div>
    )
  }
}