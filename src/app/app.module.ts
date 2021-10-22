import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormItemComponent } from './Component/form-item/form-item.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { ItemTableComponent } from './Component/item-table/item-table.component';
import {ItemService} from "./Services/item.service";
import { ItemManagerComponent } from './Component/item-manager/item-manager.component';
import { WarehouseManagerComponent } from './Component/warehouse-manager/warehouse-manager.component';
import { WarehouseFormComponent } from './Component/warehouse-form/warehouse-form.component';
import { WarehouseTableComponent } from './Component/warehouse-table/warehouse-table.component';
import { ManageInventoryComponent } from './Component/manage-inventory/manage-inventory.component'

@NgModule({
  declarations: [
    AppComponent,
    FormItemComponent,
    NavBarComponent,
    ItemTableComponent,
    ItemManagerComponent,
    WarehouseManagerComponent,
    WarehouseFormComponent,
    WarehouseTableComponent,
    ManageInventoryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
