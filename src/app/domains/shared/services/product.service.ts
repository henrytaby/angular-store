import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);


  constructor() { }

  getProducts() {
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').pipe(
      map(products =>
        products.map(product => ({
          ...product,
          images: product.images.map(() =>
            'https://picsum.photos/480/480?r=' + Math.random()
          )
        }))
      )
    );
  }
}
