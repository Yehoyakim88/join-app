import { Component } from '@angular/core';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent {
  joinLogoLogin: string = "./assets/img/Capa 2_blue.png";
  joinLogoSignupForGotPass: string = "src/assets/img/Capa 2_small_white.png";

  constructor() {
    document.body.style.backgroundColor = "white";
    this.initLoginForm();
  }


  initLoginForm() {
    let loginFormContainer = document.getElementById('login-form-container') as HTMLElement;
  }

}
