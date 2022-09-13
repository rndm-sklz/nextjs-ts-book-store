import React from 'react';
import styles from '../styles/functional.module.css';

export default function FiterSelect() {
	return (
		<form>
			<label htmlFor="filter" className={styles.label}>Filter:</label>
			<select name="filter" id="filter" className={styles.select}>
				<option defaultValue disabled>Filter by</option>
				<option value="author">author</option>
				<option value="genre">genre</option>
				<option value="year">year</option>
			</select>
		</form>
	);
}
