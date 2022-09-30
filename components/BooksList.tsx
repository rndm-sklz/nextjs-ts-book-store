import React from 'react';
import BookCard from './BookCard';
import BookLine from './BookLine';
import type { Book } from '../pages/_app';
import styles from '../styles/home.module.css';

export default function BooksList({
	booksClient,
	isCardView,
	selectedBooks,
	setSelectedBooks,
}: {
	booksClient: Book[],
	isCardView: boolean,
	selectedBooks: Book[],
	setSelectedBooks: React.Dispatch<React.SetStateAction<Book[] | []>>;
}) {
	return isCardView ? (
		<div className={styles.cardView}>
			{booksClient.map((book) => (
				<BookCard
					book={book}
					key={book.id}
					setSelectedBooks={setSelectedBooks}
					selectedBooks={selectedBooks}
				/>
			))}
		</div>
	) : (
		<div className={styles.listView}>
			{booksClient.map((book) => (
				<BookLine
					book={book}
					key={book.id}
					setSelectedBooks={setSelectedBooks}
					selectedBooks={selectedBooks}
				/>
			))}
		</div>
	);
}