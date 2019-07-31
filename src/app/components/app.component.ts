import { Component } from '@angular/core';

import { ListComponent } from "./list/list.component";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IProduct } from '../models/product.interface';

@Component({
  selector: 'app-root',
  entryComponents: [ ListComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading$:  Observable<boolean> = this.store.select('productsStore').pipe(
    map( ({loading}) => loading),   
  );
  constructor(private store: Store<{ products: IProduct[] }> ){
    
  }
  
}
