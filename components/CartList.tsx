import React from 'react';
import Link from 'next/link';
import type { Book } from '../pages/_app';
import CartItem from './CartItem';
import CartTotalPrice from './CartTotalPrice';
import styles from '../styles/cart.module.css';

export default function CartList({
	selectedBooks,
	setSelectedBooks,
}: {
	selectedBooks: Book[];
	setSelectedBooks: React.Dispatch<React.SetStateAction<Book[] | []>>;
}) {
	return selectedBooks[0] ? (
		<div className={styles.cartList}>
			<div className={styles.inCart}>
				<h2>Books in cart:</h2>
				<Link href="./">
					<a href="/#">
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
					selectedBooks={selectedBooks}
				/>
			))}
			<CartTotalPrice selectedBooks={selectedBooks} />
		</div>
	) : (
		<div className={styles.isEmptyWrapper}>
			<h2 className={styles.isEmpty}>Cart is empty!</h2>
			<Link href="./">
				<a href="/#">
					<button type="button" className={styles.goHomeBtn}>
						Back
					</button>
				</a>
			</Link>
		</div>
	);
}
