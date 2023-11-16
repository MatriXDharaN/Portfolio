import React, {useLayoutEffect} from 'react'
import './Work.css'
import vilvam from './Vilvamworks-mcup.jpg'
import portfolio from './Portfolio-image.jpg'
import jobportal from './jobportal mcup.jpg'
import oldfolio from './oldfolio-mcup.jpg'
import travelsite from './travelsite-mcup.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';



const Work = () => {


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            
            gsap.registerPlugin(ScrollTrigger);

            const hline = document.querySelectorAll('.hline-work');
            gsap.from(hline, {
                scrollTrigger: {
                    trigger: hline,
                    start: 'top 80%',
                    end: 'top 30%',
                },
                scaleX: 0,
                duration: 1
            })

        });

        return () => ctx.revert();

    }, []);
    
    return (
        <section className='work' id="work-section">
            <div className='work-container'>
                <h1 className='work-head head-anim'>Wor<span>k</span></h1>
                <div className='work-wrapper'>
                    <div className='work-left'>
                        <h1 className='work-name head-anim'>Vilvam<span>works</span></h1>
                        <p className='work-description anim'>Collaborated with VilvamWorks, an interior design
                            company, to design and develop their official website,
                            providing a digital platform to showcase their
                            innovative interior design projects.</p>
                    </div>
                    <div className='work-right'>
                        <div className='work-right-cont'>
                            <img className='work-image'
                                src={vilvam}
                                alt='vilvamworks-website'
                            />
                            <button className="button work-btn" type="button">
                                <span className="button__text">Vilvamworks</span>
                                <span className="button__icon wrkicon">
                                    <a className='linkedin' href="https://www.vilvamworks.com/" target="_blank" rel="noopener noreferrer">
                                        <img src={require('../Work/link.png')} alt="Link Icon" />
                                    </a>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='work-wrapper reverse-col'>
                    <div className='work-right wleft'>
                        <div className='work-right-cont'>
                            <img className='work-image'
                                src={portfolio}
                                alt='portfolio'
                            />
                            <button className="button work-btn" type="button">
                                <span className="button__text">Portfolio</span>
                                <span className="button__icon wrkicon">
                                    <a className='linkedin' href="#home-section" rel="noopener noreferrer">
                                        <img src={require('../Work/link.png')} alt="Link Icon" />
                                    </a>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='work-left'>
                        <h1 className='work-name head-anim'>Personal <span>Portfolio</span></h1>
                        <p className='work-description anim'>Crafted with precision using React.js, my personal portfolio is a dynamic showcase of my skills, featuring seamless animations powered by GSAP, responsive design with Lenis, and engaging typography through Split-Type. Explore my projects and experience the fusion of technology and creativity.</p>
                    </div>
                </div>
                <div className='work-wrapper'>
                    <div className='work-left'>
                        <h1 className='work-name head-anim'>Job <span>Portal</span></h1>
                        <p className='work-description anim'>Designed and developed a job portal
                            website, focusing on the frontend, to enhance user
                            experience.</p>
                    </div>
                    <div className='work-right'>
                        <div className='work-right-cont'>
                            <img className='work-image'
                                src={jobportal}
                                alt='job-portal'
                            />
                            <button className="button work-btn" type="button">
                                <span className="button__text">Job Portal</span>
                                <span className="button__icon wrkicon">
                                    <a className='linkedin' href="https://matrixdharan.github.io/Job-Portal/" target="_blank" rel="noopener noreferrer">
                                        <img src={require('../Work/link.png')} alt="Linkedin Icon" />
                                    </a>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='work-wrapper reverse-col'>
                    <div className='work-right wleft'>
                        <div className='work-right-cont'>
                            <img className='work-image'
                                src={oldfolio}
                                alt='old-portfolio'
                            />
                            <button className="button work-btn" type="button">
                                <span className="button__text">Old Portfolio</span>
                                <span className="button__icon wrkicon">
                                    <a className='linkedin' href="https://matrixdharan.github.io/cv/" target="_blank" rel="noopener noreferrer">
                                        <img src={require('../Work/link.png')} alt="Linkedin Icon" />
                                    </a>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='work-left'>
                        <h1 className='work-name head-anim'>Old <span>Portfolio</span></h1>
                        <p className='work-description anim'>My earlier personal portfolio, built with HTML, CSS, and JavaScript, reflects my initial steps in frontend development. It captures my early dedication to creating user-friendly and visually pleasing websites.</p>
                    </div>
                </div>
                <div className='work-wrapper'>
                    <div className='work-left'>
                        <h1 className='work-name head-anim'>Travel <span>Site</span></h1>
                        <p className='work-description anim'>Discover my mobile-exclusive travel site – a frontend design that brings travel vibes to your fingertips. Enjoy the simplicity of the interface and immerse yourself in the visual journey on your mobile device</p>
                    </div>
                    <div className='work-right'>
                        <div className='work-right-cont'>
                            <img className='work-image'
                                src={travelsite}
                                alt='travelsite'
                            />
                            <button className="button work-btn" type="button">
                                <span className="button__text">Travelsite</span>
                                <span className="button__icon wrkicon">
                                    <a className='linkedin' href="https://matrixdharan.github.io/travelsite/" target="_blank" rel="noopener noreferrer">
                                        <img src={require('../Work/link.png')} alt="Linkedin Icon" />
                                    </a>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hline-work'></div>
        </section>
    )
}

export default Work