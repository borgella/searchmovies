import { Component, OnInit } from '@angular/core';
import { JsonPService } from '../../services/app.jsonp.services';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

    moviesList: Array<Object>;
    searchControl = new FormControl();

    public constructor(private _jsonpService: JsonPService) { }

    public ngOnInit() {
        this._jsonpService.getThePopularMovies()
            .subscribe((response) => {
                this.moviesList = response.results;
                console.log(this.moviesList);
            });

        this.searchControl.valueChanges.subscribe( (title) => {
            this._jsonpService.fetchMovies(title).subscribe( (response) => {
                console.log('This movie is: ' + response.results);
            } );
        });
    }
}