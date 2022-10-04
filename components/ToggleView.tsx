import React from 'react';
import styles from 'styles/functional.module.less';

export default function ToggleView({
	setView,
	isCardView,
}: {
	setView: React.Dispatch<React.SetStateAction<boolean>>;
	isCardView: boolean;
}) {
	function handleListView() {
		setView(false);
	}
	function handleCardView() {
		setView(true);
	}
	return (
		<div className={styles.wrapperBtn}>
			<span className={styles.title}>View:</span>
			<button
				onClick={handleCardView}
				type="button"
				className={`${
					isCardView
						? `${styles.cardViewBtn} ${styles.btn} ${styles.btnActive}`
						: `${styles.cardViewBtn} ${styles.btn}`
				}`}
				aria-label="Card"
			/>
			<button
				onClick={handleListView}
				type="button"
				className={`${
					isCardView
						? `${styles.listViewBtn} ${styles.btn}`
						: `${styles.listViewBtn} ${styles.btn} ${styles.btnActive}`
				}`}
				aria-label="List"
			/>
		</div>
	);
}
