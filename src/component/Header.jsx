import React from 'react';
import helpdesk from '../images/help desk.png'

function Header() {
  return (
    <div id ='main'>
        <div className='name'>
          <div className='name-img'>
            <img src={helpdesk} alt='help-desk'/>
          </div>
          <div classname='name-text'>
            <h1>WELCOME TO</h1>
            <h2>PLM STUDENT ASSISTANCE</h2>
            <h3>GRIEVANCE</h3>
            <h2>HELP DESK</h2>

            {/*<p className='details'>Most calendars are design for teams. This is designed for freelancers 
            who want a simple way to plan their schools</p>*/}
            <div className='header-btns'>
              <a href="/form" className='cv-btn'>Submit a Form</a>
              {/*<a href="#/" className='cv-btn1'>Download App</a>*/}
            </div>
          </div>
        </div>

        <div className='arrow'></div>

    </div>
  )
}

export default Header;