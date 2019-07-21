import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, TYPES } from '../../services/product/product.service';
import { IProduct } from '../../models/product.interface';
import { file2base64 } from '../../services/utils';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    product: IProduct = {
        id: null,
        image: null,
        title: null,
        description: null,
        category: null,
        createdAt: null,
        qty: 1
    };
    file : File;
    fileName = null;

    categories: string[] = [TYPES.SMART, TYPES.WATCH, TYPES.TRACKER];
    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    getProduct(): void {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.productService.getProduct(id).subscribe(product => {
              this.product = product
            } );
        });

    }

    onImageLoad(e) {
        let [file] = e.currentTarget.files;
        this.fileName = file.name;
        file2base64(file, b64 => {
            this.product.image = b64;
        });
    }



    onSubmit(e, form) {
        if (form.invalid) return;
        this.productService.addProduct(this.product).subscribe(() => {
          this.router.navigate(['']);
        });
        
    }



    ngOnInit() {
        this.getProduct();
    }


    log(e) {
        console.log(e);
    }

    onFormChange(e) {
        console.log();
    }

}
