import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { GenderType } from '@shared/types/gender.type';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RegistrationPageActions } from '@states/registration/actions/registration.page.actions';
import { Gender } from '@enums/gender';

@Component({
	selector: 'tamount-register-gender',
	standalone: true,
	imports: [ButtonModule, InputTextModule, ReactiveFormsModule],
	templateUrl: './register-gender.component.html',
	styleUrl: './register-gender.component.scss',
})
export class RegisterGenderComponent implements OnInit {
	genders!: GenderType[];
	gender!: Gender;
	errors!: ValidationErrors | null;
	loading!: boolean;
	genderErrorsMessage: string = '';

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit() {
		this.genders = [
			{
				label: 'Ms, Mrs.',
				value: Gender.FEMALE,
			},
			{
				label: 'Mr.',
				value: Gender.MALE,
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
				this.gender = genderBtn.id as Gender;
				this.router.navigateByUrl('authentication/register/info/password');
				this.store.dispatch(
					RegistrationPageActions.enterGender({ gender: this.gender })
				);
			}
		} else {
			this.loading = false;
			if (this.errors !== null) {
				this.genderErrorsMessage = 'gender is required';
			}
		}
	}
}
