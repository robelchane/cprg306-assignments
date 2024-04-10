import React from 'react';
import profilePic from './profile-pic.png';

export default function Home() {
  return (
    <div className='flex justify-center m-10'>
      <div>
        <img src={profilePic} alt="Robel Chane profile picture" />
      </div>
      <div>
        <p>Hello, I'm</p>
        <h1>Robel Chane</h1>
        <p>Software Developer</p>
        <div>
          <button onClick={() => window.open('./RobelChane_Resume.pdf')}>
            Download Resume
          </button>
          <button onClick={() => window.location.href = './#contact'}>
            Contact Info
          </button>
        </div>
        <div>
          <img
            src="./linkedin.png"
            alt="My LinkedIn profile"
            onClick={() => window.location.href = 'https://linkedin.com/'}
          />
          <img
            src="./github.png"
            alt="My Github profile"
            onClick={() => window.location.href = 'https://github.com/'}
          />
        </div>
      </div>
    </div>
  );
}
