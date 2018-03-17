import React from "react";
import BandTable from "./BandTable";
import FilterOptions from "./FilterOptions";
import ButtonNext from "./ButtonNext";
import ButtonPrev from "./ButtonPrev";
import DropDown from "./DropDown";
import ButtonMoreInfo from "./ButtonMoreInfo"
import DropDownBand from "./DropDownBand";
const FilterableBandTable = props=>{
    const cutBand = [];
        for (let i = 0; i < props.band.length / 10; i++) {
            cutBand.push(props.band.slice(i * 10, (i + 1) * 10));
        }
        console.log(props.selectBand)
    return(
        <div>
            {props.showMoreInfo&&
            <DropDownBand
            selectBand={props.selectBand}
            band={props.bands}
            />
            }
        <BandTable
        showMoreInfo={props.showMoreInfo}
        sortByHeader={props.sortByHeader}
        band={cutBand}
        page={props.page}
        />
        <FilterOptions
        filterTextHanlder={props.filterTextHanlder}
        showActiveMembers={props.showActiveMembers}
        />
        <ButtonPrev
        prevPageHandler={props.prevPageHandler}
        />
        <ButtonNext
        nextPageHandler={props.nextPageHandler}
        />
        <DropDown
        tagHandler={props.tagHandler}
        tags={props.tags}
        />
        <ButtonMoreInfo
        showInfo={props.showAdditionalInfo}
        showMoreInfo={props.showMoreInfo}
        />

        <p>page:{props.page+1}</p>
        </div>
    )
}
  

export default FilterableBandTable;