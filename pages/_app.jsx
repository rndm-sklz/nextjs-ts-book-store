import '../styles/globals.css';
import React from 'react';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
	/* eslint-disable react/jsx-props-no-spreading */
	return <Component {...pageProps} />;
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.shape().isRequired,
};

export default MyApp;
