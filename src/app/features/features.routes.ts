import { Routes } from '@angular/router';
import { authenticationGuard } from '@guards/authentication/authentication.guard';

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
		canActivate: [authenticationGuard],
	},
	{
		path: 'account',
		loadComponent: () =>
			import(
				'@features/client/pages/account-settings/account-settings.component'
			).then((c) => c.AccountSettingsComponent),
		canActivate: [authenticationGuard],
	},
	// vehicle process alone in own file
	{
		path: 'vehicle/add',
		loadComponent: () =>
			import(
				'@features/client/components/add-vehicle-form-prcess/vehicle-form/vehicle-form.component'
			).then((c) => c.VehicleFormComponent),
		canActivate: [authenticationGuard],
		canActivateChild: [authenticationGuard],
		children: [
			{
				path: '',
				redirectTo: 'licence-plate',
				pathMatch: 'full',
			},
			{
				path: 'licence-plate',
				loadComponent: () =>
					import(
						'@features/client/components/add-vehicle-form-prcess/vehicle-licence-plate-form/vehicle-licence-plate-form.component'
					).then((c) => c.VehicleLicencePlateFormComponent),
			},
			{
				path: 'brand',
				loadComponent: () =>
					import(
						'@features/client/components/add-vehicle-form-prcess/vehicle-brand/vehicle-brand.component'
					).then((c) => c.VehicleBrandComponent),
			},
			{
				path: 'model',
				loadComponent: () =>
					import(
						'@features/client/components/add-vehicle-form-prcess/vehicle-model/vehicle-model.component'
					).then((c) => c.VehicleModelComponent),
			},
			{
				path: 'type',
				loadComponent: () =>
					import(
						'@features/client/components/add-vehicle-form-prcess/vehicle-type/vehicle-type.component'
					).then((c) => c.VehicleTypeComponent),
			},
			{
				path: 'color',
				loadComponent: () =>
					import(
						'@features/client/components/add-vehicle-form-prcess/vehicle-color/vehicle-color.component'
					).then((c) => c.VehicleColorComponent),
			},
			{
				path: 'registration-year',
				loadComponent: () =>
					import(
						'@features/client/components/add-vehicle-form-prcess/vehicle-registration-year/vehicle-registration-year.component'
					).then((c) => c.VehicleRegistrationYearComponent),
			},
		],
	},
	// ride routes in own file
	{
		path: 'ride/add',
		loadComponent: () =>
			import(
				'@features/client/components/publish-ride-form-process/ride-form/ride-form.component'
			).then((c) => c.RideFormComponent),
		canActivate: [authenticationGuard],
		canActivateChild: [authenticationGuard],
		children: [
			{
				path: '',
				redirectTo: 'departure',
				pathMatch: 'full',
			},
			{
				path: 'departure',
				loadComponent: () =>
					import(
						'@features/client/components/publish-ride-form-process/departure-form/departure-form.component'
					).then((c) => c.DepartureFormComponent),
			},
			{
				path: 'arrival',
				loadComponent: () =>
					import(
						'@features/client/components/publish-ride-form-process/arrival-form/arrival-form.component'
					).then((c) => c.ArrivalFormComponent),
			},
			{
				path: 'departure-time',
				loadComponent: () =>
					import(
						'@features/client/components/publish-ride-form-process/departure-time-form/departure-time-form.component'
					).then((c) => c.DepartureTimeFormComponent),
			},
			{
				path: 'car',
				loadComponent: () =>
					import(
						'@features/client/components/publish-ride-form-process/car-form/car-form.component'
					).then((c) => c.CarFormComponent),
			},
			{
				path: 'comfort',
				loadComponent: () =>
					import(
						'@features/client/components/publish-ride-form-process/comfort-form/comfort-form.component'
					).then((c) => c.ComfortFormComponent),
			},
			{
				path: 'seats',
				loadComponent: () =>
					import(
						'@features/client/components/publish-ride-form-process/seats-form/seats-form.component'
					).then((c) => c.SeatsFormComponent),
			},
			{
				path: 'approval',
				loadComponent: () =>
					import(
						'@features/client/components/publish-ride-form-process/approval-form/approval-form.component'
					).then((c) => c.ApprovalFormComponent),
			},
			{
				path: 'price',
				loadComponent: () =>
					import(
						'@features/client/components/publish-ride-form-process/price-form/price-form.component'
					).then((c) => c.PriceFormComponent),
			},
		],
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
		canActivate: [authenticationGuard],
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
		canActivate: [authenticationGuard],
	},
	{
		path: 'payment-methods',
		loadComponent: () =>
			import(
				'@features/home/pages/payment-methods/payment-methods.component'
			).then((c) => c.PaymentMethodsComponent),
		canActivate: [authenticationGuard],
	},
	{
		path: 'card-checkout',
		loadComponent: () =>
			import(
				'@features/home/components/stripe-checkout/stripe-checkout.component'
			).then((c) => c.StripeCheckoutComponent),
		canActivate: [authenticationGuard],
	},
	// TODO: this should be in another file ex: client routes separated ⬇️
	{
		path: 'profile',
		loadComponent: () =>
			import('@features/client/pages/profile/profile.component').then(
				(c) => c.ProfileComponent
			),
		children: clientRoutes,
		canActivate: [authenticationGuard],
	},
	{
		path: 'rides',
		loadComponent: () =>
			import('@features/client/pages/rides/rides.component').then(
				(c) => c.RidesComponent
			),
		canActivate: [authenticationGuard],
	},
	{
		path: 'my-bookings',
		loadComponent: () =>
			import('@features/client/pages/bookings/bookings.component').then(
				(c) => c.BookingsComponent
			),
		canActivate: [authenticationGuard],
	},
	// TODO: this error routes should be in their own routes file
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
