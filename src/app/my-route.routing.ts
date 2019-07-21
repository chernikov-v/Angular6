import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [

  { path: '', component: ListComponent },
  { path: 'product/create', component: ProductComponent },
  { path: 'product/:id', component: ProductComponent },

];

export const MyRouteRoutes = RouterModule.forRoot(routes);
