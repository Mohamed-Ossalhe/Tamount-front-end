import { Component, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { Store } from '@ngrx/store';
import { selectProfileState } from '@states/profile/profile.reducer';
import { ProfileState } from '@interfaces/profile-state';
import { IconComponent } from '@components/icon/icon.component';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'tamount-user-info',
	standalone: true,
	imports: [ButtonModule, ImageModule, AvatarModule, IconComponent, RouterLink],
	templateUrl: './user-info.component.html',
	styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {
	profile: Signal<ProfileState> = this.store.selectSignal(selectProfileState);

	constructor(private store: Store) {}
}
