import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "@shared/components/header/header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [CommonModule,RouterModule,HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
