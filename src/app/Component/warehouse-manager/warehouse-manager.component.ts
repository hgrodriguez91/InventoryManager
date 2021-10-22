import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../../Services/warehouse.service';
import Warehouse from '../../Interface/warehouse';

@Component({
  selector: 'app-warehouse-manager',
  templateUrl: './warehouse-manager.component.html',
  styleUrls: ['./warehouse-manager.component.scss']
})
export class WarehouseManagerComponent implements OnInit {

  text:string="Add new Warehouse"
  warehouses: Warehouse[] = [];
  warehouse:Warehouse={name:''};
  edit:boolean=false;
  constructor(private service: WarehouseService) { }

  ngOnInit(): void {
    this.service.getWarehouses().subscribe(resp => {
      this.warehouses = resp;
    });

  }
  changeWarehouses(event: Warehouse[]) {
    this.warehouses = event;  
  }
   onEdit(event:Warehouse){
    this.warehouse = event;
    this.edit = true;
    this.text ='Edit Warehouse'
  } 
}
