import React from 'react';
import PopoverItem from 'components/PopoverItem';
import type { Book } from 'pages/types';
import styles from 'styles/popover.module.less';

export default function PopoverListItem({
	setSelectedBooks,
	selectedBooks,
}: {
	setSelectedBooks: React.Dispatch<React.SetStateAction<Book[] | []>>;
	selectedBooks: Book[];
}) {
	return selectedBooks[0] ? (
		<div className={styles.popoverList}>
			{selectedBooks.map((selectedBook) => (
				<PopoverItem
					key={selectedBook.id}
					selectedBook={selectedBook}
					setSelectedBooks={setSelectedBooks}
					selectedBooks={selectedBooks}
				/>
			))}
		</div>
	) : (
		<p>Cart is empty</p>
	);
}
