import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;
declare var Auth0: any;

@Injectable()
export class Auth0Service {

  // Configure Auth0
  lock = new Auth0Lock('76GAhDWCwIGkyzQmThiUFPK5kG9snP0S', 'borgella.auth0.com', {});
  auth0 = new Auth0({
    domain: 'borgella.auth0.com',
    clientID: '76GAhDWCwIGkyzQmThiUFPK5kG9snP0S',
    callbackURL: 'https://borgella.github.io/searchmovies/',
    responseType: 'token'
  });

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      this.auth0.getUserInfo(authResult.idToken, function(error, profile){
        if (profile) {
          console.log(profile);
        }
      });
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  };

}
