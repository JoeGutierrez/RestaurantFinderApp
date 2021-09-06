import axios from 'axios';
import { yelpAPIKey } from './APIKeys';

export default axios.create( {
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer ' + yelpAPIKey
	}
} );
