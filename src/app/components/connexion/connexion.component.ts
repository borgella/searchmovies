import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JsonPService } from '../../services/app.jsonp.services';

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['/connexion.component.css']
})
export class ConnexionComponent implements OnInit {
    searchControl: FormControl;
    searchResults: Array<Object>;

    public constructor(private _jsonpService: JsonPService) {
        this.searchControl = new FormControl();
        this.searchResults = new Array<Object>();
    }

    public ngOnInit() {
        this.searchControl.valueChanges.subscribe((title) => {
            this._jsonpService.fetchMovies(title)
                .subscribe((response) => {
                    this.searchResults = response.results;
                }, (error) => this.searchResults.length = 0);
        });
    }
}
