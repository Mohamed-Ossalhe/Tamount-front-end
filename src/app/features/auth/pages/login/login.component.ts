import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
	selector: 'tamount-login',
	standalone: true,
	imports: [RouterOutlet, RouterLink],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class LoginComponent {}
