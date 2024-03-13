import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'tamount-register-form',
	standalone: true,
	imports: [
		ButtonModule,
		InputTextModule,
		PasswordModule,
		ReactiveFormsModule,
		StepsModule,
	],
	templateUrl: './register-form.component.html',
	styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent implements OnInit {
	steps!: MenuItem[];

	ngOnInit() {
		this.steps = [
			{
				label: 'Email',
				routerLink: 'email',
			},
			{
				label: 'Name',
				routerLink: 'name',
			},
			{
				label: 'Birth Year',
				routerLink: 'birthyear',
			},
			{
				label: 'Gender',
				routerLink: 'gender',
			},
			{
				label: 'Password',
				routerLink: 'password',
			},
			{
				label: 'Phone',
				routerLink: 'phone',
			},
		];
	}
}
