import { Component } from '@angular/core';

import { ListComponent } from "./list/list.component";

@Component({
  selector: 'app-root',
  entryComponents: [ ListComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
