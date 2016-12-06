import { Component } from '@angular/core';
import { JsonPService } from './services/app.jsonp.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public constructor(private _jsonpService: JsonPService) {}
}
