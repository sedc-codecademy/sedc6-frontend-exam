import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  responseData;
  bands;
  dataUrl;
  selectedBand = "";

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
      }
    }

  }

  // albums = {};
  pastMembers = [];

  public ShowInfo(band, index) { 
    this.selectedBand = index;
    // band.albums.forEach(album => {
    //   !this.albums[album.type] ? this.albums[album.type] = 1 : this.albums[album.type]++;
    // });
    this.pastMembers = band.members.filter(member => member.former);
    // console.log(this.albums);
    
  }

}
