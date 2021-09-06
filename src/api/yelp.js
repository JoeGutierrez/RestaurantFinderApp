import axios from 'axios';

export default axios.create( {
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer 0VtRnl-_LMW9oaR-V70kG1ZluYCCN7Dyc0r2krblp6PS3gsFHeuI67QpoocCCss1T6EWZc5gK_XOiThz2cegiP1UW7YlbUBDpwl4jQbp-ulm6livqlgy5Ai7lBUvYXYx'
	}
} );
