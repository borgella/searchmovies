import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonPService {

    api_key: string;

    public constructor(private _jsonp: Jsonp) {
        this.api_key = 'f4d3ed51e5f0e3ec6d93c4d735e9d599';
    }

    public getThePopularMovies() {
        // tslint:disable-next-line:max-line-length
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.api_key)
                .map((res) => res.json() || {} );
    }
}