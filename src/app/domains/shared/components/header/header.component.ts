import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);

  private readonly cartService = inject(CartService);

  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleSideMenu(){
    console.log("entro!---");
    this.hideSideMenu.update(prevState => !prevState);
  }

}
