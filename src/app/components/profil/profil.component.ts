import { Component } from '@angular/core';
import { Auth0Service } from '../../services/app.auth0.services';
@Component({
    selector: 'app-profil',
    templateUrl: './profil.component.html',
    styleUrls: ['./profil.component.css', 'font-awesome.min.css']
})
export class ProfilComponent {
    public constructor(private auth0: Auth0Service) {}
}
