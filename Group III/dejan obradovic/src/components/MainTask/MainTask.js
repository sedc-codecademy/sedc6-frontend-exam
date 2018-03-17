import React, {Component} from 'react';
import FilterableBandTable from "../FilterableBandTable/FilterableBandTable"


class MainTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      band: this.props.band,
      filterText:"",
      page:0,
      counterNo: 0,
      counterName:0
    }
  }

  filterTextHanlder=(filterText)=>{
    const filteredBand = [...this.props.band]
    let band = [];
    filteredBand.forEach((bands) => {
      if (bands.name.indexOf(filterText) > -1 )
      band.push(bands)
    });
    this.setState({band})
  }
  nextPageHandler = ()=>{
    this.setState(prevState=>({page:prevState.page+1}))
  }
  prevPageHandler = ()=>{
    this.setState(prevState=>({page:prevState.page-1}))
  }
  sortByHeader=(target)=>{
    const band = [...this.state.band];
    const counterNo = this.state.counterNo;
    const counterName = this.state.counterName;
    switch(target){
      case "No.":
      if(counterNo === 0){
        band.sort((a,b)=> a.id-b.id)
      this.setState({band,counterNo:1})
      }else{
        band.sort((a,b)=> b.id-a.id)
        this.setState({band,counterNo:0})
      }
      break;
      case "Name":
      if(counterName === 0){
        band.sort((a,b)=> a.name.localeCompare(b.name))
        this.setState({band,counterName:1})
      }
      else{
        band.sort((a,b)=> b.name.localeCompare(a.name))
        this.setState({band,counterName:0})
      }
      break;
    }
  }
  showActiveMembers=(activeMembers)=>{
    let bands = [...this.state.band]
    if(activeMembers){
      const bandActive = bands.filter(member=> member.active === activeMembers)
      this.setState({band:bandActive})
    }else{
      const band = this.props.band;
      this.setState({band})
    }
  }
  tagHandler=(tag)=>{
    const tagBands = [...this.props.band]
    console.log("-------")
    const band = tagBands.filter(band=>band.tags.indexOf(tag)>-1)
    this.setState({band})
  }
  render() {
    console.log(this.state.band)
    return ( 
        <FilterableBandTable
        sortByHeader={this.sortByHeader}
        band={this.state.band}
        filterTextHanlder={this.filterTextHanlder}
        page={this.state.page}
        nextPageHandler={this.nextPageHandler}
        prevPageHandler={this.prevPageHandler}
        showActiveMembers={this.showActiveMembers}
        tags={this.props.tags}
        tagHandler={this.tagHandler}
        />
    );
  }
}

export default MainTask;