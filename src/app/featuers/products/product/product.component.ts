import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  myProducts: any
  constructor(private service: ProductserviceService) {

  }
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.myProducts = res
    })
  }
}
