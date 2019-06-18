#### Angular_App
```
ng new my-app
cd my-app
```
# button

#### html
```
  <button (click)="share()">
    Share
  </button>

  <app-product-alerts
    [product]="product" 
    (notify)="onNotify()">
  </app-product-alerts>
```
#### ts
```
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
```

#### ts
```
<p *ngIf="product.price > 10">
  <button (click)="notify.emit()">Notify Me</button>
</p>
```
