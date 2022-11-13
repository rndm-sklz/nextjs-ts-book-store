import React from 'react';
import type { Book } from 'types/types';
import styles from 'styles/functional.module.less';

export default function FilterSelect({
	setBooksClient,
	books,
}: {
	setBooksClient: React.Dispatch<React.SetStateAction<Book[]>>;
	books: Book[];
}) {
	const authorsSet = Array.from(new Set(books.map((i) => i.author)));

	const authorsOptions = authorsSet.map((author) => (
		<option key={author} value={author}>
			{author}
		</option>
	));

	const genresSet = Array.from(new Set(books.map((i) => i.genre)));

	const genresOptions = genresSet.map((genre) => (
		<option key={genre} value={genre}>
			{genre}
		</option>
	));

	function authorFilter(e: React.ChangeEvent<HTMLSelectElement>) {
		const authorValue = e.target.value;
		if (authorValue === 'all') {
			setBooksClient(books);
		} else {
			setBooksClient(books.filter((i) => i.author === authorValue));
		}
	}

	function genreFilter(e: React.ChangeEvent<HTMLSelectElement>) {
		const genreValue = e.target.value;
		if (genreValue === 'all') {
			setBooksClient(books);
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
				<option value="all">-All-</option>
				{genresOptions}
			</select>
			<select
				name="filter-author"
				id="filter"
				className={styles.select}
				onChange={authorFilter}
			>
				<option value="all">-All-</option>
				{authorsOptions}
			</select>
		</form>
	);
}
