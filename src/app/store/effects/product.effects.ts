import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductActionTypes, ProductActions, LoadListSuccess } from '../actions/product.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductService } from '../../services/product/product.service'
@Injectable()
export class ProductEffects {
    @Effect() load$/* : Observable<CreateSuccess>  */ = this.actions$
        .pipe(
            ofType(ProductActionTypes.LoadList),
            mergeMap(() => this.productService.getProducts().pipe(
                // map( products => {type: ProductActionTypes.LoadListSuccess, products } )
                map(products => {
                    // debugger;
                    // return products;
                    return new LoadListSuccess(products);

                    /* return {
                        type: ProductActionTypes.LoadListSuccess, products: products
                    } */
                })
            ),
                // catchError(() => EMPTY)
            )
        );
    /* @Effect() create$: Observable<CreateSuccess> = this.actions$
                        .pipe(
                            ofType(ProductActionTypes.Create),
                              mergeMap( data => this.productService.addProduct(data).pipe(
                                map( products => new CreateSuccess(products) )
                              )
                            )
                        ); */

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) { }
}

/* ffectName$ = createEffect(() => this.actions$.pipe(
    ofType(FeatureActions.action),
    operator(() =>
        apiSource.pipe(
            map(data => FeatureActions.actionSuccess({ data })),
            catchError(error => of(FeatureActions.actionFailure({ error }))))
        )
    )
); */