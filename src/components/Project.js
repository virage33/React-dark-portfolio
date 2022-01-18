
import React from 'react';
import { useState } from 'react';
import './Project.css';
import mbprj from '../img/mobileprj.jpg';
import mbprj2 from '../img/mobileprj2.jpg';
import project2 from '../img/portfolioprj.png';
import project3 from '../img/portfolio-3.jpg';
import project4 from '../img/portfolio-4.jpg';
import MyprojectsCard from './MyProjectsCard';
import ProjectPopUpCard from './ProjectPopUpCard';
 
var cardData =[
    {
        index:0,
        key:1,
        img:mbprj,
        titleText:"Skylight Global",
        projectTitle:"E-learning android App",
        subtitleText:"Getting tickets to the big show", 
        description:"asdcsdcc asdcacd asdcasdc asdcasdc asdcasdc asdcasdc asdcasdcasdcascd asdcasdcs asda asdcrasd asdcs",
        slides:[mbprj,mbprj2]
    },
    {
        index:1,
        key:2,
        img:project2,
        titleText:"Q-Wallet",
        projectTitle:"MultiCurrency E-Wallet",
        subtitleText:"Getting tickets to the big show", 
        description:"asdcsdcc asdcacd asdcasdc asdcasdc asdcasdc asdcasdc asdcasdcasdcascd asdcasdcs asda asdcrasd asdcs",
        slides:['../img/mobileprj.jpg',"../mobileprj2.jpg"]
    },{
        index:2,
        key:3,
        img:project2,
        titleText:"Spring Board",
        projectTitle:"Joblisting Restful Api",
        subtitleText:"A REST Api for a job listing site", 
        description:"asdcsdcc asdcacd asdcasdc asdcasdc asdcasdc asdcasdc asdcasdcasdcascd asdcasdcs asda asdcrasd asdcs",
        slides:['../img/mobileprj.jpg',"../mobileprj2.jpg"] 
    },{
        index:3,
        key:4,
        img:project4,
        titleText:"Portfolios",
        projectTitle:"Personal Portfolio Websites",
        subtitleText:"A REST Api for a", 
        description:"asdcsdcc asdcacd asdcasdc asdcasdc asdcasdc asdcasdc asdcasdcasdcascd asdcasdcs asda asdcrasd asdcs",
        slides:['../img/mobileprj.jpg',"../mobileprj2.jpg"] 
    },{
        index:4,
        key:5,
        img:project3,
        titleText:"Development",
        subtitleText:"Getting tickets to the big show", 
        description:"asdcsdcc asdcacd asdcasdc asdcasdc asdcasdc asdcasdc asdcasdcasdcascd asdcasdcs asda asdcrasd asdcs",
        slides:['../img/pmobileprj.jpg',"../mobileprj2.jpg"] 
    },
   
]; 

function Project() {
 const [index,setIndex]=useState(0)

    var count = 0;
    return (
        <div className='project component__space' id='Project'>
            <div className="heading">
                <h1 className="heading">My Projects</h1>
                <p className="heading p__color">
                    this gallery showcases some of the personal and professional projects i have done 
                </p>
                <p className="heading p__color">
                    or being a part of in the last two years 
                </p>
            </div>

            <div className='container'>

                <ProjectPopUpCard {...cardData[index]} trigger={index} setTrigger={setIndex}/>
                
                <div className='row'>
                    {/*Cards*/}
                    {
                        cardData.map((x)=>{
                            return  <MyprojectsCard key={count++} img={x.img} titleText={x.titleText} subtitleText={x.subtitleText} customClickEvent={()=>setIndex(x.index)} />;
                        })
                    }
     
                  

                </div>
                <div className='view__more__btn d__flex align__items__center justify__content__center pxy__30'>
                        <button className='view__more pointer btn'>View More</button>
                    </div>
            </div>

        </div>
    )
}

export default Project
