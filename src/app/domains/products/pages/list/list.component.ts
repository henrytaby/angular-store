import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent} from './../../components/product/product.component';
import { Product } from './../../../shared/models/product.model';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartService);

  constructor(){
    const initProducts: Product[] = [
    {
      id: Date.now(),
      title: 'Producto 1',
      price: 100,
      image: 'https://picsum.photos/480/480?r=1',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 2',
      price: 102,
      image: 'https://picsum.photos/480/480?r=2',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 3',
      price: 103,
      image: 'https://picsum.photos/480/480?r=3',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 4',
      price: 100,
      image: 'https://picsum.photos/480/480?r=1',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 5',
      price: 102,
      image: 'https://picsum.photos/480/480?r=2',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 6',
      price: 103,
      image: 'https://picsum.photos/480/480?r=3',
      creationAt: new Date().toISOString()
    },

    ];
    this.products.set(initProducts);
  }
  addToCart(product: Product){
    this.cartService.addToCart(product);
  }
}
