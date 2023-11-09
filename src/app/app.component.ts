import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: SocialAuthService, private oauthservice: OAuthService) {
    this.configureSingleSignOn();
   }

  configureSingleSignOn(){
    this.oauthservice.configure(authConfig);
    this.oauthservice.tokenValidationHandler = new JwksValidationHandler();
    this.oauthservice.loadDiscoveryDocumentAndLogin();
  }

  login(){
    this.oauthservice.initImplicitFlow();

  }

  logout(){
    this.oauthservice.logOut();

  }

  get token(){
    let claims:any =this.oauthservice.getIdentityClaims();
    return claims ? claims : null;
  }

  title = 'User-Data-Management';
  user:any;
  loggedIn:any;


  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
    });
  }

}



