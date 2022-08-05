import "./Nav.css";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Nav() {
  return (
    <div className='wrapper'>
      <div className='navbar'>
        <ul className='nav-items'>
          <li className='item'>
            <a href url='#'>
              HOME
            </a>
          </li>

          <li className='item'>
            <a href = '#work'>
              WORK
            </a>
          </li>

          <li className='item'>
            <a href url='#resume'>
              RESUME
            </a>
          </li>

          <li className='item'>
            <a href url='#'>
              CONTACT
            </a>
          </li>
        </ul>
        <div className='social'>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href='/'
              target='_blank'
              aria-label='Facebook'>
              <FaFacebook />
            </a>
            <a
              className='social-icon-link'
              href='/'
              target='_blank'
              aria-label='Instagram'>
              <FaInstagram />
            </a>
            <a
              className='social-icon-link'
              href={
                "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
              }
              target='_blank'
              aria-label='Youtube'>
              <FaYoutube />
            </a>
            <a
              className='social-icon-link'
              href='/'
              target='_blank'
              aria-label='Twitter'>
              <FaTwitter />
            </a>
            <a
              className='social-icon-link'
              to='https://www.linkedin.com/in/enakagawa21/'
              target='_blank'
              aria-label='LinkedIn'>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Nav;
