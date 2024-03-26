import { LocationModel } from '@models/LocationModel';

export interface SearchRequest {
	departure: LocationModel;
	arrival: LocationModel;
	departureTime: Date;
	seats: number;
}
