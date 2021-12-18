import React from 'react';
import './About.css';
import aboutImg from '../img/about.jpg';

function About() {
    return (
        <div className='about component__space'>
            <div className='container'>
                <div className='row'>
                    <div className='col__2'>
                        <img src={aboutImg} alt="" className='about__img'/>
                    </div>
                    <div className='col__2'>
                        <h1 className='about__heading'>
                            About Me
                        </h1>
                        <div className='about__meta'>
                            <p className='about__text p__color'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum velit in purus dignissim porttitor quis in libero. Mauris venenatis ligula vel bibendum venenatis. Morbi cursus eros diam, nec facilisis purus auctor ac.
                            </p>
                            <p className='about__text p__color'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum velit in purus dignissim porttitor quis in libero. Mauris venenatis ligula vel bibendum venenatis. Morbi cursus eros diam, nec facilisis purus auctor ac.
                            </p>
                            <p className='about__text p__color'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum velit in purus dignissim porttitor quis in libero. Mauris venenatis ligula vel bibendum venenatis. Morbi cursus eros diam, nec facilisis purus auctor ac.
                            </p>

                            <div className='about__button d__flex align__items__center'>
                              <a href='About'><button className='about btn pointer'>Download CV</button></a>  
                              <a href='About'><button className='about btn pointer'>Hire Me</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
