import React from "react";
import "./Service.css";
import ServiceCardCmpt from './ServiceCardCmpt';
import SkillsPopUp from "./SkillsPopUp";
import { useState } from "react";

var data = [{
  key:1,
  title:"Backend Development",
  skills:["Unit testing","Restful Api","MVC","OOP","CI/CD","SOLID"],
  languages:["Asp.NET Core","ADO.Net","EF Core","C#","Docker","Sql Server","Firebase","MS Test"]
}, {
  key:2,
  title:"Frontend Development",
  skills:["Unit testing","Restful Api","MVC","OOP","CI/CD"],
  languages:["Html","Css","JavaScript","Angular","React","TypeScript","Figma","Adobe xd"]
}, {
  key:3,
  title:"Mobile",
  skills:["Unit testing","Restful Api","MVC","OOP","CI/CD"],
  languages:["Dart","Flutter"]
}
];


function Service() {

  
   // const [buttonPopUp, setButtonPopUp]= useState(false);
    const [index, setIndex]=useState(null);
   

  return (

    <div className="service component__space" id="Services">

      <div className="heading">

        <h1 className="heading">Technical Skills</h1>
        <p className="heading p__color">

          I am primarily a c# developer on the dotnet platform but with reasonable skills and professional working
        </p>
        <p className="heading p__color">
          experience in frontend web and app development.
        </p>
      </div>

      <div className="container">
        <div className="row">

          <SkillsPopUp {...data[index]} trigger={index} setTrigger={setIndex}/> 
       
        
          {/*Backend*/}
          
          <ServiceCardCmpt customClickEvent={ ()=>setIndex(0)} 
          icon={<svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
            <line x1="2" y1="20" x2="2" y2="20"></line>
          </svg>}
            textTitle='Backend' ptext1='Scalable and highly performant' ptext2='backend services on the' ptext3='DotNet platform' />
          
          {/*frontend*/}
          <ServiceCardCmpt customClickEvent={ ()=>setIndex(1)} 
          icon={
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>}
            textTitle='Frontend' ptext1='Good in converting existing ' ptext2='mockups to responsive,' ptext3='optimized interfaces' />

          {/*Mobile app development*/}
          <ServiceCardCmpt customClickEvent={ ()=>setIndex(2)} 
          icon={
            // <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>            
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" fill="currentColor" class="bi bi-phone" viewBox="0 0 24 24">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          }
            textTitle='Mobile App Development' ptext1=' I throw myself down among the' ptext2=' tall grass by the stream as i lie' ptext3='close to the earth' />

        </div>
      </div>
    </div>
  );
}

export default Service;
