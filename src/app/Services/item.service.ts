import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import Item from '../Interface/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  
  base_url = "https://localhost:5001/items";

  

  constructor(private http: HttpClient) { }

  getItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.base_url);
  }

  getItemsbyId(id:number):Observable<Item>{
    return this.http.get<Item>(this.base_url+'/'+id);
  }

  ediItem(item:Item):Observable<any>{
    return this.http.put(this.base_url+'/'+ item.id,item);
  }
 
  addItem(item:Item):Observable<any>{
  return this.http.post<Item>(this.base_url, item);
  }
  delItem(id:number):Observable<any>{
    return this.http.delete(this.base_url+'/'+id);
  }
}
