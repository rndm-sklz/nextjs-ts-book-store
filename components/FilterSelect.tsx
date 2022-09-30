import React from 'react';
import type { Book } from '../pages/_app';
import styles from '../styles/functional.module.css';

export default function FiterSelect({
	authors,
	setBooksClient,
	books,
	genre,
}: {
	authors: string[];
	setBooksClient: React.Dispatch<React.SetStateAction<Book[]>>;
	books: Book[];
	genre: string[];
}) {
	const authorsOptions = authors.map((i) => (
		<option key={i} value={i}>
			{i}
		</option>
	));
	const genreSet: string[] = Array.from(new Set(genre));
	const genreOptions = genreSet.map((i) => (
		<option key={i} value={i}>
			{i}
		</option>
	));

	function authorFilter(e: React.ChangeEvent<HTMLSelectElement>) {
		const authorValue = e.target.value;
		if (authorValue === 'all' || authorValue === 'selected') {
			setBooksClient(() => books);
		} else {
			setBooksClient(books.filter((i) => i.author === authorValue));
		}
	}

	function genreFilter(e: React.ChangeEvent<HTMLSelectElement>) {
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
