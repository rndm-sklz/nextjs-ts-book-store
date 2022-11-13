import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import type { Book } from 'types/types';
import 'styles/globals.less';

export default function MyApp({ Component, pageProps }: AppProps) {
	const [selectedBooks, setSelectedBooks] = useState<Book[]>([]);
	useEffect(() => {
		const localBooks = localStorage.getItem('selectedBooks');
		if (localBooks) {
			const parseBooks = JSON.parse(localBooks);
			setSelectedBooks(parseBooks);
		}
	}, []);

	return (
		<Component
			{...pageProps}
			selectedBooks={selectedBooks}
			setSelectedBooks={setSelectedBooks}
		/>
	);
}
