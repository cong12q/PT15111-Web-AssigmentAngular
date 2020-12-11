import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId = 0 ;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // //lay id 
    this.productId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
