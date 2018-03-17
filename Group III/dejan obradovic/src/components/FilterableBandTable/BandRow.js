import React from "react";

const BandRow = props=>{

    const yearsActive = props.band.albums;
    //const min = Math.min(...yearsActive.year)
    const years = yearsActive.map(albums=>albums.year)
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    console.log(minYear,maxYear)
    //const years = yearsActive.reduce()
    return(
    <tr>
        <td>{props.band.id+1}</td>
        <td>{props.band.name}</td>
        <td>{props.band.active ? <strong>Active</strong>: "X"}</td>
        <td>{
            props.band.tags.join(",")
            }
            </td>
        <td>{
            props.band.members.map(member=>
                {
                  return <p key={member.name}>{member.name}</p>
                })
            }</td>
        <td>{props.band.albums.length}</td>
        {props.showMoreInfo&&
        <td>{props.band.members.map(member=>{
           if(member.former){
               return <p key={member.name}>{member.name}</p>
           }
        })
        }</td>
        }{props.showMoreInfo&&
            <td>/</td>
            }
            {props.showMoreInfo&&
            <td>
                <p>Years active:{maxYear-minYear}</p>
            </td>
            }
    </tr>
)}
export default BandRow;