import React from 'react';
import type { Book } from 'pages/types';
import styles from 'styles/functional.module.less';

export default function SortSelect({
	booksClient,
	setBooksClient,
	books,
}: {
	booksClient: Book[];
	setBooksClient: React.Dispatch<React.SetStateAction<Book[]>>;
	books: Book[];
}) {
	function sortChange(e: React.ChangeEvent<HTMLSelectElement>) {
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
