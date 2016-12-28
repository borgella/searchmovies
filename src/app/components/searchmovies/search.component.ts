import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-searchmovies',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css']
})
export class SearchMoviesComponent {

    @Input() childSearchResults: Array<Object>;
    @Output() childSearchMovieId = new EventEmitter<number>();

    public searchViewMore(movieId: number) {
        this.childSearchMovieId.emit(movieId);
    }

 }
