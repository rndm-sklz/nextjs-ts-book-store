import React from 'react';
import PopoverItem from 'components/PopoverItem';
import Context from 'components/Context';
import styles from 'styles/popover.module.less';

export default function PopoverListItem() {
	const { selectedBooks } = React.useContext(Context);
	return selectedBooks.length ? (
		<div className={styles.popoverList}>
			{selectedBooks.map((selectedBook) => (
				<PopoverItem
					key={selectedBook.id}
					selectedBook={selectedBook}
				/>
			))}
		</div>
	) : (
		<p>Cart is empty</p>
	);
}
