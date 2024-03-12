import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { SearchFilterCardComponent } from '@features/home/components/search-filter-card/search-filter-card.component';

@Component({
	selector: 'tamount-hero',
	standalone: true,
	imports: [
		ImageModule,
		CardModule,
		AutoCompleteModule,
		FormsModule,
		CalendarModule,
		InputNumberModule,
		SearchFilterCardComponent,
	],
	templateUrl: './hero.component.html',
	styleUrl: './hero.component.scss',
})
export class HeroComponent {
	svgElement: string = 'assets/svg/Order-ride.svg';
}
