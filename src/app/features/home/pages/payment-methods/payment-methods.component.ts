import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconComponent } from '@components/icon/icon.component';
import { SharedModule } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';

interface PaymentMethodType {
	value: string;
	label: string;
	icon: string;
}

@Component({
	selector: 'tamount-payment-methods',
	standalone: true,
	imports: [ButtonModule, IconComponent, SharedModule, RadioButtonModule],
	templateUrl: './payment-methods.component.html',
	styleUrl: './payment-methods.component.scss',
})
export class PaymentMethodsComponent implements OnInit {
	paymentMethods!: PaymentMethodType[];
	method!: string;
	errorMessage!: string;
	ngOnInit(): void {
		this.paymentMethods = [
			{
				value: 'google-pay',
				label: 'Google Pay',
				icon: 'google',
			},
			{
				value: 'credit-card',
				label: 'Bank',
				icon: 'credit-card',
			},
			{
				value: 'paypal',
				label: 'Paypal',
				icon: 'paypal',
			},
			{
				value: 'cash',
				label: 'Cash',
				icon: 'money-bill',
			},
		];
	}

	selectMethod(e: Event): void {
		if (e !== null) {
			const methodBtn: HTMLButtonElement = e.currentTarget as HTMLButtonElement;
			if (methodBtn !== null) {
				this.method = methodBtn.id;
				console.log(this.method);
			}
		} else {
			this.errorMessage = 'payment method is required';
		}
	}

	submitPayment(): void {
		console.log('under construction...');
	}
}
