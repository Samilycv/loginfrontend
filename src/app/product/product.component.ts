import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  public data:any;
constructor(private serv:ApiService
  
){}
ngOnInit(): void {
  // debugger;
  // this.serv.getdata().subscribe(response => {
  //   this.data = response;
  // });
}


}
