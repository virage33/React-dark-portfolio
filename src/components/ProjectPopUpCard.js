import React from 'react';
import { useState,useEffect } from 'react';
import './Project.css';
import './Carousel.css'

const Thumbnail = ({arr,image,index})=>{
    return (
    <div className='thumbnail'>
        {arr.map((imgsrc,i)=>{
            return <img alt="" src={imgsrc} key={i} height="50px" onClick={()=>image(i)} className={index===i?'active':""}/>
        })}
    </div>)
}


const Slideshow = ({imgs})=>{
    const[index,setIndex] = useState()
    useEffect(()=>{setIndex(0)},[])

    const next = ()=>{
        if(index===imgs.length-1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }

    };
    const prev = ()=>{
        if(index===0){
            setIndex(imgs.length-1)
        }else{
            setIndex(index-1)
        }
    };

    return <div className='slideshow'>
        <img alt="" src={imgs[index]} className='main-img'/>
        <div className='actions'>
            <button onClick={next}>next</button>
            <button onClick={prev}>prev</button>

        </div>
        <Thumbnail arr={imgs} image={setIndex} index = {index}/>
    </div>
};

function ProjectPopUpCard(props) {
    return (
        props.trigger!=null?
        <div className='carousel-container'>
            <div className='carousel-container-wrapper'>
            <div className='carousel-header'>
                <h2>Slide Show</h2>
                <button onClick={()=>props.setTrigger(null)}>X</button>
            </div>
            <div className='carousel-wrapper'>
            <div className='carousel-left'>
                <Slideshow imgs={props.slides}/>
            </div>
            <div className='carousel-right'>
                <h2>{props.titleText}</h2>
                <p>{props.description}</p>
            </div>
            </div>
            </div>
            
        </div>:""
    )
}

export default ProjectPopUpCard
