#### Angular_App
```
ng new my-app
cd my-app
```
# button

#### product-list.component.html
```
<h2>Products</h2>
 
<div *ngFor="let product of products; index as productId">
 
  <h3>
    <a [title]="product.name + ' details'" [routerLink]="['/products', productId]">
      {{ product.name }}
    </a>
  </h3>
 
  <p *ngIf="product.description">
    Description: {{ product.description }}
  </p>
 
  <button (click)="share()">
    Share
  </button>

  <app-product-alerts
    [product]="product" 
    (notify)="onNotify()">
  </app-product-alerts>
   
</div>
```
#### product-alerts.component.ts
```
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent {
  @Input() product;
  @Output() notify = new EventEmitter();
}
```

#### product-alerts.component.html
```
<p *ngIf="product.price > 10">
  <button (click)="notify.emit()">Notify Me</button>
</p>
```
