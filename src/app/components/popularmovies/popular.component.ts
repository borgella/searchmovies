import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JsonPService } from '../../services/app.jsonp.services';

@Component({
    selector: 'app-popular',
    templateUrl: 'popular.component.html',
    styleUrls: ['popular.component.css']
})
export class PopularMoviesComponent implements OnInit {

    private moviesList: Array<Object>;
    @Output() childPopularMovieId = new EventEmitter<number>();

    public constructor(private _jsonpService: JsonPService) { }

    public ngOnInit() {
        this._jsonpService.getThePopularMovies()
            .subscribe((response) => {
                this.moviesList = response.results;
            }, (error) => console.log('taking care of the get popular movies error later'));
    }

    popularViewMore(movieId: number) {
        this.childPopularMovieId.emit(movieId);
    }

}
