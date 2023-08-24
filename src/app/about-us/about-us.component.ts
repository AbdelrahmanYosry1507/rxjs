import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
subs:Subscription[]=[]
newData:any
constructor(private service:ProductserviceService){
}
ngOnInit(): void {
  this.subs.push(
    this.service.subject.subscribe(res=>{
      console.log(res)
      this.newData = res
    })
  )
}
}
