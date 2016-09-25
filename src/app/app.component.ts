import { Component } from '@angular/core';
import { LoginService } from './services/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
	title = 'app works!';

	constructor (private loginService: LoginService) {}

	login() {
		this.loginService.login("ferenc@po.po", "Szentendre_4")
			.subscribe((result) => {
				if (result) {

					//this.router.navigate(['']);
				}
		});                 
	}
}
