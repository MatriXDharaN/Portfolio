import React, { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './Testimonial.css'
import testi from './left-quote.png'


const Testimonial = () => {

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            const clr = document.querySelector('.testimonial');
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: clr,
                    start: "top 50%",
                    end: "top 30%",
                    scrub: 3
                }
            })
            tl.to('.App', {
                backgroundColor: '#fff',
                color: '#413f3f'
            }).to('.hline-work', {
                background: '#c7c5c5'
            }).to('.hline-testi', {
                background: '#c7c5c5'
            });

            const testibox = document.querySelector('.test-container');
            gsap.from(testibox, {
                scrollTrigger: {
                    trigger: testibox,
                    start: 'top bottom',
                    toggleActions: 'restart none none reverse'
                },
                yPercent: 100,
                ease: "back.out(.7)",
                opacity: 0,
                duration: 1
            })

            const hline = document.querySelectorAll('.hline-testi');
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
        <section className='testimonial'>
            <h1 className='test-head head-anim'>Testi<span>monial!</span></h1>
            <div className='test-container'>
                <img src={testi} alt='quote' />
                <p className='test-words'>Good job , i will let you know when I need you for next website and further work in ongoing website. Thanks for your support!</p>
                <p className='client'>Aswin Kumar - <span>Vilvamworks</span></p>
            </div>
            <div className='hline-testi'></div>
        </section>
    )
}

export default Testimonial