import { Component, OnInit, OnDestroy } from '@angular/core';

import { IProduct } from '../../models/product.interface';
import { ProductService } from '../../services/product/product.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { LoadList, Delete } from 'src/app/store/actions/product.actions';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
    // destroy$: Subject<boolean> = new Subject<boolean>()
   
    products$:  Observable<IProduct[]> = this.store.select('productsStore').pipe(
        map( state => state.products),   
    );
    search: string;
    get searchString() { return this.search }
    constructor(private productsService: ProductService, private store: Store<{ products: IProduct[] }>) {

    }

    ngOnDestroy() {
       /*  this.destroy$.next();
        this.destroy$.unsubscribe(); */
    }

    removeProduct(product: IProduct) {
        // return this.productsService.removeProduct(product);
        return this.store.dispatch(new Delete(product));
    }

    ngOnInit() {
        this.store.dispatch(new LoadList());
    }

}
