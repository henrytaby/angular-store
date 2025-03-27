import { Component, inject, signal } from '@angular/core';

import { CartService } from '@shared/services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [RouterLinkWithHref, RouterLinkActive],
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
