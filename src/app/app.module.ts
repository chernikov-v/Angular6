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
      ])
    //   StoreModule.forRoot(reducers, { metaReducers }),
    //   EffectsModule.forRoot([AppEffects])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],

})
export class AppModule { }
