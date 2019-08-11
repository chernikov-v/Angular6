import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, TYPES} from '../../models/product.interface';
import { file2base64 } from '../../services/utils';
import { takeUntil, map, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Store, ActionsSubject, } from '@ngrx/store';
import { GetNew, Get, Create, Update, ProductActionTypes } from 'src/app/store/actions/product.actions';

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
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<{ selected: IProduct }>,
        private actionsSubject: ActionsSubject) {

    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    ngOnInit() {
        this.getProduct();
    }

    getProduct(): void {
        let id = this.route.snapshot.paramMap.get('id');

        this.store.select('productsStore').pipe(
            map(state => state.selected),
            takeUntil(this.destroy$)
        ).subscribe(product => this.product = product);

        this.store.dispatch(id ? new Get(id) : new GetNew);
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
        let p = this.product,
            { UpdateSuccess: update_type, CreateSuccess: create_type } = ProductActionTypes;

        this.actionsSubject.pipe(
            filter(({ type: t }) => t === update_type || t === create_type),
            takeUntil(this.destroy$),
        ).subscribe(e => {
            this.router.navigate(['']);
        });

        this.store.dispatch(p.id ? new Update(p) : new Create(p))
    }

    log(...args) {
        // console.log(...args)
    }
}
