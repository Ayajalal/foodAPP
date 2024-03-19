import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { JsonpModule } from "@angular/http";
import { SearchService } from '../app/search.service'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }, ),JsonpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
