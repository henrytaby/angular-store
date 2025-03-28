import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '@shared/models/product.model';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);

  getProducts(params: { category_id?: string; category_slug?: string }) {
    const url = new URL(`${environment.apiUrl}/api/v1/products`);
    if (params.category_id) {
      url.searchParams.set('categoryId', params.category_id);
    }

    if (params.category_slug) {
      url.searchParams.set('categorySlug', params.category_slug);
    }

    return this.http.get<Product[]>(url.toString()).pipe(
      map((products) =>
        products.map((product) => ({
          ...product,
          images: product.images.map(
            () => 'https://picsum.photos/480/480?r=' + Math.random(),
          ),
        })),
      ),
    );
  }

  getOne(params: { id?: string; slug?: string }) {
    let urlGet = '';
    if (params.id) {
      urlGet = `${environment.apiUrl}/api/v1/products/${params.id}`;
    }
    if (params.slug) {
      urlGet = `${environment.apiUrl}/api/v1/products/slug/${params.slug}`;
    }
    return this.http.get<Product>(urlGet).pipe(
      map((product) => ({
        ...product,
        images: product.images.map(
          () => 'https://picsum.photos/480/480?r=' + Math.random(),
        ),
      })),
    );
  }
}
