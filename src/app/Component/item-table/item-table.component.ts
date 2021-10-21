import { Component, OnInit } from '@angular/core';
import Item from 'src/app/Interface/Item';
import{ItemService} from '../../Services/item.service'

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {

   items: Array<Item>;
   itemEdit:Item={
    id: 0,
    details:''
   };   

  constructor( private service: ItemService) {
    this.items= [];
    
   }

  ngOnInit(): void {

    this.service.getItems().subscribe(resp =>{
      this.items=resp;
      console.log(this.items);
    })
  }

  formEdit(item: Item){
    this.itemEdit.id = item.id;
    this.itemEdit.details = item.details;
    
  }


}
