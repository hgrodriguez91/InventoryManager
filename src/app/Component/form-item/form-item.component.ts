import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

import Item from 'src/app/Interface/Item';
import { ItemService } from '../../Services/item.service';
@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  @Input() itemEdit: Item = { details: '' };
  @Input() edit: boolean = false;
  @Output() ItemEmiter = new EventEmitter<Item[]>();
  items: Item[] = [];
  @Input() text: string = 'Add new Item';
  formItem: FormGroup;

  constructor(private service: ItemService) {

    this.formItem = new FormGroup({
      details: new FormControl("", Validators.required)
    });


  }

  ngOnInit(): void {
  }

  addItem() {

    this.itemEdit.details = this.formItem.controls['details'].value;

    if (this.edit) {
      this.service.ediItem(this.itemEdit).subscribe(
        resp => {
          this.service.getItems().subscribe(resp => {
            this.ItemEmiter.emit(resp);
            this.text = 'Add new Item';
            this.itemEdit.details = '';
            this.formItem.reset();
          });
        }
      );
    } else {
      this.service.addItem(this.itemEdit).subscribe(
        resp => {
          this.service.getItems().subscribe(resp => {
            this.ItemEmiter.emit(resp);
            this.formItem.reset();
            this.text = 'Add new Item';
            this.itemEdit.details = '';
            this.formItem.reset();
          });
        }
      );
    }


  }



}
