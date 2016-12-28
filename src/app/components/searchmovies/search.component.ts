import { Component } from '@angular/core';
import { Auth0Service } from '../../services/app.auth0.services';

@Component({
    selector: 'app-searchmovies',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css']
})
export class SearchMoviesComponent {

    public constructor(private auth0: Auth0Service) {}

 }
