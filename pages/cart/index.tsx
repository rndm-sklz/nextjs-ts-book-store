import React from 'react';
import CartList from 'components/CartList';
import Context from 'components/Context';
import PageLayout from 'components/PageLayout';
import type { Book } from 'pages/types';

export default function Cart({
	selectedBooks,
	setSelectedBooks,
}: {
	selectedBooks: Book[];
	setSelectedBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}) {
	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<Context.Provider value={{ selectedBooks, setSelectedBooks }}>
			<PageLayout title="Shopping cart">
				<CartList />
			</PageLayout>
		</Context.Provider>
	);
}
