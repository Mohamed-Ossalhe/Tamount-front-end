import { Component, input, InputSignal } from '@angular/core';

@Component({
	selector: 'tamount-icon',
	standalone: true,
	imports: [],
	templateUrl: './icon.component.html',
	styleUrl: './icon.component.scss',
})
export class IconComponent {
	icon: InputSignal<string | undefined> = input<string>();
}
