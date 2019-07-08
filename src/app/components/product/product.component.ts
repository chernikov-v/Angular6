import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { IProduct } from '../../models/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  item: IProduct;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute/* ,
    private router: Router */) {

  }

  getProduct(): void {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.item = this.productService.getProduct(id);
    });

  }

  ngOnInit() {
    this.getProduct();
  }

}
