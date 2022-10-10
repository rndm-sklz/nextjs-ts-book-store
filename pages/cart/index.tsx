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
	const cartContext = React.useMemo(
		() => ({ selectedBooks, setSelectedBooks }),
		[selectedBooks, setSelectedBooks],
	);
	return (
		<Context.Provider value={cartContext}>
			<PageLayout title="Shopping cart">
				<CartList />
			</PageLayout>
		</Context.Provider>
	);
}
