import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import CartItem from './CartItem';
import CartTotalPrice from './CartTotalPrice';
import styles from '../styles/cart.module.css';

export default function CartList({ selectedBooks, setSelectedBooks }) {
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

CartList.propTypes = {
	selectedBooks: PropTypes.arrayOf(
		PropTypes.shape(
			PropTypes.shape({
				id: PropTypes.number,
				pcs: PropTypes.number,
				author: PropTypes.string,
				imageLink: PropTypes.string,
				title: PropTypes.string,
				year: PropTypes.number,
				price: PropTypes.string,
			}).isRequired,
		),
	).isRequired,
	setSelectedBooks: PropTypes.func.isRequired,
};
