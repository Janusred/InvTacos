import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-form-refresco',
  templateUrl: './form-refresco.component.html',
  styleUrls: ['./form-refresco.component.css']
})
export class FormRefrescoComponent {


  latascoca:any=[];

  /**
   *
   */
  constructor(private productService: ProductoService) {    
  }
  ngOnInit(){
    this.getSf();
  }
  getSf(){
    return  this.productService.getCo()
     .subscribe(
       res =>{
         this.latascoca= res;
         console.log(res);
         
       },
       err => console.log(err)
       
     );
   }
}
