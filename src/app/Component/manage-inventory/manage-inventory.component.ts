import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Inv from '../../Interface/Inv';
import Item from '../../Interface/Item';
import Warehouse from '../../Interface/warehouse';
import { InventoryService } from '../../Services/inventory.service';
import { ItemService } from '../../Services/item.service';
import { WarehouseService } from '../../Services/warehouse.service';

@Component({
  selector: 'app-manage-inventory',
  templateUrl: './manage-inventory.component.html',
  styleUrls: ['./manage-inventory.component.scss']
})
export class ManageInventoryComponent implements OnInit {

  warehouses: Warehouse[] = [];
  items: Item[] = [];
  warehouse: string = 'N/A'
  item: string = 'N/A'
  quantity: string = 'N/A'
  formInventory: FormGroup = new FormGroup({
    warehouse: new FormControl("", Validators.required),
    item: new FormControl("", Validators.required),
    quantity: new FormControl("", [Validators.required, Validators.min(1)])
  });

  wdetails:boolean= false;

  inv: Inv = {
    item_id: 0,
    warehouse_id: 0,
    quantity: 0,
    enabled: false,
    dateAdded: new Date

  }
  constructor(private itemService: ItemService,
    private wService: WarehouseService,
    private invService: InventoryService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(resp => {
      this.items = resp;
    });
    this.wService.getWarehouses().subscribe(resp => {
      this.warehouses = resp;
    })
  }

  proceed() {
    this.operationDetails(this.formInventory.controls['item'].value, this.formInventory.controls['warehouse'].value)
    this.inv.item_id = this.formInventory.controls['item'].value;
    this.inv.warehouse_id = this.formInventory.controls['warehouse'].value;
    this.quantity= this.inv.quantity = this.formInventory.controls['quantity'].value;
    this.inv.enabled = true;
    this.inv.dateAdded= new Date
    this.formInventory.reset();
    this.invService.addItemToWarehouse(this.inv).subscribe(resp => {
      console.log(resp);
    })
  }

  operationDetails(it: number, ww: number) {
    this.item = this.items.filter(i => { return i.id == it })[0].details;
    this.warehouse = this.warehouses.filter(w => { return w.id == ww })[0].name;

  }
}
