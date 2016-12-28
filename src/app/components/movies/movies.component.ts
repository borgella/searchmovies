import { Component, OnInit, Input } from '@angular/core';
import { JsonPService } from '../../services/app.jsonp.services';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css'],
})

export class MoviesComponent implements OnInit {

    private in_theathers: Array<Object>;
    private movie: Object;
    private isClose: boolean;
    @Input() parentSearchResults: Array<Object>;

    public constructor(protected _jsonpService: JsonPService) {
        this.isClose = false;
    }

    public ngOnInit() {
        this._jsonpService.getInTheathersNow()
            .subscribe((response) => {
                this.in_theathers = response.results;
            }, (error) => console.log('taking care of get in theathers movies error later'));
    }

    public viewMore(movieId: number) {
        this._jsonpService.getMovie(movieId)
            .subscribe((response) => {
                this.movie = response;
                this.isClose = true;
            }, (error) => console.log('taking care of get in theathers movies error later'));
    }

    public viewMoreParent(movieId: number) {
        this._jsonpService.getMovie(movieId)
            .subscribe((response) => {
                this.movie = response;
                this.isClose = true;
            }, (error) => console.log('taking care of get in theathers movies error later'));
    }

    public closeDetail() {
        this.isClose = false;
    }
}

