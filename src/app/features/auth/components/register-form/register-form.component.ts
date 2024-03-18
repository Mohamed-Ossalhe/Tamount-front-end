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
				disabled: true,
			},
			{
				label: 'Name',
				routerLink: 'name',
				disabled: true,
			},
			{
				label: 'Birth Year',
				routerLink: 'birthyear',
				disabled: true,
			},
			{
				label: 'Gender',
				routerLink: 'gender',
				disabled: true,
			},
			{
				label: 'Password',
				routerLink: 'password',
				disabled: true,
			},
			{
				label: 'Phone',
				routerLink: 'phone',
				disabled: true,
			},
		];
	}
}
