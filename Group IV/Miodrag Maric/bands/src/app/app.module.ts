import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BandsComponent } from './bands/bands.component';

import { AppMaterialModule } from '../shared/app-material.module';

import { BandService } from './bands/service/band-service.service';
import { MemberPipe } from '../shared/memberPipe.pipe';
import { BandComponent } from './bands/band/band.component';


@NgModule({
  declarations: [
    AppComponent,
    BandsComponent,
    MemberPipe,
    BandComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  entryComponents: [BandComponent],
  providers: [BandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
