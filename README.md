#### Angular_App
```
ng new my-app
cd my-app
```
# buttons functions

#### product-list.component.ts
```
import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
```

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

# route 
#### product-list.component.html
```
<h2>Products</h2>
 
<div *ngFor="let product of products; index as productId">
    <a [title]="product.name + ' details'" [routerLink]="['/products', productId]">
      {{ product.name }}
    </a>
</div>
```
#### app.module.ts

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```
