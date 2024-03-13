import { Component } from '@angular/core';
import { AuthMethodType } from '@shared/types/auth-method.type';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'tamount-login-methods',
	standalone: true,
	imports: [ButtonModule, DividerModule, RouterLink],
	templateUrl: './login-methods.component.html',
	styleUrl: './login-methods.component.scss',
})
export class LoginMethodsComponent {
	loginMethods: AuthMethodType[] = [
		{
			label: 'Continue with google',
			url: 'www.google.com',
			icon: 'pi pi-google',
		},
		{
			label: 'Continue with email',
			url: 'email',
			icon: 'pi pi-envelope',
		},
	];
}
