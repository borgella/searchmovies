import { Component, OnInit, Input } from '@angular/core';
import { JsonPService } from '../../services/app.jsonp.services';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css'],
})

export class MoviesComponent implements OnInit {

    moviesList: Array<Object>;
    in_theathers: Array<Object>;
    movie: Object;
    isValue: boolean;
    @Input() parentSearchResults: Array<Object>;

    public constructor(protected _jsonpService: JsonPService) {
        this.isValue = false;
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

    public viewMore(idMovie) {
        this._jsonpService.getMovie(idMovie)
            .subscribe((response) => {
                this.movie = response;
                this.isValue = true;
            }, (error) => console.log('taking care of get in theathers movies error later'));
    }

    public closeDetail() {
        this.isValue = false;
    }
}

