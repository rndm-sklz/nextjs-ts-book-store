import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/functional.module.css';

export default function SortSelect({ booksClient, setBooksClient, books }) {
	function sortChange(e) {
		const sortValue = e.target.value;
		if (sortValue === 'yearAsc') {
			const sortByYear = [...booksClient].sort((a, b) => a.year - b.year);
			setBooksClient(sortByYear);
		} else if (sortValue === 'yearDesc') {
			const sortByYear = [...booksClient].sort((a, b) => b.year - a.year);
			setBooksClient(sortByYear);
		} else if (sortValue === 'priceAsc') {
			const sortByPrice = [...booksClient].sort((a, b) => a.price - b.price);
			setBooksClient(sortByPrice);
		} else if (sortValue === 'priceDesc') {
			const sortByPrice = [...booksClient].sort((a, b) => b.price - a.price);
			setBooksClient(sortByPrice);
		} else if (sortValue === 'authorAZ') {
			const sortByAuthor = [...booksClient].sort((a, b) => {
				const authorA = a.author.toLowerCase();
				const authorB = b.author.toLowerCase();
				if (authorA < authorB) {
					return -1;
				}
				if (authorA > authorB) {
					return 1;
				}
				return 0;
			});
			setBooksClient(sortByAuthor);
		} else if (sortValue === 'authorZA') {
			const sortByAuthor = [...booksClient].sort((a, b) => {
				const authorA = a.author.toLowerCase();
				const authorB = b.author.toLowerCase();
				if (authorA < authorB) {
					return 1;
				}
				if (authorA > authorB) {
					return -1;
				}
				return 0;
			});
			setBooksClient(sortByAuthor);
		} else {
			setBooksClient(books);
		}
	}
	return (
		<form className={styles.sorters}>
			<label htmlFor="sort" className={styles.label}>
				Sort:
			</label>
			<select
				name="sort"
				id="sort"
				className={styles.select}
				onChange={sortChange}
			>
				<option value="selected">sort by</option>
				<option value="authorAZ">author (A-Z)</option>
				<option value="authorZA">author (Z-A)</option>
				<option value="yearAsc">year (ascending)</option>
				<option value="yearDesc">year (descending)</option>
				<option value="priceAsc"> price (ascending)</option>
				<option value="priceDesc">price (descending)</option>
			</select>
		</form>
	);
}
SortSelect.propTypes = {
	// authors: PropTypes.arrayOf(PropTypes.string).isRequired,
	// genre: PropTypes.arrayOf(PropTypes.string).isRequired,
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
