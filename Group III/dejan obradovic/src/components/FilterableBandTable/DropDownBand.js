import React from "react";

const DropDownBand=props=>{
    console.log(props.band)
    const bands=[];
    props.band.forEach(name => {
        bands.push(<option key={name.name}>{name.name}</option>
        )
    });
    bands.unshift(<option key="all">all</option>)
    return(
        <select onChange={(e)=>props.selectBand(e.target.value)}>
            {bands}
            </select>
    )
}
export default DropDownBand;