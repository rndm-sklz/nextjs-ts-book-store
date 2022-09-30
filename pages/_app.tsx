import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';

export type Book = {
	id: number,
	genre: string,
	author: string,
	cover: string,
	title: string,
	year: number,
	price: number,
	pcs: number
}

export default function MyApp({ Component, pageProps }: AppProps) {
	const [selectedBooks, setSelectedBooks] = useState<Book[] | []>([]);
	useEffect(() => {
		const localBooks = JSON.parse(localStorage.getItem('selectedBooks') || '');/* add ( || '') for TS */
		if (localBooks) setSelectedBooks(localBooks);
	}, []);
	return (
		<Component
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...pageProps}
			selectedBooks={selectedBooks}
			setSelectedBooks={setSelectedBooks}
		/>
	);
}
