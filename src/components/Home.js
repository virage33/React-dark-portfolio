import React from 'react';
import './Home.css';
import logo from "../img/logo.png";
import Typist from 'react-typist';

function Home() {
    //fixed navbar
    window.addEventListener("scroll",function(){
        const header = document.querySelector(".header");
        header.classList.toggle("active",window.scrollY>0)
    });
    return (
        <div className ="home" id='Home'>
            <div className="home__bg">
                <div className="header d__flex align__items__center pxy__30">
                    <div clas sName='logo'>
                        <img src={logo} alt=""/>
                    </div>
                    <div className='navigation pxy__30'>
                        <ul className='navbar d__flex'>
                            <a href='#Home'><li className='nav__items mx__15'>Home</li></a>
                            <a href='#About'><li className='nav__items mx__15'>About</li></a>
                            <a href='#Services'><li className='nav__items mx__15'>Services</li></a>
                            <a href='#Project'><li className='nav__items mx__15'>Portfolio</li></a>
                            <a href='#Contact'><li className='nav__items mx__15'>Contact</li></a>
                        </ul>
                        
                    </div>
                </div>

                {/* Home Content*/}
                <div className='container'>
                    <div className='home__content'>
                        <div className='home__meta'>
                            <Typist>
                            <h1 className='home__text pz__10'>
                                WELCOME TO MY WORLD
                            </h1>
                            <h2 className='home__text pz__10'>
                              
                                    Hi, I'm John Doe
                                   
                            </h2>
                            <h3 className='home__text sweet pz__10'>
                                
                                Js Developer
                                <Typist.Delay ms={500} />
                            </h3>
                            <h4 className='home__text pz__10'>
                                based in the USA.
                            </h4>
                            </Typist>
                        </div>
                    </div>
                </div>


            </div>
            <div className='gradient'></div>
        </div>
    )
}

export default Home
