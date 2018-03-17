import React from "react";

const DropDown = props=>{
    console.log(props.tags)
    const tags=[];
    props.tags.forEach(tag => {
        tags.push(<option key={tag}>{tag}</option>)
    });
    tags.unshift(<option key="all">all</option>)
   return ( 
   <select onChange={(e)=>props.tagHandler(e.target.value)}>
        {tags}
        </select>
   )
}

export default DropDown;