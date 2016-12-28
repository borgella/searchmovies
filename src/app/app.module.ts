import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppModuleRoutes } from './app.module.routes';

import { JsonPService } from './services/app.jsonp.services';
import { Auth0Service } from './services/app.auth0.services';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ProfilComponent } from './components/profil/profil.component';
import { SearchMoviesComponent } from './components/searchmovies/search.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    ProfilComponent,
    SearchMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    AppModuleRoutes
  ],
  providers: [JsonPService, Auth0Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
