import { Component, OnInit, Input, Optional } from '@angular/core';

// import { ListItemComponent } from "./list-item/list-item.component";
import { Product } from '../product/product.interface';

@Component({
  selector: 'app-list',
  // entryComponents: [ ListItemComponent ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})



export class ListComponent /* implements OnInit  */{
  @Input() items: Product[] = [{
    id: 1,
    name: 'First Item',
    description: 'First Description'
  }, {
    id: 2,
    name: 'Second Item',
    description: 'Second Description'
  }, {
    id: 3,
    name: 'Third Item',
    description: 'Third Description'
  }]
  // public items: Product[]
  constructor(/* @Optional() public items: Product[] */) {
    // this.items = items;
    // debugger;
   }
/* 
  ngOnInit() {
  } */

}
