import { Routes } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('@products/pages/list/list.component'),
      },
      {
        path: 'category/:slug',
        loadComponent: () => import('@products/pages/list/list.component'),
      },
      {
        path: 'about',
        loadComponent: () => import('@info/pages/about/about.component'),
      },
      {
        path: 'locations',
        loadComponent: () =>
          import('@info/pages/locations/locations.component'),
      },
      {
        path: 'product/:slug',
        loadComponent: () =>
          import('@products/pages/product-detail/product-detail.component'),
      },
    ],
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
