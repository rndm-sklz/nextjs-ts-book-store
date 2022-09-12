import React from 'react';
import styles from '../styles/filters.module.css';

export default function ToggleView() {
	return (
		<div className={styles.wrapperBtn}>
			<span className={styles.title}>View:</span>
			<button type="button" className={styles.listViewBtn} aria-label="List" />
			<button type="button" className={styles.cardViewBtn} aria-label="Card" />
		</div>
	);
}
