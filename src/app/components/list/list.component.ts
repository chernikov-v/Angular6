import { Component, OnInit, Input, Optional } from '@angular/core';

// import { ListItemComponent } from "./list-item/list-item.component";
import { IProduct } from '../../models/product.interface';
import { ProductService } from '../../services/product/product.service';
import { Observable } from 'rxjs';

// import { FilterPipe } from '../../pipes/filterBy/filterBy.pipe';

@Component({
  selector: 'app-list',
  // entryComponents: [ ListItemComponent ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  // viewProviders: [ FilterPipe ]
  // declarations: [ FilterPipe ]
})



export class ListComponent implements OnInit {
  products: Observable<IProduct[]>;
  search: string;
  get searchString() { return this.search }
  constructor(private productsService: ProductService) {

  }

  getProducts(): void {
    this.products = this.productsService.getProducts();
  }

  removeProduct(product: IProduct) {
    return this.productsService.removeProduct(product).subscribe(() => this.getProducts());
  }

  ngOnInit() {
    this.getProducts();
  }

}
