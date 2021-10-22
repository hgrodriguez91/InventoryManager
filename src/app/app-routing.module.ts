import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemManagerComponent } from './Component/item-manager/item-manager.component';
import { ManageInventoryComponent } from './Component/manage-inventory/manage-inventory.component';
import { WarehouseManagerComponent } from './Component/warehouse-manager/warehouse-manager.component';

const routes: Routes = [
  {
    path: '',
    component:ItemManagerComponent ,
    pathMatch: 'full'
  },
  {
    path: 'warehouse',
    component:WarehouseManagerComponent ,
    
  },
  {
    path: 'manage',
    component:ManageInventoryComponent ,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
