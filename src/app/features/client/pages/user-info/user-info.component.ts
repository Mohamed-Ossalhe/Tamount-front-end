import { Component, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { Store } from '@ngrx/store';
import { selectProfile } from '@states/profile/profile.reducer';
import { IconComponent } from '@components/icon/icon.component';
import { RouterLink } from '@angular/router';
import { User } from '@models/user';
import { selectCarCollection } from '@states/vehicle/vehicle.reducer';
import { Car } from '@models/car';
import { PreferenceStatus } from '@enums/preference-status';

@Component({
	selector: 'tamount-user-info',
	standalone: true,
	imports: [ButtonModule, ImageModule, AvatarModule, IconComponent, RouterLink],
	templateUrl: './user-info.component.html',
	styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {
	profile: Signal<User | undefined> = this.store.selectSignal(
		selectProfile
	) as Signal<User>;
	cars: Signal<Car[]> = this.store.selectSignal(selectCarCollection);
	constructor(private store: Store) {}

	protected readonly PreferenceStatus = PreferenceStatus;
}
