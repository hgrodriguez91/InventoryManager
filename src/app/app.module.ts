import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormItemComponent } from './Component/form-item/form-item.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { ItemTableComponent } from './Component/item-table/item-table.component';
import {ItemService} from "./Services/item.service"

@NgModule({
  declarations: [
    AppComponent,
    FormItemComponent,
    NavBarComponent,
    ItemTableComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
