import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Inv from '../Interface/Inv';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  base_url="https://localhost:5001/inventory"

  constructor(private http: HttpClient) { }

  addItemToWarehouse(inv:Inv):Observable<Inv>{
    return this.http.post<Inv>(this.base_url,inv);
  }
}
