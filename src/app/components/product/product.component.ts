import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, TYPES } from '../../services/product/product.service';
import { IProduct } from '../../models/product.interface';
import { file2base64 } from '../../services/utils';
import { takeUntil, flatMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
    destroy$: Subject<boolean> = new Subject<boolean>();
    product: IProduct;
    file: File;
    fileName = null;

    categories: string[] = [TYPES.SMART, TYPES.WATCH, TYPES.TRACKER];
    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    getProduct(): void {
        this.route.params
            .pipe(
                flatMap((params) => {
                    let id = params['id'],
                        srv = this.productService;
                    return id ? srv.getProduct(id) : srv.getNewProduct();
                }),
                takeUntil(this.destroy$)
            ).subscribe(product => this.product = product);
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
        this.productService.updateProduct(this.product)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.router.navigate(['']);
            });
    }

    ngOnInit() {
        this.getProduct();
    }


    log(e) {
        console.log(e);
    }

}
