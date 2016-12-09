import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JsonPService } from '../../services/app.jsonp.services';
import { Auth0Service } from '../../services/app.auth0.services';

@Component({
    selector: 'app-connexion',
    templateUrl: './navbar.component.html',
    styleUrls: ['/navbar.component.css']
})
export class NavbarComponent implements OnInit {
    searchControl: FormControl;
    searchResults: Array<Object>;

    public constructor(private _jsonpService: JsonPService, private auth0: Auth0Service) {
        this.searchControl = new FormControl();
        this.searchResults = new Array<Object>();
    }

    public ngOnInit() {
        this.searchControl.valueChanges.subscribe((title) => {
            this._jsonpService.fetchMovies(title)
                .subscribe((response) => {
                    this.searchResults = response.results;
                }, (error) => this.searchResults = []);
        });
    }
}
