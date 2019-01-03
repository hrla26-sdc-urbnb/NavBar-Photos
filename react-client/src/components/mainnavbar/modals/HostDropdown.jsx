import React from 'react';
import classNames from 'classnames';
import s from '../../../styles/hostdropdown.css'

const HostDropdown = () => (
  <div id='host' className={classNames(s.hostdropdown, s.hostbutton)}>
    <div id='host' className={s.tophost}>
      <div id='host' className={s.dropdownheading}>HOMES</div>
        <a href='https://www.airbnb.com/become-a-host/room'>
          <div className={s.hdditem}>
            <div className={s.itemheader}>List your place</div>
            <div className={s.itemdescrip}>Earn up to $'local_max' a month hosting in 'current_location'.</div>
          </div>
        </a>
        <a href='https://www.airbnb.com/host/homes?from_nav=1'>
          <div className={s.hdditem}>
          <div className={s.itemheader}>Learn about hosting your home</div>
          </div>
        </a>
    </div>
    <div id='host' className={s.bottomhost}>
      <div id='host' className={s.dropdownheading}>EXPERIENCES</div>
        <a href='https://www.airbnb.com/host/experiences?from_nav=1'>
          <div className={s.hdditem}>
            <div className={s.itemheader}>Host an experience</div>
            <div className={s.itemdescrip}>Earn money leading people on activities you love</div>
          </div>
        </a>
    </div>
  </div>
)

export default HostDropdown;