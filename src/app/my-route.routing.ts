import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { ProductComponent } from './components/product/product.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [

  { path: '', pathMatch: 'prefix', component: ListComponent },
  { path: 'product/create', pathMatch: 'prefix', component: ProductComponent },
  { path: 'product/:id', pathMatch: 'prefix', component: ProductComponent },
  { path: '**', pathMatch: 'prefix', component: PageNotFoundComponent }

];

export const MyRouteRoutes = RouterModule.forRoot(routes, {/*  useHash:true  */});
