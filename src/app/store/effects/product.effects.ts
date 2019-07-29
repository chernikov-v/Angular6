import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductActionTypes } from '../actions/product.actions';

@Injectable()
export class productEffects {
    @Effect() create$: Observable<Action> = this.actions$
                        .pipe(
                            ofType(ProductActionTypes.Create),
                            // map
                        );

    constructor(
        private actions$: Actions
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