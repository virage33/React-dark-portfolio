import React from 'react';
import './About.css';
import aboutImg from '../img/abt.png';

function About() {
    //up to top btn code
    window.addEventListener("scroll", function () {
        const upToTop = this.document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active", window.scrollY > 0)
    })
    return (
        <div className='about component__space' id='About'>
            <div className='container'>
                <div className='row'>
                    <div className='col__2'>
                        <img src={aboutImg} alt="" className='about__img' />
                    </div>
                    <div className='col__2'>
                        <h1 className='about__heading'>
                            About Me
                        </h1>
                        <div className='about__meta'>
                            <p className='about__text p__color'>
                                I am a talented, and highly motivated Software Engineer with experience in using 
                                object oriented design techniques and programming languages including Microsoft .NET Technologies.
                                Designed and developed multi-tier applications with web and database integration. 
                                Also good in converting existing mockups to responsive, optimized interfaces.
                                Demonstrated leadership abilities and team work skills as well as ability to accomplish 
                                task under minimal direction and supervision.
                            </p>
                            <p className='about__text p__color'></p>
                            <p className='about__text p__color'>
                               
                            </p>

                            <div className='about__button d__flex align__items__center'>
                                <a href='https://drive.google.com/file/d/1hKESfM5_npbmSaXj_EFXk8ocA-pURVXa/view'><button className='about btn pointer'>Download CV</button></a>
                                <a href='About'><button className='about btn pointer'>Hire Me</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/**Up TO TUP BTN */}
            <div className='up__to__top__btn'>
                <a href='Home' className='bottom__to__top'>Up</a>
            </div>

        </div>
    )
}

export default About
