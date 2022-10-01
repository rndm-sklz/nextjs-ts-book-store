import React from 'react';
import CartList from 'components/CartList';
import PageLayout from 'components/PageLayout';
import type { Book } from 'pages/types';

export default function Cart({
	selectedBooks,
	setSelectedBooks,
}: {
	selectedBooks: Book[];
	setSelectedBooks: React.Dispatch<React.SetStateAction<Book[] | []>>;
}) {
	return (
		<PageLayout title="Shopping cart">
			<CartList
				selectedBooks={selectedBooks}
				setSelectedBooks={setSelectedBooks}
			/>
		</PageLayout>
	);
}
