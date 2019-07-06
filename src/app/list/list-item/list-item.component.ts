import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product/product.interface'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent /* implements OnInit */ {
  @Input() item: Product
  /* constructor( item: Product ) { 
    this.item = item;
  } */
/* 
  ngOnInit() {
  }
 */
}
