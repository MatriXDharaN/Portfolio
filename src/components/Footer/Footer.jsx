import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='foot-container'>
                <div className='logo'>
                    <h2 className='portfolio'>Portfolio<div></div></h2>
                </div>
                <div className='foot-right'>
                    <div className='nav-items'>
                        <ul>
                            <li><a href="#home-section">Home</a></li>
                            <li><a href="#about-section">About</a></li>
                            <li><a href="#work-section">Work</a></li>
                            <li><a href="#skills-section">Skills</a></li>
                        </ul>
                    </div>
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
                </div>
            </div>
            <p className='copyright'>© 2023 Dharani</p>
        </section>
    )
}

export default Footer