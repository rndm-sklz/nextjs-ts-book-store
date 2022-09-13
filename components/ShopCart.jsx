import React from 'react';
import Link from 'next/link';
import styles from '../styles/functional.module.css';

export default function ShopCart() {
	return (
		<Link href="/cart">
			<a href="/cart">
				<div className={styles.cartBlock}>
					<span>Shopping Cart</span>
					<button type="button" className={styles.cartBtn} aria-label="cart" />
				</div>
			</a>
		</Link>
	);
}
