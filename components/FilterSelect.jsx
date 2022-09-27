import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/functional.module.css';

export default function FiterSelect({
	authors, setBooksClient, books, genre,
}) {
	const authorsOptions = authors.map((i) => (
		<option key={i} value={i}>
			{i}
		</option>
	));
	const genreSet = Array.from(new Set(genre));
	const genreOptions = genreSet.map((i) => (
		<option key={i} value={i}>
			{i}
		</option>
	));

	function authorFilter(e) {
		const authorValue = e.target.value;
		if (authorValue === 'all' || authorValue === 'selected') {
			setBooksClient(() => books);
		} else {
			setBooksClient(books.filter((i) => i.author === authorValue));
		}
	}

	function genreFilter(e) {
		const genreValue = e.target.value;
		if (genreValue === 'all' || genreValue === 'selected') {
			setBooksClient(() => books);
		} else {
			setBooksClient(books.filter((i) => i.genre === genreValue));
		}
	}

	return (
		<form className={styles.filters}>
			<label htmlFor="filter-genre" className={styles.label}>
				Filter:
			</label>
			<select
				name="filter-genre"
				id="filter-genre"
				className={styles.select}
				onChange={genreFilter}
			>
				<option value="selected" className={styles.defaultOption}>
					by genre:
				</option>
				<option value="all">-All-</option>
				{genreOptions}
			</select>
			<select
				name="filter-author"
				id="filter"
				className={styles.select}
				onChange={authorFilter}
			>
				<option value="selected" className={styles.defaultOption}>
					by author:
				</option>
				<option value="all">-All-</option>
				{authorsOptions}
			</select>
		</form>
	);
}
FiterSelect.propTypes = {
	authors: PropTypes.arrayOf(PropTypes.string).isRequired,
	genre: PropTypes.arrayOf(PropTypes.string).isRequired,
	setBooksClient: PropTypes.func.isRequired,
	books: PropTypes.arrayOf(
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
};
