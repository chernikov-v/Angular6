import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: number;
  constructor(
    private route: ActivatedRoute/* ,
    private router: Router */) { 
      this.route.params.subscribe(params => {      
        this.id = +params['id']; 
     });
  }

  ngOnInit() {
  }

}
