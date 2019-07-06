import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

  { path: '', component: ListComponent },
  { path: 'product/:id', component: ProductComponent },

];

export const MyRouteRoutes = RouterModule.forRoot(routes);
