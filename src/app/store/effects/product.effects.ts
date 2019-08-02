import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductActionTypes, ProductActions, LoadListSuccess, CreateSuccess, Delete, DeleteSuccess, Get, GetSuccess, GetNew, GetNewSuccess, Update, UpdateSuccess, Create } from '../actions/product.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductService } from '../../services/product/product.service'
import { IProduct } from 'src/app/models/product.interface';
@Injectable()
export class ProductEffects {
  @Effect() load$/* : Observable<LoadListSuccess> */ = this.actions$
    .pipe(
      ofType(ProductActionTypes.LoadList),
      mergeMap(() => this.productService.getProducts().pipe(
        map(products => new LoadListSuccess(products))
      ),
        // catchError(() => EMPTY)
      )
    );
  @Effect() delete$: Observable<DeleteSuccess> = this.actions$
    .pipe(
      ofType(ProductActionTypes.Delete),
      mergeMap((action: Delete) => this.productService.removeProduct(action.payload).pipe(
        map((product: IProduct) => new DeleteSuccess(product))
      )
      )
    );
  @Effect() create$: Observable<CreateSuccess> = this.actions$
    .pipe(
      ofType(ProductActionTypes.Create),
      mergeMap((action: Create) => this.productService.addProduct(action.payload).pipe(
        map((product: IProduct) => new CreateSuccess(product))
      )
      )
    );

  @Effect() get$: Observable<GetSuccess> = this.actions$
    .pipe(
      ofType(ProductActionTypes.Get),
      mergeMap((action: Get) => this.productService.getProduct(action.payload).pipe(
        map((product: IProduct) => new GetSuccess(product))
      )
      )
    );

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