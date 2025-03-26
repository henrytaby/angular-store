import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { UpperCasePipe, CurrencyPipe, DatePipe } from '@angular/common';
@Component({
  selector: 'app-product',
  imports: [UpperCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!: Product;
  @Output() addToCart = new EventEmitter();
  addToCartHandler(){
    this.addToCart.emit(this.product)
  }
}
