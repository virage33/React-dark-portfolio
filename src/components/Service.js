import React from "react";
import "./Service.css";
import ServiceCardCmpt from './ServiceCardCmpt';

function Service() {
  return (
    
    <div className="service component__space" id="Services">
      
      <div className="heading">
      
        <h1 className="heading">My Awesome Service</h1>
        <p className="heading p__color">
        
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </p>
        <p className="heading p__color">
          Neque porro quisquam est qui dolorem ipsum quia dolor
        </p>
      </div>

      <div className="container">
        <div className="row">
        
        {/*Backend*/}
          <ServiceCardCmpt icon={<svg
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
                textTitle='Backend' ptext1=' I throw myself down among the' ptext2=' tall grass by the stream as i lie' ptext3='close to the earth' />
       
          {/*frontend*/}
          <ServiceCardCmpt icon={
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>} 
          textTitle='Frontend' ptext1=' I throw myself down among the' ptext2=' tall grass by the stream as i lie' ptext3='close to the earth' />
       
          {/*Mobile app development*/}
          <ServiceCardCmpt icon={
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>            
          }
          textTitle='Mobile App Development' ptext1=' I throw myself down among the' ptext2=' tall grass by the stream as i lie' ptext3='close to the earth' />
       
        </div>
      </div>
    </div>
  );
}

export default Service;
