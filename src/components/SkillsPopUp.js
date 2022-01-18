import React from 'react'
import LanguageCard from './LanguageCard';
import './SkillsPopUp.css';

function SkillsPopUp(props) {
    return (props.trigger!=null?
        <div className='pop-up-wrapper' onClick={()=>props.setTrigger(null)} >
            <div className='pop-up'>
            <div className='pop-up-title'>
            <h2>{props.title}</h2>
            </div>
            <div class='summary'>
               {props.skills.map((x)=>{return <p>{x}</p>})}
            </div>
            <div className='heading'>
                <h2>Languages & frameworks</h2>
                <div className='hr'></div>
            </div>
            <div className='frameworks'>            
                {props.languages.map((x)=>{return <LanguageCard><h2>{x}</h2></LanguageCard>})}
            </div>
            </div>
        </div>:null
    )
}

export default SkillsPopUp
