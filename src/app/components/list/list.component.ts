import { Component, OnInit, Input, Optional } from '@angular/core';

// import { ListItemComponent } from "./list-item/list-item.component";
import { IProduct } from '../../models/product.interface';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-list',
  // entryComponents: [ ListItemComponent ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})



export class ListComponent implements OnInit  {
  @Input() items: IProduct[];
  constructor(private productsService: ProductService) {

  }

  getProducts(): void{
    this.items = this.productsService.getProducts();
  }

  ngOnInit() {
    this.getProducts();
  }

}
