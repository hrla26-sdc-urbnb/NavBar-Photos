import React from 'react';

const SignupModal = props => (
  <div className='modalcontainer'>
    <div className='innermodal su'>
      <div className='closebutton'></div>
      <div className='fbbutton'> Continue with Facebook</div>
      <div className='googlebutton'>Continue with Google</div>
      <div className='orseperator su'>or</div>
      <div className='seperator su'></div>
      <div className='pinkbutton signup'>Sign up with Email</div>
      <div className='seperator sep2 su'></div>
      <div className='acccheck su'>
      Already have an Airbnb account?
        <a className='acccheck' href='https://www.airbnb.com/login?'>Log in</a>
      </div>
    </div>
  </div>
)
export default SignupModal;