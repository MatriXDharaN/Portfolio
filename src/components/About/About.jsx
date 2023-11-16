import React, { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';
import './About.css'
import milkball from './milkball.webm'

const About = () => {

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const SplitTypes = document.querySelectorAll('.anim');
            gsap.registerPlugin(ScrollTrigger);
            SplitTypes.forEach((char, i) => {
                const text = new SplitType(char, { types: 'words, chars' })
                gsap.from(text.chars, {
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 70%',
                        end: 'top 40%',
                        scrub: true,
                        markers: false
                    },
                    opacity: 0.1,
                    stagger: .1
                })
            })
            const about = document.querySelectorAll('.about-container > h1');
            about.forEach((char, i) => {
                const ah1 = new SplitType(char, { types: 'chars' })
                gsap.from(ah1.chars, {
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 60%',
                        end: 'top 30%',
                    },
                    opacity: 0,
                    yPercent: 100,
                    stagger: .06
                })
            })
            const head = document.querySelectorAll('.head-anim');
            head.forEach((char, i) => {
                const ah2 = new SplitType(char, { types: 'chars' })
                gsap.from(ah2.chars, {
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 85%',
                        end: 'top 30%',
                    },
                    opacity: 0,
                    yPercent: 100,
                    stagger: .03
                })
            })

            const hline = document.querySelectorAll('.hline-anime');
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
        <section className='about' id='about-section'>
            <div className='about-container'>
                <h1>About <span>Me!</span></h1>
                <div className='about-wrapper'>
                    <p className='anim'>I am a passionate and ambitious web developer, eager to kick-start my career in the field. I am dedicated to learning and mastering the latest web technologies to create innovative and user friendly websites. I am a proactive team player, committed to delivering high-quality results.</p>
                    <div className='video'>
                        <video className='video' playsInline muted autoPlay loop controls={false}>
                            <source src={milkball} />
                        </video>
                    </div>
                </div>
            </div>
            <div className='hline-anime'></div>
        </section>
    )
}

export default About