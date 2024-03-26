import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AuthenticationPageActions } from '@states/authentication/actions/authentication.page.actions';

@Component({
	selector: 'tamount-logout',
	standalone: true,
	imports: [],
	templateUrl: './logout.component.html',
	styleUrl: './logout.component.scss',
})
export class LogoutComponent {
	constructor(
		private store: Store,
		private router: Router
	) {
		this.store.dispatch(AuthenticationPageActions.logout());
		this.router.navigateByUrl('/');
	}
}
