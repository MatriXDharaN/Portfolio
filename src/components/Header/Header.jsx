import React, { useLayoutEffect } from 'react'
import './Header.css'
import gsap from 'gsap'
import Dharaniresume from '../Hero/Dharani-resume.pdf'

const Header = () => {

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.6 } });
            const header = document.querySelector(".header");

            tl.from(header, {
                scaleX: 0,
                duration: 1.2
            }, '< 5.6');

            const portfolio = document.querySelector(".portfolio");
            const nav = document.querySelector(".nav");
            const btn = document.querySelector(".headbtn");


            tl.from(portfolio, {
                yPercent: 100,
                ease: "back.out(1.4)",
                duration: 1,
                opacity: 0
            }).from(nav.children[0], {
                scale: 0,
                ease: "back.out(1.7)"
            }, '<.2').from(nav.children[1], {
                scale: 0,
                ease: "back.out(1.7)"
            }, '<.2').from(nav.children[2], {
                scale: 0,
                ease: "back.out(1.7)"
            }, '<.2').from(nav.children[3], {
                scale: 0,
                ease: "back.out(1.7)"
            }, '<.2');

            tl.from(btn, {
                scale: 0,
                ease: "back.out(1.7)"
            }, '<.2');
        });

        return () => ctx.revert();


    }, []);

    const resumePath = Dharaniresume;

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'Dharani-resume.pdf';
        link.click();
    };

    return (
        <div className='header'>
            <h2 className='portfolio'>Portfolio<div></div></h2>
            <ul className='nav'>
                <li><h4><a href="#home-section">Home</a></h4></li>
                <li><h4><a href="#about-section">About</a></h4></li>
                <li><h4><a href="#work-section">Work</a></h4></li>
                <li><h4><a href="#skills-section">Skills</a></h4></li>
            </ul>
            <div className='headbtn'>
                <button className="button" type="button" onClick={downloadResume}>
                    <span className="button__text">Resume</span>
                    <span className="button__icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 35 35"
                            id="bdd05811-e15d-428c-bb53-8661459f9307"
                            data-name="Layer 2"
                            className="svg"
                        >
                            <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                            <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                            <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Header