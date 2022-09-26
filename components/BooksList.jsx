import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';
import styles from '../styles/home.module.css';
import BookLine from './BookLine';

export default function BooksList({
	booksClient,
	isCardView,
	selectedBooks,
	setSelectedBooks,
}) {
	// console.log(booksClient);
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

BooksList.propTypes = {
	booksClient: PropTypes.arrayOf(
		PropTypes.shape(
			PropTypes.shape({
				id: PropTypes.number,
				author: PropTypes.string,
				imageLink: PropTypes.string,
				title: PropTypes.string,
				year: PropTypes.number,
				price: PropTypes.string,
			}).isRequired,
		),
	).isRequired,
	isCardView: PropTypes.bool.isRequired,
	selectedBooks: PropTypes.arrayOf(
		PropTypes.shape(
			PropTypes.shape({
				id: PropTypes.number,
				pcs: PropTypes.number,
				author: PropTypes.string,
				imageLink: PropTypes.string,
				title: PropTypes.string,
				year: PropTypes.number,
				price: PropTypes.string,
			}).isRequired,
		),
	).isRequired,
	setSelectedBooks: PropTypes.func.isRequired,
};
