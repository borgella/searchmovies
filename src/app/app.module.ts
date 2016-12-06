import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { JsonPService } from './services/app.jsonp.services';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ConnexionComponent } from './components/connexion/connexion.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [JsonPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
