import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppModuleRoutes } from './app.module.routes';

import { JsonPService } from './services/app.jsonp.services';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ProfilComponent } from './components/profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ConnexionComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    AppModuleRoutes
  ],
  providers: [JsonPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
