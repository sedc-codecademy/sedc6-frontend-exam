import React from "react";
import BandRow from "./BandRow";
const BandTable = props =>{
    console.log(props.band)
    const rows = props.band[props.page].map((band, i) =>
    <BandRow
    showMoreInfo={props.showMoreInfo}
    band={band}
        key={i}
    />
);
    return(
        <table>
            <thead onClick={(e)=>props.sortByHeader(e.target.innerHTML)}>
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Active</th>
                <th>Lists</th>
                <th>Members</th>
                <th>Albums</th>
                {props.showMoreInfo&&
                <th>Past Members</th>}
                 {props.showMoreInfo&&
                <th>Album summary</th>}
                 {props.showMoreInfo&&
                <th>Years active</th>}
                 {props.showMoreInfo&&
                <th>Chronological</th>}
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
    )
}
export default BandTable;