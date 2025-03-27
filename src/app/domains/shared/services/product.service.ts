import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly http = inject(HttpClient);

  getProducts(category_id?:string) {

    const url = new URL(`https://api.escuelajs.co/api/v1/products`);
    if(category_id){
      url.searchParams.set('categoryId', category_id);
    }

    return this.http.get<Product[]>(url.toString()).pipe(
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

  getOne(id: string){
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`).pipe(
      map(product => ({
        ...product,
        images: product.images.map(() => 'https://picsum.photos/480/480?r=' + Math.random())
      }))
    );
  }
}
