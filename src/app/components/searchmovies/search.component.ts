import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-searchmovies',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css']
})
export class SearchMoviesComponent {

    @Input() childrenSearchResults: Array<Object>;
    @Output() childMovieId = new EventEmitter<number>();

    public viewMore(movieId: number) {
        this.childMovieId.emit(movieId);
    }

 }
