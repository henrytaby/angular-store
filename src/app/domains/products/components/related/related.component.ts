import { Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductService } from '@shared/services/product.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-related',
  imports: [ProductComponent],
  templateUrl: './related.component.html',
  styleUrl: './related.component.css',
})
export class RelatedComponent {
  productService = inject(ProductService);
  $slug = input.required<string>();

  relatedProducts = rxResource({
    request: () => ({
      slug: this.$slug(),
    }),
    loader: ({ request }) =>
      this.productService.getRelatedProducts(request.slug),
  });
}
