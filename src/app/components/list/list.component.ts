import { Component, OnInit, Input, Optional, OnDestroy } from '@angular/core';

// import { ListItemComponent } from "./list-item/list-item.component";
import { IProduct } from '../../models/product.interface';
import { ProductService } from '../../services/product/product.service';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap, takeUntil } from 'rxjs/operators';

// import { FilterPipe } from '../../pipes/filterBy/filterBy.pipe';

@Component({
    selector: 'app-list',
    // entryComponents: [ ListItemComponent ],
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    // viewProviders: [ FilterPipe ]
    // declarations: [ FilterPipe ]
})



export class ListComponent implements OnInit, OnDestroy {
    destroy$: Subject<boolean> = new Subject<boolean>()
    isloading: boolean = false;
    products$: Observable<IProduct[]>;
    search: string;
    get searchString() { return this.search }
    constructor(private productsService: ProductService) {

    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }

    getProducts(): void {
        this.products$ = of(null).pipe(
            tap(() => this.loading(true)),
            switchMap(() => this.productsService.getProducts()),
            tap(() => this.loading(false)),
            takeUntil(this.destroy$)
        );
    }

    removeProduct(product: IProduct) {
        return this.productsService.removeProduct(product).subscribe(() => this.getProducts());
    }

    loading(status) {
        this.isloading = status;
    }

    ngOnInit() {
        this.getProducts();
    }

}
