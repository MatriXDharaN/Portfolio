import React, { useLayoutEffect } from 'react'
import './Skills.css'
import Skillcard from './Skillcard'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Skills = () => {

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            const clr = document.querySelector('.skills');
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: clr,
                    start: "top 40%",
                    end: "top 30%",
                    scrub: 3
                }
            })
            tl.to('.App', {
                backgroundColor: '#0E100F',
                color: '#fff'
            }).to('.hline-testi', {
                background: '#373737'
            }).from('.skillcard', {
                border: '1px solid #413f3f'
            })

            const skillcont = document.querySelector('.skill-container');
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: skillcont,
                    start: "top 50%"
                }
            })
            tl2.from(skillcont.children[0], {
                scale: 0,
                ease: "back.out(1.5)"
            }).from(skillcont.children[1], {
                scale: 0,
                ease: "back.out(1.5)"
            }, '<.2').from(skillcont.children[2], {
                scale: 0,
                ease: "back.out(1.5)"
            }, '<.2').from(skillcont.children[3], {
                scale: 0,
                ease: "back.out(1.5)"
            }, '<.2').from(skillcont.children[4], {
                scale: 0,
                ease: "back.out(1.5)"
            }, '<.2').from(skillcont.children[5], {
                scale: 0,
                ease: "back.out(1.5)"
            }, '<.2').from(skillcont.children[6], {
                scale: 0,
                ease: "back.out(1.5)"
            }, '<.2').from(skillcont.children[7], {
                scale: 0,
                ease: "back.out(1.5)"
            }, '<.2').from(skillcont.children[8], {
                scale: 0,
                ease: "back.out(1.5)"
            }, '<.2').from(skillcont.children[9], {
                scale: 0,
                ease: "back.out(1.5)"
            }, '<.2').from(skillcont.children[10], {
                scale: 0,
                ease: "back.out(1.5)"
            }, '<.2').from(skillcont.children[11], {
                scale: 0,
                ease: "back.out(1.5)"
            }, '<.2').from(skillcont.children[12], {
                scale: 0,
                ease: "back.out(1.5)"
            }, '<.2').from(skillcont.children[13], {
                scale: 0,
                ease: "back.out(1.5)"
            }, '<.2').from(skillcont.children[14], {
                scale: 0,
                ease: "back.out(1.5)"
            }, '<.2');

            const hline = document.querySelectorAll('.hline-skills');
            gsap.from(hline, {
                scrollTrigger: {
                    trigger: hline,
                    start: 'top 90%'
                },
                scaleX: 0,
                duration: 1
            })

        });

        return () => ctx.revert();

    }, []);

    return (
        <section className='skills' id='skills-section'>
            <div className='skill-cont'>
                <h1 className='skills-head head-anim'>Ski<span>lls</span></h1>
                <div className='skill-container'>
                    <Skillcard name='React JS' />
                    <Skillcard name='Javascript' />
                    <Skillcard name='Python' />
                    <Skillcard name='HTML' />
                    <Skillcard name='CSS' />
                    <Skillcard name='Bootstrap' />
                    <Skillcard name='Git' />
                    <Skillcard name='Github' />
                    <Skillcard name='GSAP' />
                    <Skillcard name='Figma' />
                    <Skillcard name='Wix' />
                    <Skillcard name='Blender' />
                    <Skillcard name='Photoshop' />
                    <Skillcard name='3D Modeling' />
                    <Skillcard name='Designing' />
                </div>
            </div>
            <div className='hline-skills'></div>
        </section>
    )
}

export default Skills