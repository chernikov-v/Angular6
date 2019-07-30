import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { ProductComponent } from './components/product/product.component';
import { MyRouteRoutes } from './my-route.routing';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import { IndexedDBModule } from "ng-indexed-db";
import { FilterByPipe } from './pipes/filterBy/filterBy.pipe';
import { OrderByPipe } from './pipes/orderBy/orderBy.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendProvider } from './services/interceptor/interceptor.service'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/reducers/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { productEffects } from './store/effects/product.effects';
// import {}

// import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './store/reducers';
// import { EffectsModule } from '@ngrx/effects';
// import { AppEffects } from './store/effects/app.effects';

@NgModule({
   declarations: [
      AppComponent,
      ListComponent,
      ListItemComponent,
      ProductComponent,
      PageNotFoundComponent,
      FilterByPipe,
      OrderByPipe
   ],
   imports: [
      BrowserModule,
      MyRouteRoutes,
      FormsModule,
      MomentModule,
      IndexedDBModule.forRoot([
        {
          name: 'ProductsDB',
          stores: [{ name: 'products' }]
        }
      ]),
      HttpClientModule,
      StoreModule.forRoot({ products: productReducer }),
      EffectsModule.forRoot([productEffects])
   ],
   providers: [BackendProvider],
   bootstrap: [
      AppComponent
   ],

})
export class AppModule { }
