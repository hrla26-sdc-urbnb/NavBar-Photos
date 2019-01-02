import React from 'react';

const HostDropdown = () => (
  <div className='hostdropdown hostbutton'>
    <div className='tophost'>
      <div className='dropdownheading host'>HOMES</div>
        <a href='https://www.airbnb.com/become-a-host/room'>
          <div className='hdditem host'>
            <div className='itemheader host'>List your place</div>
            <div className='itemdescrip host'>Earn up to $'local_max' a month hosting in 'current_location'.</div>
          </div>
        </a>
        <a href='https://www.airbnb.com/host/homes?from_nav=1'>
          <div className='hdditem host'>
          <div className='itemheader host'>Learn about hosting your home</div>
          </div>
        </a>
    </div>
    <div className='bottomhost host'>
      <div className='dropdownheading host'>EXPERIENCES</div>
        <a href='https://www.airbnb.com/host/experiences?from_nav=1'>
          <div className='hdditem host'>
            <div className='itemheader host'>Host an experience</div>
            <div className='itemdescrip host'>Earn money leading people on activities you love</div>
          </div>
        </a>
    </div>
  </div>
)

export default HostDropdown;