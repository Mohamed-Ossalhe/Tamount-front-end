import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApprovalMode } from '@enums/approval-mode';
import { RidePageActions } from '@states/ride/actions/ride.page.actions';

type ApprovalModeType = {
	value: ApprovalMode;
	label: string;
};
@Component({
	selector: 'tamount-approval-form',
	standalone: true,
	imports: [ButtonModule, InputTextModule, PaginatorModule, ReactiveFormsModule],
	templateUrl: './approval-form.component.html',
	styleUrl: './approval-form.component.scss',
})
export class ApprovalFormComponent implements OnInit {
	message!: string;
	loading!: boolean;

	options!: ApprovalModeType[];

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit(): void {
		this.options = [
			{
				label: 'Enable Instant Booking',
				value: ApprovalMode.INSTANT,
			},
			{
				label: 'Review every request before it expires',
				value: ApprovalMode.MANUAL,
			},
		];
		this.loading = false;
	}

	chooseOption(event: Event) {
		if (event !== null) {
			const optionBtn: HTMLButtonElement =
				event.currentTarget as HTMLButtonElement;
			const approval: ApprovalMode = optionBtn.id as unknown as ApprovalMode;
			this.store.dispatch(RidePageActions.enterApproval({ approval }));
			this.router.navigateByUrl('profile/ride/add/price');
		}
	}
}
