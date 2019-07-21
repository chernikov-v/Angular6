import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../models/product.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent implements OnInit {
  @Input() item: IProduct
  constructor( item: IProduct ) { 
    this.item = item;
  }

  ngOnInit() {
  }

}
