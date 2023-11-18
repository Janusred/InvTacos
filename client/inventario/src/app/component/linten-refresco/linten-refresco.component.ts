import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-linten-refresco',
  templateUrl: './linten-refresco.component.html',
  styleUrls: ['./linten-refresco.component.css']
})
export class LintenRefrescoComponent  {

inventarios : any =[];
latascoca : any =[];
latasfresca : any =[];
sumafresca : any=[];


constructor(private productService:ProductoService ){}



ngOnInit(){
  this.getCo();
  this.getFr();
  this.getSf();

}


  getCo(){
    return  this.productService.getCo()
     .subscribe(
       res =>{
         this.latascoca= res;
         console.log(res);
         
       },
       err => console.log(err)
       
     );
   }
   getFr(){
    return  this.productService.getFr()
     .subscribe(
       res =>{
         this.latasfresca= res;
         console.log(res);
         
       },
       err => console.log(err)
       
     );
     
   }
   getSf(){
    return  this.productService.getFr()
     .subscribe(
       res =>{
         this.sumafresca= res;
         console.log(res);
         
       },
       err => console.log(err)
       
     );
   }
}
