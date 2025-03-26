import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent} from './../../components/product/product.component';
import { Product } from './../../../shared/models/product.model';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private readonly cartService = inject(CartService);
  private readonly productService = inject(ProductService);

  ngOnInit(){
    this.productService.getProducts()
    .subscribe({
      next: (products) => {
        this.products.set(products)
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  addToCart(product: Product){
    this.cartService.addToCart(product);
  }
}
