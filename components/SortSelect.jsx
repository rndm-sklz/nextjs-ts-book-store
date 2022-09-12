import React from 'react';
import styles from '../styles/filters.module.css';

export default function SortSelect() {
	return (
		<form>
			<label htmlFor="sort" className={styles.label}>Sort:</label>
			<select name="sort" id="sort" className={styles.select}>
				<option selected disabled>Sort by</option>
				<option value="author">author</option>
				<option value="genre">genre</option>
				<option value="year">year</option>
			</select>
		</form>
	);
}
