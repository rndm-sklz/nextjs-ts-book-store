import React from 'react';
import Link from 'next/link';
import type { Book } from 'pages/types';
import CartItem from 'components/CartItem';
import CartTotalPrice from 'components/CartTotalPrice';
import styles from 'styles/cart.module.less';

export default function CartList({
	selectedBooks,
	setSelectedBooks,
}: {
	selectedBooks: Book[];
	setSelectedBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}) {
	return selectedBooks.length ? (
		<div className={styles.cartList}>
			<div className={styles.inCart}>
				<h2>Books in cart:</h2>
				<Link href="/">
					<a href="/">
						<button type="button" className={styles.goHomeBtn}>
							Back
						</button>
					</a>
				</Link>
			</div>
			{selectedBooks.map((selectedBook) => (
				<CartItem
					key={selectedBook.id}
					selectedBook={selectedBook}
					setSelectedBooks={setSelectedBooks}
				/>
			))}
			<CartTotalPrice selectedBooks={selectedBooks} />
		</div>
	) : (
		<div className={styles.isEmptyWrapper}>
			<h2 className={styles.isEmpty}>Cart is empty!</h2>
			<Link href="/">
				<a href="/">
					<button type="button" className={styles.goHomeBtn}>
						Back
					</button>
				</a>
			</Link>
		</div>
	);
}
