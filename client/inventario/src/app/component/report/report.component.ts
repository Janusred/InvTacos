import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  sumacolumnatotal :any =[];

  /**
   *
   */
  constructor(private productoService:ProductoService) {}


ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getColumna();
}

getColumna(){
  return this.productoService.getColumna()
  .subscribe(
    res =>{
      this.sumacolumnatotal= res;
      console.log(res);
      
    }
  )
}

}
