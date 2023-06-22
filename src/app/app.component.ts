import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Join-App';

  constructor(private _router: Router) {
    console.log('Navigating to Board in 5 seconds...');
    setTimeout(() => {
      this.navigateToCredentials();
    }, 5000);
  }


  navigateToBoard() {
    console.log('Now redirecting to board :)');
    this._router.navigateByUrl('/board');
  }


  navigateToSummary() {
    console.log('Now redirecting to board :)');
    this._router.navigateByUrl('/summary');
  }


  navigateToContacts() {
    console.log('Now redirecting to board :)');
    this._router.navigateByUrl('/contacts');
  }


  navigateToCredentials() {
    console.log('Now redirecting to board :)');
    this._router.navigateByUrl('/credentials');
  }
}
