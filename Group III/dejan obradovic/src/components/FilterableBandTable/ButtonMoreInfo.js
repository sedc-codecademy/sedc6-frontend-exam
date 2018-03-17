import React from "react";

const ButtonMoreInfo = props=>(
   <button onClick={props.showInfo}>{props.showMoreInfo?"Show less":"Show more info"}</button>
   
)
export default ButtonMoreInfo;