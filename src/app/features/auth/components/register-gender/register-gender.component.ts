import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { Gender } from '@shared/types/gender.type';
import { Router } from '@angular/router';

@Component({
	selector: 'tamount-register-gender',
	standalone: true,
	imports: [ButtonModule, InputTextModule, ReactiveFormsModule],
	templateUrl: './register-gender.component.html',
	styleUrl: './register-gender.component.scss',
})
export class RegisterGenderComponent implements OnInit {
	genders!: Gender[];
	gender!: string;
	errors!: ValidationErrors | null;
	loading!: boolean;

	constructor(private router: Router) {}

	ngOnInit() {
		this.genders = [
			{
				label: 'Ms, Mrs.',
				value: 'female',
			},
			{
				label: 'Mr.',
				value: 'male',
			},
		];
		this.errors = {};
		this.loading = false;
	}

	selectGender(e: Event) {
		this.loading = true;
		if (e !== null) {
			const genderBtn: HTMLButtonElement = e.currentTarget as HTMLButtonElement;
			if (genderBtn !== null) {
				this.loading = false;
				this.gender = genderBtn.id;
				this.router.navigateByUrl('authentication/register/info/password');
				// TODO: add gender to the state
			}
		} else {
			this.loading = false;
			if (this.errors !== null) {
				this.errors['gender'] = 'gender is required';
			}
		}
	}
}
