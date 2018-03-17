import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Page2Component } from './page2/page2.component';
import { GetKeys } from './get-keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchFilterPipe,
    Page2Component,
    GetKeys
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
