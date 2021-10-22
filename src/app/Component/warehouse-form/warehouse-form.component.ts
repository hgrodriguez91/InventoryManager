import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Warehouse from 'src/app/Interface/warehouse';
import { WarehouseService } from '../../Services/warehouse.service';

@Component({
  selector: 'app-warehouse-form',
  templateUrl: './warehouse-form.component.html',
  styleUrls: ['./warehouse-form.component.scss']
})
export class WarehouseFormComponent implements OnInit {

  
  @Input() warehouseEdit: Warehouse = { name: '' };
  @Input() edit: boolean = false;
  @Output() warehouseEmiter = new EventEmitter<Warehouse[]>();
  Warehouses: Warehouse[] = [];
  @Input() text: string = 'Add new Warehouse';
  formWarehouse: FormGroup;

  constructor(private service: WarehouseService) {

    this.formWarehouse = new FormGroup({
      name: new FormControl("", Validators.required)
    });


  }

  ngOnInit(): void {
  }

  addWarehouse() {

    this.warehouseEdit.name = this.formWarehouse.controls['name'].value;

    if (this.edit) {
      this.service.ediWarehouse(this.warehouseEdit).subscribe(
        resp => {
          this.service.getWarehouses().subscribe(resp => {
            this.warehouseEmiter.emit(resp);
            this.text = 'Add new Warehouse';
            this.warehouseEdit.name = '';
            this.formWarehouse.reset();
          });
        }
      );
    } else {
      this.service.addWarehouse(this.warehouseEdit).subscribe(
        resp => {
          this.service.getWarehouses().subscribe(resp => {
            this.warehouseEmiter.emit(resp);
            this.formWarehouse.reset();
            this.text = 'Add new Warehouse';
            this.warehouseEdit.name = '';
            this.formWarehouse.reset();
          });
        }
      );
    }


  }


}
