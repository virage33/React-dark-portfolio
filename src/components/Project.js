import React from 'react';
import './Project.css';
import project1 from '../img/portfolio-1.jpg';
import project2 from '../img/portfolio-2.jpg';
import project3 from '../img/portfolio-3.jpg';
import project4 from '../img/portfolio-4.jpg';
import MyprojectsCard from './MyProjectsCard';
 
var cardData =[
    {
        key:1,
        img:project1,
        titleText:"Development",
        subtitleText:"Getting tickets to the big show" 
    },
    {
        key:2,
        img:project2,
        titleText:"Development",
        subtitleText:"Getting tickets to the big show" 
    },{
        key:3,
        img:project3,
        titleText:"Development",
        subtitleText:"Getting tickets to the big show" 
    },{
        key:4,
        img:project4,
        titleText:"Development",
        subtitleText:"Getting tickets to the big show" 
    },{
        key:5,
        img:project3,
        titleText:"Development",
        subtitleText:"Getting tickets to the big show" 
    },
    {
        key:6,
        img:project4,
        titleText:"Development",
        subtitleText:"Getting tickets to the big show" 
    }
]; 

function Project() {
    var count = 0;
    return (
        <div className='project component__space' id='Project'>
            <div className="heading">
                <h1 className="heading">My Projects</h1>
                <p className="heading p__color">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit...
                </p>
                <p className="heading p__color">
                    Neque porro quisquam est qui dolorem ipsum quia dolor
                </p>
            </div>

            <div className='container'>
                <div className='row'>
                    {/*Cards*/}
                    {
                        cardData.map((x)=>{
                            return  <MyprojectsCard key={count++} img={x.img} titleText={x.titleText} subtitleText={x.subtitleText} />;
                        })
                    }
     
                    <div className='view__more__btn d__flex align__items__center justify__content__center pxy__30'>
                        <button className='view__more pointer btn'>View More</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Project
