import React from 'react';
import BooksListItem from 'components/BooksListItem';
import type { Book } from 'pages/types';
import styles from 'styles/home.module.less';

export default function BooksList({
	booksClient,
	isCardView,
}: {
	booksClient: Book[],
	isCardView: boolean,
}) {
	return isCardView ? (
		<div className={styles.cardView}>
			{booksClient.map((book) => (
				<BooksListItem
					book={book}
					key={book.id}
					isCardView={isCardView}
				/>
			))}
		</div>
	) : (
		<div className={styles.listView}>
			{booksClient.map((book) => (
				<BooksListItem
					book={book}
					key={book.id}
					isCardView={isCardView}
				/>
			))}
		</div>
	);
}
