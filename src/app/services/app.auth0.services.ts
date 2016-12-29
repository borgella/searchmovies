import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth0Service {

  // Configure Auth0
  lock = new Auth0Lock('76GAhDWCwIGkyzQmThiUFPK5kG9snP0S', 'borgella.auth0.com', {});
  userProfile: Object;
  constructor() {
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.lock.getProfile(authResult.idToken, function(error: any, profile: Object){
        if (error) { return; }
        localStorage.setItem('profile', JSON.stringify(profile));
      });
    });
    this.userProfile = JSON.parse(localStorage.getItem('profile'));
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
