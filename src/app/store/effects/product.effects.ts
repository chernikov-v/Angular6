import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductActionTypes, ProductActions, CreateSuccess } from '../actions/product.actions';
import { map, mergeMap } from 'rxjs/operators';
import { ProductService } from '../../services/product/product.service'
@Injectable()
export class productEffects {
    @Effect() create$: Observable<CreateSuccess> = this.actions$
                        .pipe(
                            ofType(ProductActionTypes.Create),
                              mergeMap( data => this.productService.addProduct(data).pipe(
                                map( products => new CreateSuccess(products) )
                              )
                            )
                        );

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) {}
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