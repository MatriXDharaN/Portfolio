import React from 'react';

const Socialmedia = () => {
  return (
    <div className='social-icons'>
      <a className='linkedin' href="https://www.linkedin.com/in/dharani-kumar-40106b1aa" target="_blank" rel="noopener noreferrer">
        <img src={require('../Hero/Social-images/linkedin.png')} alt="Linkedin Icon" />
      </a>
      <a className='github' href="https://github.com/MatriXDharaN" target="_blank" rel="noopener noreferrer">
        <img src={require('../Hero/Social-images/github.png')} alt="Github Icon" />
      </a>
      <a className='instagram' href="https://www.instagram.com/dharan_gymnast?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer">
        <img src={require('../Hero/Social-images/instagram.png')} alt="Instagram Icon" />
      </a>
    </div>
  );
};

export default Socialmedia;
