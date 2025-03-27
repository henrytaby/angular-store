import { Component, inject, Input, signal, OnInit, OnChanges } from '@angular/core';

import { RouterLink } from '@angular/router';
import { ProductComponent} from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.mode';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent implements OnInit, OnChanges {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private readonly cartService = inject(CartService);
  private readonly productService = inject(ProductService);
  private readonly categoryService = inject(CategoryService);

  @Input() category_id?: string;

  ngOnInit(){
    this.getProducts();
    this.getCategory();
  }

  ngOnChanges(){
    this.getProducts()
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  private getProducts(){
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: (products) => {
        this.products.set(products)
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  private getCategory(){
    this.categoryService.getAll()
    .subscribe({
      next: (data) => {
        this.categories.set(data)
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
