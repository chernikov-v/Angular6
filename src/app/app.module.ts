import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ProductComponent } from './product/product.component';
import { MyRouteRoutes } from './my-route.routing';

@NgModule({
   declarations: [
      AppComponent,
      ListComponent,
      ListItemComponent,
      ProductComponent
   ],
   imports: [
      BrowserModule,
      MyRouteRoutes
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
