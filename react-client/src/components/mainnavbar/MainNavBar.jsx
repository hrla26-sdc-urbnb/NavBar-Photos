import React from 'react';
import classNames from 'classnames';
import HostDropdown from './modals/HostDropdown.jsx';
import HelpModal from './modals/HelpModal.jsx';
import SignupModal from './modals/SignupModal.jsx';
import SignupWithEmail from './modals/SignupWithEmail.jsx';
import LoginModal from './modals/LoginModal.jsx';
import s from '../../styles/mainnavbar.css';

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
    const target = e.target.id;
    this.setState({ [target]: true });
    if (target === 'searchbar') {
      document.addEventListener('click', this.closeSearch);
    }
    else if (target === 'hostbutton') {
      document.addEventListener('click', this.closeHost);
    }
    else if (target === 'helpbutton') {
      document.addEventListener('click', this.closeHelp);
    }
    else if (target === 'signupbutton') {
      document.addEventListener('click', this.closeSignup);
    } 
    else if (target === 'loginbutton') {
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
    if (e.target.id === 'searchbar') {
      return;
    } else {
      this.closeAll();
      document.removeEventListener('click', this.closeSearch);
      this.openItem(e);
    }
  }

  closeHost(e) {
    if (e.target.id === 'host') {
      return;
    } else {
      this.closeAll();
      document.removeEventListener('click', this.closeHost);
      if (e.target.id === 'hostbutton') {
        return;
      } else {
        this.openItem(e);
      }
    }
  }

  closeHelp(e) {
    if (e.target.id === 'closehelp' || !e.target.className.includes('help')) {
      this.closeAll();
      document.removeEventListener('click', this.closeHelp);
      this.openItem(e);
    }
  }

  closeSignup(e) {
    if (e.target.id === 'signupmodal') {
      return;
    } else {
      this.closeAll();
      document.removeEventListener('click', this.closeSignup);
      this.openItem(e);
    }
  }

  closeLogin(e) {
    if (e.target.id === 'loginmodal') {
      return;
    } else {
      this.closeAll();
      document.removeEventListener('click', this.closeLogin);
      this.openItem(e);
    }
  }

  signupWithEmail() {
    this.setState({ 
      signupbutton: true,
      signupWithEmail: true 
    });
  }

  render() {
    return (
      <div id='mainnavbarwrapper'>
        <div className={s.mainnavbar}>
          <a href='https://www.airbnb.com'>
            <div className={s.homebutton}></div>
          </a>
          <div className={s.searchwrapper}>
            <input 
              id='searchbar'
              className={
                this.state.searchbar ? 
                classNames(s.searchclicked, s.searchbar) : 
                s.searchbar
              } 
              type='text' 
              onClick={this.openItem} 
              placeholder='Search'>
            </input>
          </div>
          <div className={s.mainbarbuttoncontainer}>
            <div 
              id='hostbutton'
              className={
                this.state.hostbutton ? 
                classNames(s.mainbarbutton, s.buttonclicked) : 
                s.mainbarbutton
              } 
              onClick={this.openItem}>
                Become a host
            </div>
            <div id='helpbutton' className={s.mainbarbutton} onClick={this.openItem}>
              Help    
            </div>
            <div id='signupbutton' className={s.mainbarbutton} onClick={this.openItem}>
              Sign up
            </div>
            <div id='loginbutton' className={s.mainbarbutton} onClick={this.openItem}>
              Log in
            </div>
          </div>
        </div>
        <div className={s.modals}>
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