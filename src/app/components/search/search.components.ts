import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JsonPService } from '../../services/app.jsonp.services';

@Component({
    selector: 'app-search',
    templateUrl: 'search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchControl: FormControl;
    searchResults: Array<Object>;
    public constructor(protected _jsonpService: JsonPService) {
        this.searchControl = new FormControl();
        this.searchResults = new Array<Object>();
    }

    public ngOnInit() {
        this.searchControl.valueChanges.subscribe((title) => {
            this._jsonpService.fetchMovies(title)
                .subscribe((response) => {
                    this.searchResults = response.results;
                    console.log(this.searchResults);
                }, (error) => console.log(' taking care of the search value error later'));
        });
    }
}