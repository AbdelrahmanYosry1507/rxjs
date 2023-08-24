import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  text="Hello"
  constructor(private route: Router,private service:ProductserviceService) {

  }
  @Input() data: any;
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
  navigateTo() {
    this.route.navigate(['aboutus'])
    this.service.subject.next(this.text)
  }
}
