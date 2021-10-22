import { Component, OnInit } from '@angular/core';

import Item from 'src/app/Interface/Item';
import { ItemService } from 'src/app/Services/item.service';


@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.scss']
})
export class ItemManagerComponent implements OnInit {
  text:string="Add new Item"
  items: Item[] = [];
  item:Item={details:''};
  edit:boolean=false;
  constructor(private service: ItemService) { }

  ngOnInit(): void {
    this.service.getItems().subscribe(resp => {
      this.items = resp;
    });

  }
  changeItems(event: Item[]) {
    this.items = event;  
  }
  onEdit(event:Item){
    this.item = event;
    this.edit = true;
    this.text ='Edit Item'
  }
}
