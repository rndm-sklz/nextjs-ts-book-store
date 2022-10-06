import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import PageLayout from 'components/PageLayout';
import FilterSelect from 'components/FilterSelect';
import SortSelect from 'components/SortSelect';
import ToggleView from 'components/ToggleView';
import BooksList from 'components/BooksList';
import ShopCart from 'components/ShopCart';
import Context from 'components/Context';
import styles from 'styles/home.module.less';
import type { Book } from 'pages/types';

export default function Home({
	books,
	setSelectedBooks,
	selectedBooks,
}: {
	books: Book[];
	setSelectedBooks: React.Dispatch<React.SetStateAction<Book[]>>;
	selectedBooks: Book[]
}) {
	const [isCardView, setIsCardView] = useState(true);
	const [booksClient, setBooksClient] = useState<Book[]>(books);

	return (
		// Лучше не отключать это правило, а обернуть в useMemo, как пишет линтер
		// Пример: https://stackoverflow.com/a/71256507
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<Context.Provider value={{
			selectedBooks, setSelectedBooks, booksClient, setBooksClient,
		}}
		>
			<PageLayout title="Home">
				<div className={styles.filtersWrapper}>
					<FilterSelect
						books={books}
					/>
					<SortSelect
						books={books}
					/>
					<ToggleView
						setView={setIsCardView}
						isCardView={isCardView}
					/>
					<ShopCart />
				</div>
				<div className={styles.booksWrapper}>
					<BooksList
						isCardView={isCardView}
					/>
				</div>
			</PageLayout>
		</Context.Provider>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(
		'https://my-json-server.typicode.com/rndm-sklz/book-store-db/books',
	);
	const books = await res.json();
	return {
		props: {
			books,
		},
	};
};
