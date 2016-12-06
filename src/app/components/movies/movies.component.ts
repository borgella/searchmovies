import { Component } from '@angular/core';
import { JsonPService } from '../../services/app.jsonp.services';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

    public constructor(private _jsonpService: JsonPService) {
        this._jsonpService.getThePopularMovies()
            .subscribe((movies) => {
                console.log(movies);
            });
    }
}