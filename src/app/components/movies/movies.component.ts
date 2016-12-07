import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JsonPService } from '../../services/app.jsonp.services';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

    moviesList: any;
    searchControl: FormControl;
    searchResults: any;

    public constructor(private _jsonpService: JsonPService) {
        this.searchControl = new FormControl();
    }

    public ngOnInit() {
        this._jsonpService.getThePopularMovies()
            .subscribe((response) => {
                this.moviesList = response.results;
                console.log(this.moviesList);
            }, (error) => console.log(' taking care of the get popular movies error later'));

        this.searchControl.valueChanges.subscribe( (title) => {
            this._jsonpService.fetchMovies(title).subscribe( (response) => {
                this.searchResults = response.results;
                console.log(this.searchResults);
            }, (error) => console.log(' taking care of the search value error later') );
        });
    }
}