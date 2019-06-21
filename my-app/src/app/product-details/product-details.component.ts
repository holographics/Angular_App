import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
  ) { };


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('....');
      console.log(params);
      console.log('....' + params);
      console.log(products);
      console.log('>>>', typeof(products));
      console.log(products[0]);
      console.log(products[1]);
      this.product = products[+params.get('productId')];
    });
  }
}