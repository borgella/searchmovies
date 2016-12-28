import { Component } from '@angular/core';
import { Auth0Service } from '../../services/app.auth0.services';

@Component({
    selector: 'app-popular',
    templateUrl: 'popular.component.html',
    styleUrls: ['popular.component.css']
})
export class PopularMoviesComponent {

    public constructor(private auth0: Auth0Service) { }

}
