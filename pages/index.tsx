import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import type { Book } from './_app';
import styles from '../styles/home.module.css';
import PageLayout from '../components/PageLayout';
import FilterSelect from '../components/FilterSelect';
import SortSelect from '../components/SortSelect';
import ToggleView from '../components/ToggleView';
import BooksList from '../components/BooksList';
import ShopCart from '../components/ShopCart';

export default function Home({
	books,
	setSelectedBooks,
	selectedBooks,
}: {
	books: Book[];
	setSelectedBooks: React.Dispatch<React.SetStateAction<Book[] | []>>;
	selectedBooks: Book[]
}) {
	const [isCardView, setIsCardView] = useState<boolean>(true);
	const [booksClient, setBooksClient] = useState<Book[]>(books);
	const authors: string[] = books.map((i) => i.author);
	const genre: string[] = books.map((i) => i.genre);
	return (
		<PageLayout title="Home">
			<div className={styles.filtersWrapper}>
				<FilterSelect
					setBooksClient={setBooksClient}
					authors={authors}
					genre={genre}
					books={books}
				/>
				<SortSelect
					booksClient={booksClient}
					setBooksClient={setBooksClient}
					books={books}
				/>
				<ToggleView setView={setIsCardView} isCardView={isCardView} />
				<ShopCart
					selectedBooks={selectedBooks}
					setSelectedBooks={setSelectedBooks}
				/>
			</div>
			<div className={styles.booksWrapper}>
				<BooksList
					booksClient={booksClient}
					isCardView={isCardView}
					setSelectedBooks={setSelectedBooks}
					selectedBooks={selectedBooks}
				/>
			</div>
		</PageLayout>
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
