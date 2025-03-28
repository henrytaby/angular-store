import {
  Component,
  inject,
  signal,
  OnChanges,
  input
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { ProductComponent } from '@products/components/product/product.component';

import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list',
  imports: [
    CommonModule,
    ProductComponent,
    RouterLinkWithHref
],
  templateUrl: './list.component.html',
})
export default class ListComponent implements OnChanges {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  products = signal<Product[]>([]);


  categoriesResource = rxResource({
    loader: () => this.categoryService.getAll(),
  });

  readonly slug = input<string>();


  ngOnChanges() {
    this.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.productService.getProducts({category_slug: this.slug()}).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {
        console.log('Error get Product');
      },
    });
  }

  resetCategories(){
    this.categoriesResource.set([]);
  }

  reloadCategories(){
    this.categoriesResource.reload();
  }
}
