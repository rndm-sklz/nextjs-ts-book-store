import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import type { Book } from '../pages/_app';
import styles from '../styles/cart.module.css';

export default function CartTotalPrice({ selectedBooks }: {selectedBooks: Book[]}) {
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	useEffect((): void => {
		const sumPrice = selectedBooks.reduce((sum, el) => sum + el.price * el.pcs, 0);
		setTotalPrice(sumPrice);
	}, [selectedBooks, totalPrice]);
	return (
		<div className={styles.totalPrice}>
			<p className={styles.totalPriceTitle}>Total price:</p>
			<p className={styles.totalPriceNum}>${totalPrice}</p>
			<button type="button" className={styles.payBtn} onClick={() => setIsOpen(true)}>Pay</button>
			{isOpen && (
				<div className={styles.payModalBgr}>
					<div className={styles.payModalWindow}>
						<p>Payment successfully completed!</p>
						<div className={styles.logoModalWindow}>
							<Image
								priority
								src="/img/cash.png"
								layout="fill"
								alt="Pay logo"
							/>
						</div>
						<button type="button" onClick={() => setIsOpen(false)}>Close</button>
					</div>
				</div>
			)}
		</div>
	);
}
