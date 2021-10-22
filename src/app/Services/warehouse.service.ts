import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Warehouse from '../Interface/warehouse';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

 
  base_url = "https://localhost:5001/warehouse";
  

  constructor(private http: HttpClient) { }

  getWarehouses():Observable<Warehouse[]>{
    return this.http.get<Warehouse[]>(this.base_url);
  }

  getWarehousesbyId(id:number):Observable<Warehouse>{
    return this.http.get<Warehouse>(this.base_url+'/'+id);
  }

  ediWarehouse(Warehouse:Warehouse):Observable<any>{
    return this.http.put(this.base_url+'/'+ Warehouse.id,Warehouse);
  }
 
  addWarehouse(Warehouse:Warehouse):Observable<any>{
  return this.http.post<Warehouse>(this.base_url, Warehouse);
  }
  delWarehouse(id:number):Observable<any>{
    return this.http.delete(this.base_url+'/'+id);
  }
}


