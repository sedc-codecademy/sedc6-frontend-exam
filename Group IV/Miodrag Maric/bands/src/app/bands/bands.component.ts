import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { Band } from '../../shared/model/band.model';
import { BandService } from './service/band-service.service';
import { BandComponent } from './band/band.component';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {

  @ViewChild('pagin') pagin;

  // titles
  viewTitle = '';
  selectedValue = '';

  // pagination
  dataLength = 0;
  pageSize;

  // Counters
  countFrom: number;
  countTo: number;

  type: string;

  data: Band[] = [];
  data1 = [];

  bands: Band[] = [];

  constructor(
    private bandService: BandService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.bandService.getBandsData()
      .subscribe((data) => {
        this.data = data;
        this.data1 = data;
        this.bands = data;
        this.countFrom = 0;
        this.countTo = 10;
        this.dataLength = data.length;
      });
  }

  // select radio button
  onSelectValue(selectedValue) {
    this.selectedValue = selectedValue;
  }

  // input search on keyup
  onKeyUpSearch(value) {
    this.pagin.pageIndex = 0;
    this.countFrom = 0;
    this.countTo = 10;
    this.search(value.target.value.trim(), this.selectedValue);
  }

  // filter search
  search(searchValue: string, selectedValue: string) {
    if (selectedValue === 'name' || selectedValue === '') {
      this.data = this.bands.filter(d =>
        d['name'].toLowerCase().indexOf(searchValue.toLowerCase().trim()) >= 0 // ||
        // d['tags'].map(tag => tag.toLowerCase().indexOf(searchValue.toLowerCase().trim()) >= 0)
      );
    } else {
      const arr: Band[] = [];
      this.bands.map((band) => {
        const fil = band.tags.filter(d =>
          d.toLowerCase().indexOf(searchValue.toLowerCase().trim()) >= 0);
        if (fil.length > 0) {
         arr.push(band);
        }
      });
      this.data = arr;
    }
    this.dataLength = this.data.length;
    if (this.type !== undefined) {
      this.onSortData(this.type);
    }
  }

  // sort data
  onSortData(type: string) {
    this.data.sort((a, b) => {
      const nameA = type === 'name' ? a[type].toLowerCase() : a.albums.length;
      const nameB = type === 'name' ? b[type].toLowerCase() : b.albums.length;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.type = type;
  }

  // pagination
  onChangePage(pageEvent: PageEvent) {
    pageEvent.length = Math.max(pageEvent.length, 0);
    this.countFrom = pageEvent.pageIndex * pageEvent.pageSize;
    this.countTo = this.countFrom < pageEvent.length ?
      Math.min(this.countFrom + pageEvent.pageSize, pageEvent.length) :
      this.countFrom + pageEvent.pageSize;
  }

  onClickAlbums(band) {
    const dialog = this.dialog.open(BandComponent, {
          width: '800px',
          height: 'auto',
          data: band
        });
  }

}
