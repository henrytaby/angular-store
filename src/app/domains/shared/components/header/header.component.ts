import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  @Input({required:true}) cart: Product[] = [];
  total = signal(0);

  toggleSideMenu(){
    console.log("entro!---");
    this.hideSideMenu.update(prevState => !prevState);
  }

  ngOnChanges(changes: SimpleChanges){
    const cart = changes['cart'];
    if(cart){
      this.total.set(this.calcTotal());
    }
  }

  calcTotal(){
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

}
