import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {WishListComponent} from "./wish-list/wish-list.component";
import {AddWishFormComponent} from "./add-wish-form/add-wish-form.component";
import {FiltersDropdownComponent} from "./filters-dropdown/filters-dropdown.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    FiltersDropdownComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
