import { Routes } from '@angular/router';

const clientRoutes: Routes = [
	{
		path: '',
		redirectTo: 'menu',
		pathMatch: 'full',
	},
	{
		path: 'menu',
		loadComponent: () =>
			import('@features/client/pages/user-info/user-info.component').then(
				(c) => c.UserInfoComponent
			),
	},
	{
		path: 'account',
		loadComponent: () =>
			import(
				'@features/client/pages/account-settings/account-settings.component'
			).then((c) => c.AccountSettingsComponent),
	},
];

export const featuresRoutes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('@features/home/pages/home/home.component').then(
				(c) => c.HomeComponent
			),
	},
	{
		path: 'search',
		loadComponent: () =>
			import('@features/home/pages/search-page/search-page.component').then(
				(c) => c.SearchPageComponent
			),
	},
	{
		path: 'authentication',
		loadChildren: () =>
			import('@features/auth/auth.routes').then((r) => r.authRoutes),
	},
	{
		path: 'publish-ride',
		loadComponent: () =>
			import('@features/home/pages/publish-ride/publish-ride.component').then(
				(c) => c.PublishRideComponent
			),
	},
	{
		path: 'ride-details',
		loadComponent: () =>
			import('@features/home/pages/ride-details/ride-details.component').then(
				(c) => c.RideDetailsComponent
			),
	},
	{
		path: 'booking-details',
		loadComponent: () =>
			import(
				'@features/home/pages/booking-request-details/booking-request-details.component'
			).then((c) => c.BookingRequestDetailsComponent),
	},
	// TODO: this should be in another file ex: client routes separated ⬇️
	{
		path: 'profile',
		loadComponent: () =>
			import('@features/client/pages/profile/profile.component').then(
				(c) => c.ProfileComponent
			),
		children: clientRoutes,
	},
	{
		path: 'unauthorized',
		loadComponent: () =>
			import('@features/errors/pages/unauthorized/unauthorized.component').then(
				(c) => c.UnauthorizedComponent
			),
	},
	{
		path: 'forbidden',
		loadComponent: () =>
			import('@features/errors/pages/forbidden/forbidden.component').then(
				(c) => c.ForbiddenComponent
			),
	},
	{
		path: 'something-went-wrong',
		loadComponent: () =>
			import('@features/errors/pages/server-error/server-error.component').then(
				(c) => c.ServerErrorComponent
			),
	},
	{
		path: 'too-many-requests',
		loadComponent: () =>
			import(
				'@features/errors/pages/too-many-requests/too-many-requests.component'
			).then((c) => c.TooManyRequestsComponent),
	},
	{
		path: 'under-construction',
		loadComponent: () =>
			import(
				'@features/errors/pages/under-construction/under-construction.component'
			).then((c) => c.UnderConstructionComponent),
	},
	{
		path: 'bad-request',
		loadComponent: () =>
			import('@features/errors/pages/bad-request/bad-request.component').then(
				(c) => c.BadRequestComponent
			),
	},
	{
		path: '**',
		loadComponent: () =>
			import('@features/errors/pages/not-found/not-found.component').then(
				(c) => c.NotFoundComponent
			),
	},
];
