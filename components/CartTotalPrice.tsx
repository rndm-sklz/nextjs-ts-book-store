import React, { useState } from 'react';
import Image from 'next/image';
import type { Book } from 'pages/types';
import styles from 'styles/cart.module.css';

export default function CartTotalPrice({
	selectedBooks,
}: {
	selectedBooks: Book[];
}) {
	const [isOpen, setIsOpen] = useState(false);
	const sumPrice = selectedBooks.reduce((sum, el) => sum + el.price * el.pcs, 0);

	return (
		<div className={styles.totalPrice}>
			<p className={styles.totalPriceTitle}>Total price:</p>
			<p className={styles.totalPriceNum}>${sumPrice}</p>
			<button
				type="button"
				className={styles.payBtn}
				onClick={() => setIsOpen(true)}
			>
				Pay
			</button>
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
						<button type="button" onClick={() => setIsOpen(false)}>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
