import { Component } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';

  public gridData: any[] = products;
onButtonClick() {
  this.title = 'Hello from kendo UI';
}
}
