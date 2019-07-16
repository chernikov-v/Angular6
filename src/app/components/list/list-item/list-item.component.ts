import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../../models/product.interface'

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})

export class ListItemComponent implements OnInit {
    @Input() product: IProduct;
    @Output() onRemove = new EventEmitter<{ event: Event, product: IProduct }>();

    constructor() {
    }

    removeHandler(e) {
        this.onRemove.emit({
            event: e,
            product: this.product
        });

    }

    ngOnInit() {
    }

}
