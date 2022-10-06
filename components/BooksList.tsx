import React from 'react';
import BookCard from 'components/BookCard';
import BookLine from 'components/BookLine';
import Context from 'components/Context';
import styles from 'styles/home.module.less';

export default function BooksList({
	isCardView,
}: {
	isCardView: boolean,
}) {
	const { booksClient } = React.useContext(Context);
	return isCardView ? (
		<div className={styles.cardView}>
			{booksClient.map((book) => (
				<BookCard
					book={book}
					key={book.id}
				/>
			))}
		</div>
	) : (
		<div className={styles.listView}>
			{booksClient.map((book) => (
				<BookLine
					book={book}
					key={book.id}
				/>
			))}
		</div>
	);
}
