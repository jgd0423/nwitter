import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ userObj }) => (
  <nav>
    <ul className='navigationUl'>
      <li>
        <Link className='navigationLink__home' to='/'>
          <FontAwesomeIcon icon={faTwitter} color={'#04AAFF'} size='2x' />
        </Link>
      </li>
      <li>
        <Link className='navigationLink__Profile' to='/profile'>
          <FontAwesomeIcon icon={faUser} color={'#04AAFF'} size='2x' />
          <span>
            {userObj.displayName
              ? `${userObj.displayName}의 Profile`
              : 'Profile'}
          </span>
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navigation;
