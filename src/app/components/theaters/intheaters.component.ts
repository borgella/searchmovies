import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JsonPService } from '../../services/app.jsonp.services';

@Component({
    selector: 'app-intheater',
    templateUrl: 'intheaters.component.html',
    styleUrls: ['intheaters.component.css']
})
export class InTheatersComponent implements OnInit {

    private in_theathers: Array<Object>;
    @Output() childTheaterMovieId = new EventEmitter<number>();

    public constructor(private _jsonp: JsonPService) { }

    public ngOnInit() {
        this._jsonp.getInTheathersNow()
            .subscribe((response) => {
                this.in_theathers = response.results;
            }, (error) => console.log(error));
    }

    public theathersViewMore(movieId: number) {
        this.childTheaterMovieId.emit(movieId);
    }
}
