import { BookingState } from '@interfaces/booking-state';
import { createFeature, createReducer, on } from '@ngrx/store';
import { BookingPageActions } from '@states/booking/actions/booking.page.actions';
import { BookingApiActions } from '@states/booking/actions/booking.api.actions';

const initialState: BookingState = {
	bookingCollection: [],
	booking: undefined,
	loading: false,
	errors: undefined,
};

const BookingFeatureKey: string = 'Booking';

export const bookingFeature = createFeature({
	name: BookingFeatureKey,
	reducer: createReducer(
		initialState,
		on(
			BookingPageActions.createBooking,
			BookingPageActions.loadUserBookings,
			(state) => ({
				...state,
				loading: true,
			})
		),
		on(BookingApiActions.bookingCreatedSuccess, (state, action) => ({
			...state,
			bookingCollection: [...state.bookingCollection, action.booking],
			loading: false,
		})),
		on(BookingApiActions.loadBookingSuccess, (state, action) => ({
			...state,
			bookingCollection: action.bookings,
			loading: false,
		})),
		on(
			BookingApiActions.bookingCreatedFailure,
			BookingApiActions.loadBookingFailure,
			(state, action) => ({
				...state,
				errors: action.errors,
				loading: false,
			})
		)
	),
});

export const {
	name: bookingFeatureKey,
	reducer: bookingFeatureReducer,
	selectBookingCollection,
	selectBooking,
	selectErrors,
	selectLoading,
} = bookingFeature;
