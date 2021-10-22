import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Subject } from 'rxjs';
import Item from 'src/app/Interface/Item';
import { ItemService } from '../../Services/item.service'

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {

  @Input() items: Item[] = [];
  @Output() ItemEdit = new EventEmitter<Item>();

  constructor(private service: ItemService) {

  }

  ngOnInit(): void {
  }

    delete(id: number) {
      this.service.delItem(id).subscribe(resp => {
        this.service.getItems().subscribe(resp => {
          this.items = resp;
        });
      }, err => {
        this.service.getItems().subscribe(resp => {
          this.items = resp;
        })
      });
    }
    editItem(item: Item){
     this.ItemEdit.emit(item);
     console.log( 'Desde la tabla '+ item.details)
    }
  }
