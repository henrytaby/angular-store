import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '@shared/models/category.mode';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly http = inject(HttpClient);

  getAll() {
      return this.http.get<Category[]>('https://api.escuelajs.co/api/v1/categories');
    }
}
