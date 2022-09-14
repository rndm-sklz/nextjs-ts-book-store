import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';
import styles from '../styles/home.module.css';
import BookLine from './BookLine';

export default function BooksList({ books, isCardView }) {
	return isCardView ? (
		<div className={styles.cardView}>
			{books.map((book) => (
				<BookCard book={book} key={book.id} />
			))}
		</div>
	) : (
		<div className={styles.listView}>
			{books.map((book) => (
				<BookLine book={book} key={book.id} />
			))}
		</div>
	);
}

BooksList.propTypes = {
	books: PropTypes.arrayOf(PropTypes.shape(
		PropTypes.shape({
			id: PropTypes.number,
			author: PropTypes.string,
			imageLink: PropTypes.string,
			title: PropTypes.string,
			year: PropTypes.number,
			price: PropTypes.string,
		}).isRequired,
	)).isRequired,
	book: PropTypes.shape({
		id: PropTypes.number,
		author: PropTypes.string,
		imageLink: PropTypes.string,
		title: PropTypes.string,
		year: PropTypes.number,
		price: PropTypes.string,
	}).isRequired,
	isCardView: PropTypes.bool.isRequired,
};
