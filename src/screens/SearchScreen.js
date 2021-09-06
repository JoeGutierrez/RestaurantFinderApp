import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
	const [ term, setTerm ] = useState( '' ),
		[ results, setResults ] = useState( [] );

		const searchApi = async () => {
			const response = await yelp.get( '/search', {
				params: {
					limit: 50,
					term, // Same as term: term. This is known as "shorthand property names" or "object property value shorthand" (ES2015).
					location: 'san jose'
				}
			} );
			setResults( response.data.businesses );
		};

	return (
		<View>
			<SearchBar
				term={ term }
				onTermChange={ setTerm } // Same as ( newTerm ) => setTerm( newTerm )
				onTermSubmit={ searchApi } // Same as () => searchApi()
			/>
			<Text>Search Screen</Text>
			<Text>We have found { results.length } results</Text>
		</View>
	);
};

const styles = StyleSheet.create( {} );

export default SearchScreen;
