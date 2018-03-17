import React from "react";

const FilterOptions = props => (
    <form>
        <input 
        onChange={(e)=>{props.filterTextHanlder(e.target.value)}}
        type="search" placeholder="Search by name..."/>
        <p>
          <input
            type="checkbox"
            onChange={(e)=>props.showActiveMembers(e.target.checked)}
          />
          {' '}
          Only show active bands
        </p>
        </form>
)

export default FilterOptions;