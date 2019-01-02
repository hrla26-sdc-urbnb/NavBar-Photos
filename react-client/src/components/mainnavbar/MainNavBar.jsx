import React from 'react';
import HostDropdown from './modals/HostDropdown.jsx';
import HelpModal from './modals/HelpModal.jsx';
import SignupModal from './modals/SignupModal.jsx';
import SignupWithEmail from './modals/SignupWithEmail.jsx';
import LoginModal from './modals/LoginModal.jsx';

export default class MainNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchbar: false,
      hostbutton: false,
      helpbutton: false,
      signupbutton: false,
      signupWithEmail: false,
      loginbutton: false
    }
    this.openItem = this.openItem.bind(this);
    this.closeAll = this.closeAll.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
    this.closeHost = this.closeHost.bind(this);
    this.closeHelp = this.closeHelp.bind(this);
    this.closeSignup = this.closeSignup.bind(this);
    this.closeLogin = this.closeLogin.bind(this);
    this.signupWithEmail = this.signupWithEmail.bind(this);
  }
  
  openItem(e) {
    const target = e.target.className.split(' ')[0];
    this.setState({ [target]: true });
    if (target.includes('search')) {
      document.addEventListener('click', this.closeSearch);
    }
    else if (target.includes('host')) {
      document.addEventListener('click', this.closeHost);
    }
    else if (target.includes('help')) {
      document.addEventListener('click', this.closeHelp);
    }
    else if (target.includes('signup')) {
      document.addEventListener('click', this.closeSignup);
    } 
    else if (target.includes('login')) {
      document.addEventListener('click', this.closeLogin);
    }
  }
  
  closeAll() {
    this.setState({
      searchbar: false,
      hostbutton: false,
      helpbutton: false,
      signupbutton: false,
      loginbutton: false
    })
  }
  
  closeSearch(e) {
    if (e.target.className.includes('searchwrapper') || !e.target.className.includes('search') ) {
      this.closeAll();
      document.removeEventListener('click', this.closeSearch);
      this.openItem(e);
    }
  }

  closeHost(e) {
    if (e.target.className.includes('hostbutton') || !e.target.className.includes('host') ) {
      this.closeAll();
      document.removeEventListener('click', this.closeHost);
      if (!e.target.className.includes('hostbutton')) {
        this.openItem(e);
      }
    }
  }

  closeHelp(e) {
    if (e.target.className === 'closehelp' || !e.target.className.includes('help')) {
      this.closeAll();
      document.removeEventListener('click', this.closeHelp);
      this.openItem(e);
    }
  }

  closeSignup(e) {
    if (e.target.className === 'closebutton' || !e.target.className.includes('su')) {
      this.closeAll();
      document.removeEventListener('click', this.closeSignup);
      this.openItem(e);
    }
  }

  closeLogin(e) {
    if (e.target.className === 'closebutton' || !e.target.className.includes('login')) {
      this.closeAll();
      document.removeEventListener('click', this.closeLogin);
      this.openItem(e);
    }
  }

  signupWithEmail() {
    // this.closeAll();
    this.setState({ 
      signupbutton: true,
      signupWithEmail: true 
    });
  }

  render() {
    return (
      <div className='mainnavbarwrapper'>
        <div className='mainnavbar'>
          <a href='https://www.airbnb.com'>
            <div className='homebutton'></div>
          </a>
          <div className='searchwrapper'>
            <input 
              className={
                this.state.searchbar ? 
                'searchclicked searchbar' : 
                'searchbar'
              } 
              type='text' 
              onClick={this.openItem} 
              placeholder='Search'>
            </input>
          </div>
          <div className='mainbarbuttoncontainer'>
            <div 
              className={
                this.state.hostbutton ? 
                'hostbutton mainbarbutton buttonclicked' : 
                'hostbutton mainbarbutton'
              } 
              onClick={this.openItem}>
                Become a host
            </div>
            <div className='helpbutton mainbarbutton' onClick={this.openItem}>
              Help    
            </div>
            <div className='signupbutton mainbarbutton' onClick={this.openItem}>
              Sign up
            </div>
            <div className='loginbutton mainbarbutton' onClick={this.openItem}>
              Log in
            </div>
          </div>
        </div>
        <div className='modals'>
          {this.state.hostbutton && 
          <HostDropdown />}
          {this.state.helpbutton && 
          <HelpModal />}
          {this.state.signupWithEmail && this.state.signupbutton ? 
          <SignupWithEmail /> : 
          this.state.signupbutton ? 
          <SignupModal 
            signupWithEmail={this.signupWithEmail} 
          /> : null}
          {this.state.loginbutton && 
          <LoginModal />}
        </div>
      </div>
    )
  }
}