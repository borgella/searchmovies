import { Component, OnInit } from '@angular/core';
import { JsonPService } from '../../services/app.jsonp.services';
import { SearchComponent } from '../search/search.components';


@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

    moviesList: any;
    in_theathers: any;

    public constructor(protected _jsonpService: JsonPService) {
    }

    public ngOnInit() {
        this._jsonpService.getThePopularMovies()
            .subscribe((response) => {
                this.moviesList = response.results;
            }, (error) => console.log('taking care of the get popular movies error later'));

        this._jsonpService.getInTheathersNow()
            .subscribe((response) => {
                this.in_theathers = response.results;
            }, (error) => console.log('taking care of get in theathers movies error later'));
    }
}