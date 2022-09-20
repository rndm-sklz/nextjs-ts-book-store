import '../styles/globals.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
	const [selectedBooks, setSelectedBooks] = useState([]);
	console.log(selectedBooks);
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
