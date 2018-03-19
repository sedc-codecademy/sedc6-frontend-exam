import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dataUrl: string;
  bands: any;
  bandsOnPage: any;
  currentPage: number = 0;
  responseData: any;
  sortedByName = false;
  sortedByAlbum = false;

  constructor() { }

  ngOnInit() {
    this.dataUrl = "https://raw.githubusercontent.com/ivletest/sedc6-frontend-exam/master/band-data.json";
    this.DataRequest(this.dataUrl);
  }
  
  private DataRequest(url: string) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState > 3 && xhr.status == 200) {
        this.responseData = JSON.parse(xhr.responseText);
        this.bands = this.responseData;
        this.sliceToPages(0);
      }
    }

  }

  public filterList(event: any) {
    let RegX = new RegExp(event.target.value, "i");
    this.bands = this.responseData.filter(band => {
      return RegX.test(band.name);
    })
  }

  public filterActive(event: any) {
    this.bands = this.responseData.filter(band => {
      return event.target.checked ? band.active : this.responseData;
    })
  }


  public sliceToPages(page: number){
    this.bandsOnPage = this.bands.slice(page * 3, (page + 1) * 3);
  }

  public sortBy(input: string) {
    if(!this.sortedByName){
      this.bands.sort((bandA, bandB) => bandA.name.localeCompare(bandB.name));
    }
    else{
      this.bands.reverse();
    }
    this.bandsOnPage = this.bands;
    this.sliceToPages(this.currentPage);
    this.sortedByName = !this.sortedByName;
  }

  public sortByAlbum(){
    if(!this.sortedByAlbum){
      this.bands.sort((bandA, bandB) => bandB.albums.length - bandA.albums.length);
    }
    else{
      this.bands.reverse();
    }
    this.bandsOnPage = this.bands;
    this.sliceToPages(this.currentPage);
    this.sortedByAlbum = !this.sortedByAlbum;
  }

  public flipPage(to: string){
    if (to === "next" && this.currentPage < this.responseData.length / 3){
      this.sliceToPages(++this.currentPage);
    }
    else if(this.currentPage > 0){
      this.sliceToPages(--this.currentPage);
    }
  }
}
