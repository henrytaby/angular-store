import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '@shared/models/category.model';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly http = inject(HttpClient);

  getAll() {
    return this.http.get<Category[]>(`${environment.apiUrl}/api/v1/categories`);
  }

  async getAllPromise(): Promise<Category[]>{
    const response = await fetch(`${environment.apiUrl}/api/v1/categories`);
    const data = await response.json();
    return data;
  }
}
