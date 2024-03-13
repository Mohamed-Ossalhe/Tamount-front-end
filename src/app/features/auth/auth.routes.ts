import { Routes } from '@angular/router';

export const authRoutes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{
		path: 'login',
		loadComponent: () =>
			import('@features/auth/pages/login/login.component').then(
				(c) => c.LoginComponent
			),
		children: [
			{
				path: '',
				loadComponent: () =>
					import(
						'@features/auth/components/login-methods/login-methods.component'
					).then((c) => c.LoginMethodsComponent),
			},
			{
				path: 'email',
				loadComponent: () =>
					import('@features/auth/components/login-form/login-form.component').then(
						(c) => c.LoginFormComponent
					),
			},
		],
	},
	{
		path: 'register',
		loadComponent: () =>
			import('@features/auth/pages/register/register.component').then(
				(c) => c.RegisterComponent
			),
		children: [
			{
				path: '',
				loadComponent: () =>
					import(
						'@features/auth/components/register-methods/register-methods.component'
					).then((c) => c.RegisterMethodsComponent),
			},
			{
				path: 'info',
				loadComponent: () =>
					import(
						'@features/auth/components/register-form/register-form.component'
					).then((c) => c.RegisterFormComponent),
				children: [
					{
						path: '',
						redirectTo: 'email',
						pathMatch: 'full',
					},
					{
						path: 'email',
						loadComponent: () =>
							import(
								'@features/auth/components/register-email/register-email.component'
							).then((c) => c.RegisterEmailComponent),
					},
					{
						path: 'name',
						loadComponent: () =>
							import(
								'@features/auth/components/register-name/register-name.component'
							).then((c) => c.RegisterNameComponent),
					},
					{
						path: 'birthyear',
						loadComponent: () =>
							import(
								'@features/auth/components/register-birthyear/register-birthyear.component'
							).then((c) => c.RegisterBirthyearComponent),
					},
					{
						path: 'gender',
						loadComponent: () =>
							import(
								'@features/auth/components/register-gender/register-gender.component'
							).then((c) => c.RegisterGenderComponent),
					},
					{
						path: 'password',
						loadComponent: () =>
							import(
								'@features/auth/components/register-password/register-password.component'
							).then((c) => c.RegisterPasswordComponent),
					},
					{
						path: 'phone',
						loadComponent: () =>
							import(
								'@features/auth/components/register-phone-number/register-phone-number.component'
							).then((c) => c.RegisterPhoneNumberComponent),
					},
				],
			},
			{
				path: 'phone/verify',
				loadComponent: () =>
					import(
						'@features/auth/components/register-verify-phone-number/register-verify-phone-number.component'
					).then((c) => c.RegisterVerifyPhoneNumberComponent),
			},
		],
	},
];
