import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RidePageActions } from '@states/ride/actions/ride.page.actions';

type ComfortType = {
	value: boolean;
	label: string;
	sign: string;
};

@Component({
	selector: 'tamount-comfort-form',
	standalone: true,
	imports: [ButtonModule, FormsModule, InputTextModule, ReactiveFormsModule],
	templateUrl: './comfort-form.component.html',
	styleUrl: './comfort-form.component.scss',
})
export class ComfortFormComponent implements OnInit {
	message!: string;
	loading!: boolean;

	options!: ComfortType[];

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit(): void {
		this.options = [
			{
				label: 'Yes, Sure!',
				value: true,
				sign: 'comfort',
			},
			{
				label: "No, I'll squeeze in 3",
				value: false,
				sign: 'not_comfort',
			},
		];
		this.loading = false;
	}

	chooseOption(event: Event) {
		if (event !== null) {
			const optionBtn: HTMLButtonElement =
				event.currentTarget as HTMLButtonElement;
			const comfort: boolean = optionBtn.id as unknown as boolean;
			this.store.dispatch(RidePageActions.enterComfort({ comfort }));
			this.router.navigateByUrl('profile/ride/add/seats');
		}
	}
}
