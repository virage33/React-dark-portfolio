
import React from 'react'

function LanguageCard(props) {
    const style={
        "padding":"10px",
        "width":"60%",
        "marginBottom":"10px",
        "boxShadow":"0 0 8px 1px black",
        "borderRadius":"10px",
        "background":"black",
        "color":"white",
        "display":"flex",
        "justifyContent":"center", 
        "align-items":"center"
    }
   
    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export default LanguageCard
