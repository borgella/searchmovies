import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { JsonPService } from './services/app.jsonp.services';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { SearchComponent } from './components/search/search.components';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ConnexionComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule
  ],
  providers: [JsonPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
