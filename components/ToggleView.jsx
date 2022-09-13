import React from 'react';
import styles from '../styles/functional.module.css';

export default function ToggleView() {
	return (
		<div className={styles.wrapperBtn}>
			<span className={styles.title}>View:</span>
			<button type="button" className={`${styles.listViewBtn} ${styles.btn}`} aria-label="List" />
			<button type="button" className={`${styles.cardViewBtn} ${styles.btn}`} aria-label="Card" />
		</div>
	);
}
