import { Component } from '@angular/core';
import { Auth0Service } from '../../services/app.auth0.services';

@Component({
    selector: 'app-intheaters',
    templateUrl: 'intheaters.component.html',
    styleUrls: ['intheaters.component.css']
})
export class InTheatersComponent {

    public constructor(private auth0: Auth0Service) { }

}
