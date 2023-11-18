import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  API = 'http://localhost:3000/api';

  FRESCA = 'http://localhost:3000/api/producto/fr';

  COCA = 'http://localhost:3000/api/producto/sf'

  SUMAFRESCA = 'http://localhost:3000/api/producto/co'

  constructor(private http:HttpClient) {
   }

  ngOnInit(){
    this.getInv();
    this.getFr();
    this.getCo();
    this.getSf();
  }
   getInv(){
    return this.http.get(`${this.API}/producto`);
  }

  getFr(){
    return this.http.get(`${this.FRESCA}`);
  }

  getCo(){
    return this.http.get(`${this.COCA}`);
  }
  getSf(){
    return this.http.get(`${this.SUMAFRESCA}`);
  }
}
