import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
	const [selectedBooks, setSelectedBooks] = useState([]);
	useEffect(() => {
		const localBooks = JSON.parse(localStorage.getItem('selectedBooks'));
		if (localBooks) setSelectedBooks(localBooks);
	}, []);
	/* eslint-disable react/jsx-props-no-spreading */
	return (
		<Component
			{...pageProps}
			selectedBooks={selectedBooks}
			setSelectedBooks={setSelectedBooks}
		/>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.shape().isRequired,
};

export default MyApp;
