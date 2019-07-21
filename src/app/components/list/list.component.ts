import { Component, OnInit, Input, Optional } from '@angular/core';

// import { ListItemComponent } from "./list-item/list-item.component";
import { IProduct } from '../../models/product.interface';
import { ProductService } from '../../services/product/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  // entryComponents: [ ListItemComponent ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})



export class ListComponent implements OnInit  {
  products: Observable<IProduct[]>;
  constructor(private productsService: ProductService) {

  }

  getProducts(): void{
    this.products = this.productsService.getProducts();
  }

  removeProduct(product: IProduct){
    return this.productsService.removeProduct(product).subscribe(() => this.getProducts());
  }

  ngOnInit() {
    this.getProducts();
  }

}
