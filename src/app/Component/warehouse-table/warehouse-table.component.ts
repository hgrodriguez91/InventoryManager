import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Warehouse from 'src/app/Interface/warehouse';
import { WarehouseService } from 'src/app/Services/warehouse.service';

@Component({
  selector: 'app-warehouse-table',
  templateUrl: './warehouse-table.component.html',
  styleUrls: ['./warehouse-table.component.scss']
})
export class WarehouseTableComponent implements OnInit {

  @Input() warehouses: Warehouse[] = [];
  @Output() warehouseEdit = new EventEmitter<Warehouse>();

  constructor(private service: WarehouseService) {

  }

  ngOnInit(): void {
  }

    delete(id: number) {
      this.service.delWarehouse(id).subscribe(resp => {
        this.service.getWarehouses().subscribe(resp => {
          this.warehouses = resp;
        });
      }, err => {
        this.service.getWarehouses().subscribe(resp => {
          this.warehouses = resp;
        })
      });
    }
    editWarehouse(warehouse: Warehouse){
     this.warehouseEdit.emit(warehouse);   
    }
}
